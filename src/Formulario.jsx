import React, { Component } from "react";

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      currentTime: new Date(),
    };

    this.changeFullName = this.changeFullName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  changeFullName(e) {
    this.setState({
      fullName: e.target.value,
    });
  }
  changeEmail(e) {
    this.state({
      email: e.target.value,
    });
  }

  updateTime() {
    this.setState({
      currentTime: new Date(),
    });
  }

  componentDidMount() {
    this.timeInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    console.log("-----------------------");
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  render() {
    return (
      <div className="ed-grid">
        <h1>Formulario</h1>
        <h4>{this.state.currentTime.toLocaleTimeString()}</h4>

        <form className="ed-container" id="myForm">
          <div className="ed-item l-50 form__item">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              onChange={this.changeFullName}
            />
          </div>

          <div className="ed-item l-50 form__item">
            <label htmlFor="emailAddress">Email Address</label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              onChange={this.changeEmail}
            />
          </div>

          <div className="ed-item form__item">
            <input type="button" className="button full small" value="Send" />
          </div>
        </form>

        <div>
          <p>
            Hola soy {this.state.fullName} con correo {this.state.email}
          </p>
        </div>
      </div>
    );
  }
}

export default Formulario;
