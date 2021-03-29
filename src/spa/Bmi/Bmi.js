import React from "react";

import "./Bmi.scss";

class Bmi extends React.Component {
  state = {
    result: "",
    height: "",
    weight: "",
    bmi: "",
    checkHealth: ""
  };
  calBmi = () => {
    const { height, weight } = this.state;
    console.log(height);

    const calcBmi = (weight / (height / 100) ** 2).toFixed(2);
    this.setState({
      bmi: calcBmi
    });

    console.log(this.state.bmi);
   
    let resultDisplay =
      this.state.bmi > 25
        ? (<p>overwieght</p>)
        : (<p>perfect</p>);
    this.setState({
      result: resultDisplay
    });
  };
  clearAll = () => {
    console.log("test");
    this.setState({
      height: "",
      weight: "",
      bmi: "",
      result: ""
    });
  };

  render() {
    return (
      <div className="bmi">
        <div className="bmi-heading">
          <h1> Calculate your <span className="b-m-i"> BMI</span></h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </h2>
          </div>

        <div className="container">
          {" "}
          <div className="ui card">
           
               <div className="fields">
                <div class="field">
                  <label>Height: </label>
                  <input
                    type="number"
                    placeholder="Height in cms"
                    value={this.state.height}
                    onChange={e => this.setState({ height: e.target.value })}
                  />
                </div>
                <br />
                <div className="field">
                  <label>Weight: </label>

                  <input
                    type="number"
                    placeholder="Weight in Kgs"
                    value={this.state.weight}
                    onChange={e => this.setState({ weight: e.target.value })}
                  />
                </div>

                </div>
            <div className="buttons">

                  <button className="ui button" tabindex="0" onClick={this.calBmi}>
                    Check
                  </button>
                  <button
                    className="ui button"
                    tabindex="1"
                    onClick={this.clearAll}
                  >
                    Clear
                  </button>

                 </div> 
            </div>
            <div className="display-bmi">
              <p className="bmi-display">{` Your BMI is ${this.state.bmi}`}</p>
              <p className="result-display">{this.state.result}</p>
            </div>
    
        </div>
      </div>
    );
  }
}


export default Bmi;