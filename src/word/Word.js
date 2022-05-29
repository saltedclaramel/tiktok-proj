import { React, Component } from 'react';
import './word.css';
import Letter from './Letter';

class Word extends Component {
    constructor(props){
        super(props);
        this.state = {
            visibilityDict: {},
            selectedDone: false
        }
        this.handleVisibility = this.handleVisibility.bind(this)
    }
    componentDidMount(){
        const visibilityDict = {}
        const selectedWordList = this.props.selectedWord.split('')
        for (const letter in selectedWordList){
            if (selectedWordList[letter] in visibilityDict)
                continue
            else if (selectedWordList[letter] === " ")
                visibilityDict[selectedWordList[letter]] = true
            else
                visibilityDict[selectedWordList[letter]] = false
        }
        this.setState({
            visibilityDict: visibilityDict,
            selectedDone: true
        });
    }
    handleVisibility(letter){
        if (this.state.visibilityDict.hasOwnProperty(letter) && this.state.selectedDone === true){
            this.setState(prevState => ({
                visibilityDict: {
                    ...prevState.visibilityDict,
                    [letter]: true
                }
            }), () => {
                const allTrue = Object.values(this.state.visibilityDict).every(
                    value => value === true
                )
                if (allTrue){
                    this.props.onAllCorrect()
                    console.log(allTrue)
                }
            }
            )
            console.log(this.state.visibilityDict)
            // const allTrue = Object.values(this.state.visibilityDict).every(
            //     value => value === true
            // )
            // console.log(allTrue)
        }
    }
    render() {
        const keyboardKeysRow1 = [
            'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'
        ];
        const keyboardKeysRow2 = [
            'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'
        ];
        const keyboardKeysRow3 = [
            'Z', 'X', 'C', 'V', 'B', 'N', 'M'
        ]
        if (this.state.selectedDone === false){
            return( 
                <div>loading...</div>
            )
        } else{
            console.log(this.state.visibilityDict)
            return (
                <div className='general-layout'>
                    <div className='word'>
                    {
                        this.props.selectedWord.split('').map((letter) => {
                            if (letter === " ")
                                return <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            return <div>
                                <Letter letter={letter} visible={this.state.visibilityDict[letter]}/>
                            </div>
                        })
                    }
                    </div>
                    <div className='keyboard'>
                        <div>
                            { keyboardKeysRow1.map((keyboardKey, index) =>
                                <button className='keyboard-button' onClick={() => this.handleVisibility(keyboardKeysRow1[index])}>
                                    { keyboardKey }
                                </button>
                            )}
                        </div>
                        <div>
                            { keyboardKeysRow2.map((keyboardKey, index) =>
                                <button className='keyboard-button' onClick={() => this.handleVisibility(keyboardKeysRow2[index])}>
                                    { keyboardKey }
                                </button>
                            )}
                        </div>
                        <div>
                            { keyboardKeysRow3.map((keyboardKey, index) =>
                                <button className='keyboard-button' onClick={() => this.handleVisibility(keyboardKeysRow3[index])}>
                                    { keyboardKey }
                                </button>
                            )}
                        </div>
                        
                        

                </div>
                </div>
            )
        }

        
}
}

export default Word;