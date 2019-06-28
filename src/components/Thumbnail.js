import React, { Component } from 'react';

class Thumbnail extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="Thumbnail">
                <div className="container">
                    <figure>
                        <div className="imgContainer">
                            <img src={this.props.img} alt="img" />
                        </div>
                        <figcaption>
                            <div className="title">{this.props.title} </div>
                            <div className="description">{this.props.description}</div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        )
    }
}

export default Thumbnail;