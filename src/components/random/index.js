import React, {Component} from 'react';

export default class Index extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.random(1);
    };

    rand = e => {
        this.handleClick(e);
    };
    render() {
        return (
            <div className="container-fluid">
                            <button
                                className="ui badge-danger"
                                type="submit"
                                onClick={this.rand}
                            >
                                Clique para gerar um GIF aleatório!!!
                            </button>
            </div>
        )
    }
}