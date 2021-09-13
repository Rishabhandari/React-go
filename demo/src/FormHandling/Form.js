import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      personList: [],
    };
    this.handleUserName = this.handleUserName.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserName(event) {
    this.setState({
      username: event.target.value,
    });
  }
  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }
  handleSubmit() {
    alert(`username : ${this.state.username} EMAIL : ${this.state.email}`);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Username:{" "}
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUserName}
        />
        Email:
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        {this.state.personList.id}
        {this.state.personList.map((person) => person.email)}
        <button type="submit">Submit</button>
      </form>
    );
  }
  // componentDidMount() {
  //   axios.get(`http://westriveracademy.test/api/record`).then((res) => {
  //     const persons = res.data;
  //     console.log(persons);
  //     this.setState({ personList: persons });
  //   });
  // }
}
export default Form;
