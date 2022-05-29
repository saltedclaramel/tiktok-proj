import { React, Component } from 'react';
import './hangman.css';

class Hangman extends Component {

    render() {
        const errorCount = this.props.errorCount;
        let circleShown;
        if (errorCount > 0){
            circleShown = <circle cx="140" cy="70" r="30" stroke='#397684' strokeWidth='5'/>
        }
        else{
            circleShown = ""
        }
        let bodyShown;
        if (errorCount > 1){
            bodyShown = <line x1="140" y1="100" x2="140" y2="180" stroke='#397684' strokeWidth='5'/>
        }
        else{
            bodyShown = ""
        }
        let leftArmShown;
        if (errorCount > 2){
            leftArmShown = <line x1="140" y1="130" x2="100" y2="115" stroke='#397684' strokeWidth='5'/>
        }
        else{
            leftArmShown = ""
        }
        let rightArmShown;
        if (errorCount > 3){
            rightArmShown = <line x1="140" y1="130" x2="180" y2="115" stroke='#397684' strokeWidth='5'/>
        }
        else{
            rightArmShown = ""
        }
        let leftLegShown;
        if (errorCount > 4){
            leftLegShown = <line x1="140" y1="180" x2="100" y2="210" stroke='#397684' strokeWidth='5'/>
        }
        else{
            leftLegShown = ""
        }
        let rightLegShown;
        if (errorCount > 5){
            rightLegShown = <line x1="140" y1="180" x2="180" y2="210" stroke='#397684' strokeWidth='5'/>
        }
        else{
            rightLegShown = ""
        }
      return (
          <div>
            <svg height={250}>
                <line x1="60" y1="20" x2="140" y2="20" stroke='#e6be8a' strokeWidth='10'/>
                <line x1="140" y1="20" x2="140" y2="50" stroke='#e6be8a' strokeWidth='10'/>
                <line x1="60" y1="20" x2="60" y2="230" stroke='#e6be8a' strokeWidth='10'/>
                <line x1="20" y1="230" x2="100" y2="230" stroke='#e6be8a' strokeWidth='10'/>
                
                { circleShown }
                { bodyShown }
                { leftArmShown }
                { rightArmShown }
                { leftLegShown }
                { rightLegShown }
            </svg>
          </div>
      );
    }
}

export default Hangman;