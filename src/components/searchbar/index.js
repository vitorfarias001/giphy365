import React, {Component} from 'react';

export default class Index extends Component {
    handleChange = (e, value) => {
        e.preventDefault();
        this.props.getGifs(value, 0);
    };

    handleTextChange = e => {
        this.handleChange(e, e.target.value);
    };
    render() {
        return (
            <div className="container-fluid">
                <div className="row bg-primary">
                    <div className="col-md-12">
                        <h4 className="text-center">
                            <input
                                className="ui input search"
                                type="text"
                                placeholder="Procure seus gifs!!!"
                                onChange={this.handleTextChange}
                            />
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}