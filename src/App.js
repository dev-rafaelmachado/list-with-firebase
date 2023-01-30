import "./App.css";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "./services/firebase";
import { Input } from "./components/Input";
import { Item } from "./components/Item";

function App() {
  const [items, setItems] = useState([]);
  const db = getDatabase(app);

  useEffect(() => {
    const listRef = ref(db, "/List");
    onValue(listRef, (snapshot) => {
      const data = snapshot.val();
      let list = [];
      for (const key in data) {
        list.push({
          id: key,
          item: data[key]["item"],
          checked: data[key]["checked"],
        });
      }
      setItems(list);
    });
  }, [db]);

  return (
    <div className="App">
      <div className="form">
        <Input />
      </div>
      <div className="listItems">
        {items.map((Element) => (
          <Item
            key={Element.id}
            id={Element.id}
            item={Element.item}
            checked={Element.checked}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
