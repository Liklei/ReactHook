import React from 'react';

export default class List extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           numbers: props.number,
           listItem: []
       }   
    }
    componentWillMount() {
        this.renderListItem();
    }
    renderListItem() {
        let items = this.state.numbers.map((item, index) => 
            <li key={index.toString()}>{item}</li>
        )
        this.setState((state) => ({ 
            listItem: items
        })) 
       
    }
    
    render() {
        return (
            <ul className="list">
              {this.state.listItem}
            </ul>
        )
    }
}
