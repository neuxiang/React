import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';

class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.onClickButton().bind(this);
        this.state1 = {count: 0};

    }

    onClickButton() {
        this.setState1({count: this.state.count + 1})
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div>
                    <button onClick={this.onClickButton}>Click me</button>
                    <div>
                        Click Count: {this.state.count}

                    </div>
                </div>
            </div>
        );
    }
}

export default ClickCounter;
