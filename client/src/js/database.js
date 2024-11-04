import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const db = await initdb();
  await db.put("jate", { content: content });
  console.log("Data added to DB", content);

  //return console.error('putDb not implemented');
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  //console.error("getDb not implemented");
  const db = await initdb();
  const dbContent = await db.getAll('jate');
  console.log("dbContent", dbContent)
  return dbContent;
}
  
initdb();
