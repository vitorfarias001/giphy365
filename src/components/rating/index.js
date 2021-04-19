import React, {Component} from 'react';

export default class Index extends Component {
    handleClick = (e, value) => {
        e.preventDefault();
        this.props.rating(value);
    };

    ratn = e => {
        this.handleClick(e, e.target.value);
    };
    render() {
        return (
            <div className="container-fluid">
                <select
                    id="gender"
                    onChange={this.ratn}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        )
    }
}