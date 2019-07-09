
import React, { Component } from 'react'
import { InfoWindow, Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import { debounce } from 'lodash'
import MapContainer from './googlemap/MapContainer';
import Search from './googlemap/Search';
import Restaurants from './googlemap/Restaurants';
import './googlemap/google.css'

class GoogleMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      results: [],
      map: null,
      mapBounds: null,
      placesService: null
    }

    this.handleSearchResults = this.handleSearchResults.bind(this)
    this.retrieveMap = this.retrieveMap.bind(this)
    this.handleMapBoundsChange = this.handleMapBoundsChange.bind(this)
  }

  retrieveMap(mapProps, map) {
    this.setState(
      { map: map },
      () => {
        this.setState({
          placesService: new window.google.maps.places.PlacesService(this.state.map)
        })
      }
    )
  }

  handleSearchResults(results) {
    this.setState({
      results: results
        // Currently, only display a maximum of nine results;
        // increase this via pagination in a future dev cycle

        // Identify the Google Maps marker icon. The icon URL
        // will be generated within the map element.
        .map((r, index) => {
          r.markerNumber = index + 1
          return r
        })
    })
  }

  handleMapBoundsChange() {
    // Unfortunately, the Google Maps `bounds_changed` event
    // doesn't return the bounds value.
    // This function is debounced in the prop assignment to
    // avoid too-frequent calls.
    this.setState({ mapBounds: this.state.map.getBounds() })
  }

  render() {

    const { results } = this.state;
    console.log('resultsssssssssssss', results)
    return (
      <div className="googleMap">
        <head className="head">
          
          
          <Search
            handleSearchResults={this.handleSearchResults}
            placesService={this.state.placesService}
            mapBounds={this.state.mapBounds}
          />
        </head>

        <div className="App-content">
          <MapContainer
            map={this.state.map}
            retrieveMap={this.retrieveMap}
            handleMapBoundsChange={this.handleMapBoundsChange}
            results={this.state.results}
          />
          <Restaurants
            results={this.state.results}
          />
        </div>
      </div>
    )
  }
}


export default GoogleMap
