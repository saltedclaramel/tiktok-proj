import { React, Component } from 'react';
import './user-input.css';

class UserInput extends Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        const keyboardKeysRow1 = [
            'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'
        ]
        const keyboardKeysRow2 = [
            'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'
        ]
        const keyboardKeysRow3 = [
            'Z', 'X', 'C', 'V', 'B', 'N', 'M'
        ]
      return (
          <div className='keyboard'>
                <div>
                    { keyboardKeysRow1.map((keyboardKey) =>
                        <button className='keyboard-button'>
                            { keyboardKey }
                        </button>
                    )}
                </div>
                <div>
                    { keyboardKeysRow2.map((keyboardKey) =>
                        <button className='keyboard-button'>
                            { keyboardKey }
                        </button>
                    )}
                </div>
                <div>
                    { keyboardKeysRow3.map((keyboardKey) =>
                        <button className='keyboard-button'>
                            { keyboardKey }
                        </button>
                    )}
                </div>
                
                  

          </div>
      );
    }
}

export default UserInput;