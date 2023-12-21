import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    coin: 'heads',
    heads: 0,
    tails: 0,
  }

  onClickFunction = () => {
    const randomNumber = Math.ceil(Math.random() * 2)
    if (randomNumber === 1 || randomNumber === 0) {
      this.setState({coin: 'heads'})
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState({coin: 'tails'})
      this.setState(prevState => ({
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {heads, tails, coin} = this.state

    let imageEle

    const total = heads + tails

    if (coin === 'heads') {
      imageEle = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else if (coin === 'tails') {
      imageEle = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }

    return (
      <div className="bg-class">
        <div className="coin-bg">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="headOrTails"> Heads (or) Tails</p>

          <div className="imgCon">
            <img src={imageEle} alt="toss result" className="coin-img" />
          </div>

          <button type="submit" className="btn" onClick={this.onClickFunction}>
            Toss Coin
          </button>

          <div className="result-Con">
            <p className="score-para">Total: {total}</p>
            <p className="score-para">Heads: {heads}</p>
            <p className="score-para">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
