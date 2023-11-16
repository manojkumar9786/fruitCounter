// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onMangoIncrement = () => {
    this.setState(prevState => {
      return {mangoCount: prevState.mangoCount + 1}
    })
  }

  onMangoIncrement = () => {
    this.setState(prevState => {
      return {mangoCount: prevState.mangoCount + 1}
    })
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="container">
        <div className="fruit-content-container">
          <h1>
            Bob ate {mangoCount} mangoes {bananaCount} bananas
          </h1>
          <div className="fruit-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="btn btn-primary"
                onClick={this.onMangoIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="mango"
              />
              <button
                className="btn btn-primary"
                onClick={this.onBananaIncrement}
              >
                Eat Mango
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
