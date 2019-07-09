import React, {Component} from 'react'
import {InfoWindow, Map, Marker ,GoogleApiWrapper} from 'google-maps-react'
import {debounce} from 'lodash'
import Restaurant from './Restaurant';


class Restaurants extends Component {
    render() {
      return (
        <div className="App-Restaurants">
          {this.props.results.map(result =>
            <Restaurant
              key={result.place_id}
              placeId={result.place_id}
              markerNumber={result.markerNumber}
              name={result.name}
              rating={result.rating}
              address={result.formatted_address}
              
            />
          )}
        </div>
      )
    }
  }
  
  export default Restaurants;

