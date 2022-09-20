import React from "react";

export default class State extends React.Component {
  state = {
    name: "ozodbek",
    familya: "jumayev",
    age: 21,
    number: 0,
  };
  onChange = (e) => {
    this.setState({
      name: "Shaxzoda",
      familya: "Sodiqova",
      age: 15,
      number: this.state.number + 10,
    });
  };
  render() {
    const { name, familya, age, number } = this.state;
    return (
      <div>
        <h3>Name: {"  " + name}</h3>
        <h3>Familya:{"  " + familya}</h3>
        <h3>Age:{"  " + age}</h3>
        <h3>Number:{"  " + number}</h3>
        <button onClick={(e) => this.onChange()}>Onchange</button>
      </div>
    );
  }
}
