import React, { Component } from "react";
import GifItem from "../gifItem/";
import './gifList.css';

export default class Index extends Component {
    getData = () => {
        const results = this.props.gifs;
        let data;

        if (this.props.randomGif !== '') {
            data = <GifItem url={this.props.randomGif} key={1} />;
            return data;
        }
        else
        {
            data = results.map((g) => {
                return <GifItem key={g.id} url={g.images.downsized.url} />;
            });
        }

        return data;
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">{this.getData()}</div>
            </div>
        );
    }
}