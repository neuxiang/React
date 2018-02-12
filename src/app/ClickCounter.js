import React, {Component} from 'react';

class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.onClickButton = this.onClickButton.bind(this);
    }

    componentDidUpdate() {
    }

    onClickButton() {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <p>
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
