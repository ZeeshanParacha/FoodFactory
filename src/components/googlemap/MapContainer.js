import React, {Component} from 'react'
import {InfoWindow, Map, Marker ,GoogleApiWrapper} from 'google-maps-react'
import {debounce} from 'lodash'



class MapContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      infoWindowVisible: false,
      activeRestaurant: null,
      activeMarker: null
    }

    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onMapClick = this.onMapClick.bind(this)
  }

  onMarkerClick(markerProps, marker) {
    if (!this.state.activeMarker || this.state.activeMarker === marker) {
      this.setState({
        infoWindowVisible: !this.state.infoWindowVisible,
        activeRestaurant: markerProps,
        activeMarker: marker
      })
    } else {
      this.setState({
        activeRestaurant: markerProps,
        activeMarker: marker
      })
    }

    // Scroll the restaurant listing into view
    const sidebarElement = document.querySelector(`div[data-hook=${markerProps.placeId}]`)
    sidebarElement.scrollIntoView({behavior: "smooth"})
  }

  onMapClick() {
    if (this.state.infoWindowVisible) {
      this.setState({
        infoWindowVisible: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <div className='App-MapContainer'>
        <Map
       
          google={this.props.google}
          centerAroundCurrentLocation={true}
          zoom={15}
          initialCenter={{lat: 37.79, lng: -122.41}}
          onReady={this.props.retrieveMap}
          onBounds_changed={debounce(this.props.handleMapBoundsChange, 500)}
          onClick={this.onMapClick}
          scrollwheel={false}
          // These map controls could be included in future
          // iterations, but would require further UX consideration
          // as to how they serve this relatively focused,
          // responsive web app
          fullscreenControl={false}
          mapTypeControl={false}
          streetViewControl={false}
        >
          {this.props.results.map(result =>
            <Marker
              key={result.place_id}
              placeId={result.place_id}
              name={result.name}
              position={result.geometry.location}
              icon={{url: `https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=${result.markerNumber}|FFA500`}}
              onClick={this.onMarkerClick}
            />
          )}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.infoWindowVisible}
          >
            <div>
              <span className='App-MapContainer-InfoWindow'>{this.state.activeRestaurant && this.state.activeRestaurant.name}</span>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC9iT33vKT-pb7Lrok97X5aNPhGlY6iDBo'
  })(MapContainer);