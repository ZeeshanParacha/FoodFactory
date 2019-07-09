import React, {Component} from 'react'
import {InfoWindow, Map, Marker ,GoogleApiWrapper} from 'google-maps-react'
import {debounce} from 'lodash'


class Search extends Component {
    constructor(props) {
      super(props)
  
      this.state = {input: ''}
      
      this.handleTextInput = this.handleTextInput.bind(this)
      this.performSearch = this.performSearch.bind(this)
    }
  
    handleTextInput(e) {
      this.setState({input: e.target.value})
    }
  
    performSearch(e) {
      if (e) {e.preventDefault()}
  
      this.props.placesService.textSearch(
        {
          query: this.state.input,
          type: 'restaurant',
          bounds: this.props.mapBounds
        },
        this.props.handleSearchResults
      )
    }
  
    componentDidUpdate(previousProps) {
      // When the search service first becomes available,
      // run a query on all restaurants within the map bounds
      if (!previousProps.placesService && this.props.placesService) {
        this.performSearch()
      }
  
      if (previousProps.mapBounds !== this.props.mapBounds) {
        this.performSearch()
      }
    }
  
    render() {
      return (
        <div className="App-header-Search" onSubmit={this.performSearch}>
          <form className="App-header-Search-form">
            <input
              type="text"
              className="App-header-Search-input"
              placeholder="Search your nearby restaurants"
              value={this.state.input}
              onChange={this.handleTextInput}
            />
            <button type="submit" className="App-header-Search-button">
            <i className="fa fa-map-marker"></i>
            </button>
        
          
          </form>
        </div>
      )
    }
  }
  
  export default Search;