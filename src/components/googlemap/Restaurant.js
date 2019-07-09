import React, {Component} from 'react'
import {InfoWindow, Map, Marker ,GoogleApiWrapper} from 'google-maps-react'
import {debounce} from 'lodash'


class Restaurant extends Component {
    makeURL(name, address) {
      // In future development cycles, this can be replaced
      // with a call to the Google Place Details API, or an
      // additional view with detailed Place information
      const queryParameter = window.encodeURIComponent(`${name} ${address}`)
      return `https://www.google.com/search?q=${queryParameter}`
    }
    render() {
        return (
          <div className="App-Restaurant" data-hook={this.props.placeId}>
            <h3 className="App-Restaurant-title">
              {`${this.props.markerNumber}. `}
              <a href={this.makeURL(this.props.name, this.props.address)} target={'_blank'}>
                {this.props.name}
              </a>
            </h3>
            <span className="App-Restaurant-info">Rating: {this.props.rating} / 5</span>
            <span className="App-Restaurant-info">{this.props.address}</span>
            <span className="App-Restaurant-info">{this.props.opening_hours}</span>
          </div>
        )
      }
    }

    export default Restaurant;