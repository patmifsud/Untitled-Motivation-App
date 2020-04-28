import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import libraryShuffled from './library.js';
import Card from './Card/Card';



class App extends Component {
    state = {
      feedContent: [],
      otherCards: [...libraryShuffled],
    }

    
    componentDidUpdate() {
      this.scrollToBottom();
    }

    scrollToBottom = () => {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    addCardToFeed = () => {
      let feedContentArray = ([...this.state.feedContent]);
      let otherCardsArray = [...this.state.otherCards];
      let newCard = this.state.otherCards[0];

      feedContentArray.push(newCard);
      otherCardsArray.shift()

      this.setState({feedContent: [...feedContentArray], 
                     otherCards: [...otherCardsArray]});
    };


    addCardsHandler = (amountToAdd) => {
      if (this.state.otherCards.length >= amountToAdd){
          for (let i = amountToAdd; i >= 0; i--) {
            this.addCardToFeed();
          }} else {
            alert("Looks like you've seen almost everything already. You must be pretty inspired now.");
      }
    };

    noMoreCardsMessage = () => {
      return <div className="seenItAll"><p>You've seen it all 🤷‍</p>
        <p>You must be pretty motiviated now.&nbsp;
        <a onClick={this.reset} href="#">Reset</a>
        </p></div>
    }

    addCardButtonText = () => {
      return this.state.feedContent.length < 1 ? "Motivate me" : 
            this.state.feedContent.length < 4 ? "Motivate me more" :
            this.state.feedContent.length < 7 ? "MORE MOTIVATION" :
            this.state.feedContent.length < 9 ? "Not working yet, MORE!" :
            "MOTIVATION!!!"
    }
    
    reset = () => {
      this.setState({ feedContent:[], otherCards: [...libraryShuffled] })
    }

  render() {

    console.log("STATE: FEED CONTENT ");
    console.log(this.state.feedContent)
    console.log("STATE: OTHERCARDS ");
    console.log(this.state.otherCards)

    let feed = null;

    if (this.state.feedContent) {
      feed = (
          <div className="cardContainer">
            {this.state.feedContent.length < 1 ? <p className="howToUse">How to use: <br/> Click the orange button<br/>until you want to work.</p> : null}
            {this.state.feedContent.map((feedItem) => {
                return <Card 
                title={feedItem.title}
                desc={feedItem.desc}
                video={feedItem.video}
                image={feedItem.image}
                quote={feedItem.quote}
                key={feedItem.key}
                />
              })}
          </div>
      )
    }

    let buttons = (
      <div className="buttons">
        {this.state.otherCards.length >= 1 ? 
            <button className="addCard" onClick={() => this.addCardsHandler(1)}>{this.addCardButtonText()}</button> : this.noMoreCardsMessage()}
      </div>
    );
    

  return (<div className="App">
    <Header />
    {this.state.feedContent.length >= 1 ? <a className="clearCards" onClick={this.reset}>Reset</a> 
    : null}
    <div id="main" className="mainContainer">
    {feed}
    <div id="pageBottom" style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
    </div>
    </div>

    {buttons}    
    </div>
  );
}
}

export default App;


 
