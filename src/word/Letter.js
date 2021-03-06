import { React, Component } from 'react';

class Letter extends Component{
    // constructor(props){
    //     super(props);
        // this.state = {
        //     visible: false
        // }
        
    // }
    componentDidMount(){
        this.setState({
            visible: this.props.visible[this.props.letter]
        })
    }
    render(){
        const letter = this.props.letter
        if (this.props.visible === false){
            return(
                <div>___ &nbsp;&nbsp;</div>
            )
        }
        if (this.props.visible === true){
            return(
                <div>
                    <u>
                    &nbsp;{ letter }&nbsp;
                    </u>
                    &nbsp;&nbsp;
                </div>
            )
        }
    }
}

export default Letter;