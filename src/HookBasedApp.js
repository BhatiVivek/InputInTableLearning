import React, { useState } from "react";
import "./styles.css";

let HookBasedApp = () => {
  const [state, setState] = useState({ name: "", country: "" });
  const [listData, setListData] = useState([]);

  let handleOnChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.id;

    setState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  let handleOnSubmit = (event) => {
    event.preventDefault();
    const { name, country } = state;
    setListData([...listData, { name, country }]);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="App">
        <div>
          <label>Enter Name: </label>
          <input
            id="name"
            type="text"
            value={state.name}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Select Country: </label>
          <select id="country" value={state.country} onChange={handleOnChange}>
            <option>--Select--</option>
            <option>India</option>
            <option>Pak</option>
            <option>China</option>
          </select>
        </div>
        <input type="submit" />
        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>country</th>
            </tr>
          </thead>
          <tbody>
            {listData.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{val.name}</td>
                  <td>{val.country}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default HookBasedApp;
