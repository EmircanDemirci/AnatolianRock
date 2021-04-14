import React, { Component } from 'react'
import './Body.css'
export default class Body extends Component {
    render() {
        return (
            <div className="main">
                <div className="singers">
                    {
                        this.props.singers.map(singer => (
                            <div>
                                <div className="singer">
                                    <a onClick={() => this.props.onClick(singer)}><img src={singer.img}></img></a>
                                    <p>{singer.name}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="history">
                    <h1>{this.props.currentSinger.name}</h1>
                    <p>{this.props.currentSinger.history}</p>
                </div>
            </div>

        )
    }
}
