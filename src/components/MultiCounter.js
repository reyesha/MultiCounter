import React, { Component } from 'react';
import CounterGroup from './CounterGroup.js'
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer'
import CounterGroupSum from './CounterGroupSum.js'
import CounterGroupContainer from '../containers/CounterGroupContainer.jsx';

class MultiCounter extends Component {

    constructor(props) {
        super(props);
        
        this.state = { size: 0, sum: 0};
    }
    
    onGenerate = (size) => {
        this.setState({ size });
    }

    onSum = (value) => {
        this.setState(() => ({sum: value}))
    }

    render() {
        return (
            <div>
                <CounterSizeGeneratorContainer onGenerate={this.onGenerate}/>
                <CounterGroupSum sum={this.state.sum}/>
                <CounterGroupContainer size={this.state.size} onSum={this.onSum}/>
            </div>
        );
    }
}

export default MultiCounter;