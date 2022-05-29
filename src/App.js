import { React, Component } from 'react';
import './App.css';
import Hangman from './hangman/Hangman';
import Word from './word/Word';
import PlayBtn from './resources/play.png'
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      introPage: true,
      selectedWord: "",
      errorCount: 0,
      correct: false
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handleAllCorrect = this.handleAllCorrect.bind(this);
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
  handleAllCorrect = () => {
    console.log('in function')
    this.setState({
      correct: true
    })
  }
  render(){
    const onIntroPage = this.state.introPage;
    let pageShown;
    if (onIntroPage === true){
      pageShown = <div className="intro-page">
                    <h1 style={{letterSpacing: 20}}>
                      HANGMAN
                    </h1>
                    <br/>
                    <button className='play-btn'>
                      <img src={ PlayBtn } alt="play button" width={'40%'} onClick={ this.handlePlay }/>
                    </button>
                  </div>
    } else{
      if (this.state.correct === true){
        pageShown = <div className="intro-page">
          <h1 style={{letterSpacing: 20}}> CONGRATULATIONS 😃 </h1>
        </div>
      }
      else{
        if (this.state.errorCount < 6){
          pageShown = <div className="game-page">
                        <div className='hangman'>
                          <Hangman errorCount={this.state.errorCount}/>
                        </div>
                        <div className='word'>
                          <Word selectedWord={this.state.selectedWord} errorCount={this.state.errorCount} correct={this.state.correct} onAllCorrect={this.handleAllCorrect}/>
                        </div>
                      </div>
        }
        else{
          pageShown = <div className="intro-page">
            <h1 style={{letterSpacing: 20}}> YOU LOST 😕 </h1>
          </div>
        }
      }
    }
    
    return (
      <div>
        { pageShown }
      </div>
    );
  }
}

export default App;
