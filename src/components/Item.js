import styles from "./cssModules/Item.module.css";
import { getDatabase, ref, set, remove } from "firebase/database";
import { app } from "../services/firebase";

export const Item = ({ id, item, checked }) => {
  const db = getDatabase(app);

  const handleChangeChecked = () => {
    set(ref(db, "List/" + id + "/checked"), !checked);
  };

  const handleChangeRemoveItem = () => {
    remove(ref(db, "List/" + id));
  };

  return (
    <div className={styles.item}>
      <span>
        <input
          onChange={handleChangeChecked}
          checked={checked}
          type="checkbox"
        />
        <h3>{item}</h3>
      </span>
      <button onClick={handleChangeRemoveItem}>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
        >
          <path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm-14-2.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5h-14v16.5zm5-18.5h4v-1h-4v1z" />
        </svg>
      </button>
    </div>
  );
};
