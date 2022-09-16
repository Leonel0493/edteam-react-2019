import React, { Component } from "react";
import axios from "axios";
import ProffesorCard from "../Organisms/ProffesorsCard";

export default class Proffesor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      proffesors: [],
    };
  }

  componentDidMount() {
    /*fetch("http://localhost:4000/proffesors", { method: "get" })
      .then((resp) => resp.json())
      .then((r) => this.setState({ proffesors: r }));*/
    axios
      .get("http://localhost:4000/proffesors")
      .then((res) => {
        this.setState({
          proffesors: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { proffesors } = this.state;
    return (
      <div className="ed-grid">
        <h1>Proffesors</h1>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
          {proffesors.map((p) => (
            <ProffesorCard key={p.idProffesor} {...p} />
          ))}
        </div>
      </div>
    );
  }
}
