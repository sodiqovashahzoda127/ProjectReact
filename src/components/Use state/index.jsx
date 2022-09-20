import React, { useState } from "react";

function UseState() {
  const [Familya, setSurname] = useState("Tursunboyeva");
  const [name, setName] = useState("Munisa");
  const [title, setTitle] = useState("O'quvchi");
  const [number, setNumber] = useState(0);
  const [age, setAge] = useState(14);
  const onHendle = () => {
    setSurname("Sodiqova");
    setName("Shaxzoda");
    setTitle("IT-dan o'quvchi");
    setNumber(number + 10);
    setAge(15);
  };
  return (
    <div>
      <table border={"3px"} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Surname</th>
            <th>Name</th>
            <th>Title</th>
            <th>Number</th>
            <th>Age</th>
            <th>Buton</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Familya}</td>
            <td>{name}</td>
            <td>{title}</td>
            <td>{number}</td>
            <td>{age}</td>
            <td>
              <button onClick={() => onHendle()}>Change</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default UseState;
