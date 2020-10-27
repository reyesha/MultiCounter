import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 0
        };
    }

    componentWillUnmount() {
        this.props.onChangeHandler(-this.state.number);
    }

    onIncrease = () => {
        this.setState((prevState) => ({ number: prevState.number + 1 }), () => this.props.onChangeHandler(1));
    }

    onDecrease = () => {
        this.setState((prevState) => ({ number: prevState.number - 1 }), () => this.props.onChangeHandler(-1));
    }

    render() {
        return (
            <section>
                <input type="button" value=" + " onClick={this.onIncrease} class="w3-button w3-xlarge w3-teal"/>
                <span class="width"> {this.state.number} </span>
                <input type="button" value=" - " onClick={this.onDecrease} class="w3-button w3-xlarge w3-teal"/>
            </section>
        );
    }
}

export default Counter;