import { React, Component } from 'react';
import './App.css';
import Hangman from './hangman/Hangman';
import Word from './word/Word';
import UserInput from './user-input/UserInput';
import PlayBtn from './resources/play.png'
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      introPage: true,
      selectedWord: "",
    };
    this.handlePlay = this.handlePlay.bind(this);
  }
  handlePlay(){
    const wordlist = [
      "NO WAY HOME", 
      "HOMECOMING",
      "FAR FROM HOME",
      "DOCTOR STRANGE", 
      "ETERNALS", 
      "SHANGCHI", 
      "BLACK WIDOW", 
      "CAPTAIN MARVEL", 
      "BLACK PANTHER", 
      "INFINITY WAR",
      "ENDGAME", 
      "THOR RAGNAROK", 
      "CIVIL WAR", 
      "DEADPOOL", 
      "IRON MAN",
      "THE FIRST AVENGER",
      "ANTMAN"
    ]
    const min = 0
    const max = wordlist.length
    const rand = Math.round(1 + Math.random() * (max - min))
    this.setState({
        selectedWord: wordlist[rand],
        introPage: false
    })
  }
  render(){
    const onIntroPage = this.state.introPage;
    let pageShown;
    if (onIntroPage){
      pageShown = <div className="intro-page">
                    <h1>
                      HANGMAN
                    </h1>
                    <br/>
                    <button className='play-btn'>
                      <img src={ PlayBtn } alt="play button" width={'40%'} onClick={ this.handlePlay }/>
                    </button>
                  </div>
    } else {
      pageShown = <div className="game-page">
                    <div className='hangman'>
                      <Hangman/>
                    </div>
                    <div className='word'>
                      <Word selectedWord={this.state.selectedWord}/>
                    </div>
                    <div className='user-input'>
                      <UserInput/>
                    </div>
                  </div>
    }
    
    return (
      <div>
        { pageShown }
      </div>
    );
  }
}

export default App;
