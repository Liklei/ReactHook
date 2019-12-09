import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            times: new Date()
        }
    }
    componentDidMount() {
        this.trick();
    }
    componentWillUnmount() {
        clearInterval(this.TrickTimer);
    }
    trick() {
       let that = this; 
       this.TrickTimer =  setInterval(() => {
          that.setState((state, props) => ({
            times: new Date()
           }))
       }, 1000);
    }
    render() {
        return (
            <div className="timer">
               {this.state.times.toLocaleTimeString()}
            </div>
        ) 
    }
}
export default Timer