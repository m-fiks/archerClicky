import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import friends from "./friends.json"

class App extends Component {

  state = {
    friends,
    currentScore: 0,
    highScore: 0,
    clicked: [],
  };

  resetGame = () => {
    this.setState({
      friends,
      currentScore: 0,
      highScore: this.state.currentScore,
      clicked: [],
    })
    this.shuffleArray(friends)
  }

  //randomize image cards
  shuffleArray = arr => {
    const newFriends = arr.sort(() => Math.random() - 0.5)
    this.setState({friends : newFriends})
  }

  //add id to clicked array
  clicked = card => {
    this.shuffleArray(friends)
    if (this.state.clicked.includes(card.target.id)) {
      this.resetGame();
    } else {
      //increase score by 1
      this.increase();
      //add id to clicked array
      const newClicksArray = this.state.clicked.slice();
      newClicksArray.push(card.target.id)
      this.setState({ clicked: newClicksArray})
    }
  }

  //increase score
  increase = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({currentScore : newScore})
  }

  render() {
    return (
      <Wrapper>
      <Header
      currentScore = {this.state.currentScore}
      highScore = {this.state.highScore}
      />
      {this.state.friends.map(friend => (
      <ImageCard
          key={friend.id}
          id={friend.id}
          clicked={this.clicked}
          title={friend.name}
          image={friend.image}
        />
      ))}
      </Wrapper>
    );
  }
}

export default App;
