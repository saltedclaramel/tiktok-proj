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
    }
    componentDidMount(){
        const visibilityDict = {}
        const selectedWordList = this.props.selectedWord.split('')
        for (const letter in selectedWordList){
            if (selectedWordList[letter] in visibilityDict)
                continue
            else
                visibilityDict[selectedWordList[letter]] = false
        }
        this.setState({
            visibilityDict: visibilityDict,
            selectedDone: true
        });
    }
    // handleVisibility(){
    
    // }
    render() {
        if (this.state.selectedDone === false){
            return( 
                <div>loading...</div>
            )
        }else{
            return (
                <div className='word'>
                {
                    this.props.selectedWord.split('').map((letter) => {
                        if (letter === " ")
                            return <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        return <div>
                            <Letter letter={letter} visible={this.state.visibilityDict}/>
                        </div>
                    })
                }
                </div>
            )
        }

        
}
}

export default Word;