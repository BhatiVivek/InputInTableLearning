import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "",
        phone: ""
      },
      listData: []
    };
  }

  handleOnChange = (event) => {
    this.setState((prevState) => {
      return {
        userData: {
          ...prevState,
          [event.target.id]: event.target.value
        }
      };
    });
  };

  render() {
    console.log("this.state", this.state.userData);
    return (
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
          <option>India</option>
          <option>Pak</option>
          <option>China</option>
        </select>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>country</th>
            </tr>
          </thead>
          <tbody>data.map</tbody>
        </table>
      </div>
    );
  }
}

export default App;
