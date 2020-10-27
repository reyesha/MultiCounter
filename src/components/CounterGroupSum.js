import React, { Component } from 'react';


class CounterGroupSum extends Component {

    render() {
        return (
            <div>
                <span> Sum: {this.props.sum} <br/><br/></span> 
            </div>
        );
    }
}

export default CounterGroupSum;