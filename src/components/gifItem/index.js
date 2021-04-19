import React, { Component } from "react";

class Index extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="card">
                    <img
                        alt="gif"
                        src={this.props.url}
                    />
                </div>
            </div>
        );
    }
}

export default Index;