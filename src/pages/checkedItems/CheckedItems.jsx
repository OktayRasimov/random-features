import { useState } from "react";
import "./CheckedItems.css";

function CheckedItems() {
  const [leftData, setLeftData] = useState([
    {
      id: 1,
      completed: false,
      task: "sleep",
    },
    {
      id: 2,
      completed: false,
      task: "eat",
    },
    {
      id: 3,
      completed: false,
      task: "run",
    },
    {
      id: 4,
      completed: false,
      task: "train",
    },
    {
      id: 5,
      completed: false,
      task: "work",
    },
  ]);

  return (
    <div className="checkedItems-container">
      <div className="boxes">
        <ul>
          {leftData.map((el) => (
            <li key={el.id}>
              <input type="checkbox" id={el.id} />
              <p>{el.task}</p>
            </li>
          ))}
        </ul>
      </div>
      <main className="arrows">
        <button>0=====</button>
        <button>=====0</button>
      </main>
      <div className="boxes">
        <ul>
          {/* {data.map((el) => (
            <li key={el.id}>
              <input type="checkbox" id={el.id} />
              <p>{el.task}</p>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}

export default CheckedItems;
