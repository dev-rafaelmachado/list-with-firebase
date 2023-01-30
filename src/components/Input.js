import { useState } from "react";
import { getDatabase, ref, set, push } from "firebase/database";
import { app } from "../services/firebase";
import styles from "./cssModules/Input.module.css"

export const Input = () => {
  const [item, setItem] = useState("");
  const db = getDatabase(app);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const postListRef = ref(db, "/List");
      const newPostRef = push(postListRef)
      set(newPostRef, {
        item,
        checked: false
    }).then( () => {
        setItem("")
    }).catch (error => {
        console.log(error)
    });
    }
  };

  return (
    <div>
      <input
        className={styles.input}
        onKeyDown={handleKeyDown}
        onChange={(e) => setItem(e.target.value)}
        value={item}
        type="text"
      />
    </div>
  );
};
