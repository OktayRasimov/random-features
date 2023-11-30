import { useEffect, useState } from "react";
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
  const [rightData, setRightData] = useState([]);

  useEffect(
    function () {
      console.log(leftData);
    },
    [leftData]
  );

  function boxLeftChecked(id) {
    const newData = leftData.map((el) => {
      if (el.id !== id) return el;
      return { ...el, completed: !el.completed };
    });
    setLeftData(newData);
  }
  function boxRightChecked(id) {
    const newData = rightData.map((el) => {
      if (el.id !== id) return el;
      return { ...el, completed: !el.completed };
    });
    setRightData(newData);
  }

  function transferToRight() {
    const forTransferToRight = leftData.filter((el) => el.completed === true);
    console.log(forTransferToRight);
    const finalForRight = forTransferToRight.map((el) => {
      if (el.completed === true) {
        return { ...el, completed: false };
      }
      return el;
    });
    const toRemainOnLeft = leftData.filter((el) => el.completed === false);
    setLeftData(toRemainOnLeft);
    setRightData((prev) => [...prev, ...finalForRight]);
  }

  function transferToLeft() {
    const forTransferToLeft = rightData.filter((el) => el.completed === true);
    console.log(forTransferToLeft);
    const finalForLeft = forTransferToLeft.map((el) => {
      if (el.completed === true) {
        return { ...el, completed: false };
      }
      return el;
    });
    const toRemainOnRight = rightData.filter((el) => el.completed === false);
    setRightData(toRemainOnRight);
    setLeftData((prev) => [...prev, ...finalForLeft]);
  }

  return (
    <div className="checkedItems-container">
      <div className="boxes">
        <ul>
          {leftData.map((el) => (
            <li key={el.id}>
              <input
                type="checkbox"
                id={el.id}
                onChange={() => boxLeftChecked(el.id)}
                checked={el.completed}
              />
              <p>{el.task}</p>
            </li>
          ))}
        </ul>
      </div>
      <main className="arrows">
        <button onClick={transferToLeft}>0=====</button>
        <button onClick={transferToRight}>=====0</button>
      </main>
      <div className="boxes">
        <ul>
          {rightData.map((el) => (
            <li key={el.id}>
              <input
                type="checkbox"
                id={el.id}
                onChange={() => boxRightChecked(el.id)}
                checked={el.completed}
              />
              <p>{el.task}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CheckedItems;
