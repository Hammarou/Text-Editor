import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id" });
      console.log("jate database created");
    },
  });

// Logic for accepting content and adding it to the database
export const putDb = async (content) => {
  const db = await initdb();

  const tx =  db.transaction('jate',  'readwrite');
  const store = tx.objectStore('jate');

  await store.put( {id: 1, content: content });
  await tx.done;

};

// Logic for getting all content from the database
export const getDb = async () => {
  const db = await initdb();
  const dbContent = await db.get('jate', 1);
  console.log("dbContent", dbContent)
  return dbContent;
}
  
initdb();
