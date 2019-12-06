import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    women: []
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`).then(res => {
      console.log(res.data);
      this.setState({
        women: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h3>Soccer Women's World Cup</h3>
        {this.state.women.map(player => {
          return (
            <div>
          <div className="card"> 
            Name: {player.name} <br/>
            country: {player.country}
            </div>
            </div>
          )
        })}
      </div>
    );
  }
}
export default App;
