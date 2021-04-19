import React, { Component } from "react";

class Header extends Component {
    getCount = () => {
        let count = 0;

        if (this.props.noGifs === 0 && this.props.noRandomGif !== 0) {
            count = 1;
            return count;
        }
        else if(this.props.noGifs !== 0 && this.props.noRandomGif === 0)
        {
            count = this.props.noGifs;
            return count;
        }
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 offset-4">
                        <div className="page-header">
                            <h1>
                                Lista de Gifs <span className="badge badge-pill badge-success">{this.getCount()}</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;