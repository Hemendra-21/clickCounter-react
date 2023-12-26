// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="background-container">
        <h1 className="heading-style">
          The Button has been clicked <br />
          <span className="count-style">{count}</span> times
        </h1>
        <p className="paragraph-styles">
          Click the button to increase the count!
        </p>
        <button className="button-styles" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
