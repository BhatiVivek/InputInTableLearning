import React, { Component } from "react";
import "./styles.css";

class ClassBasedApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      country: "",
      listData: []
    };
  }

  handleOnChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.id;

    this.setState({
      [name]: value
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { name, country, listData } = this.state;
    listData.push({ name, country });
    this.setState({
      listData: listData
    });
  };

  render() {
    const { listData } = this.state;
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div className="App">
          <label>Enter Name: </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <label>Select Country: </label>
          <select
            id="country"
            value={this.state.country}
            onChange={this.handleOnChange}
          >
            <option>--Select--</option>
            <option>India</option>
            <option>Pak</option>
            <option>China</option>
          </select>
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
  }
}

export default ClassBasedApp;
