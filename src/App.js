import './App.css';
import Hangman from './hangman/Hangman';
import Word from './word/Word';
import UserInput from './user-input/UserInput';

function App() {
  return (
    <div className="App">
      <div className='hangman'>
        <Hangman/>
      </div>
      <div className='word'>
        <Word/>
      </div>
      <div className='user-input'>
        <UserInput/>
      </div>
    </div>
  );
}

export default App;
