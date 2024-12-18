// Import methods to save and get data from the indexedDB database in './database.js'
import { getDb, putDb } from "./database";
import { header } from "./header";

export default class {
  constructor() {
    let localData;
    if (localData) {
       localData = localStorage.setItem("content", header);
    }
    

    // check if CodeMirror is loaded
    if (typeof CodeMirror === "undefined") {
      throw new Error("CodeMirror is not loaded");
    }

    this.editor = CodeMirror(document.querySelector("#main"), {
      value: "",
      mode: "javascript",
      theme: "monokai",
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // When the editor is ready, set the value to whatever is stored in indexeddb.
    // Fall back to localStorage if nothing is stored in indexeddb, and if neither is available, set the value to header.
    getDb()
      .then((data) => {
      console.info("Loaded data from IndexedDB, injecting into editor", data);
      
      let content;
      if (data.content) {
        content = data.content
      }
      this.editor.setValue(content || localData || header);
    });

    this.editor.on("change", () => {
      putDb(this.editor.getValue());
      console.log("getDB", this.editor.getValue())
      
    });

    // Save the content of the editor when the editor itself is loses focus
    this.editor.on("blur", () => {
      console.log("The editor has lost focus");
     
      putDb(this.editor.getValue());
    });
  }
}
