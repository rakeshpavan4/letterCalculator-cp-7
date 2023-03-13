// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangesearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="container">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>

          <form className="form">
            <label htmlFor="details" className="para">
              Enter the phrase
            </label>
          </form>

          <input
            id="details"
            type="text"
            placeholder="Enter the phrase"
            className="input"
            onChange={this.onChangesearchInput}
          />
          <p type="button" className="button">
            No.of letters: {searchInput.length}
          </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt=" letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
