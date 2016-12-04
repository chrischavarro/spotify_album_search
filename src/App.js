import React, { Component } from 'react';
import AlbumList from './components/AlbumList'
import AlbumForm from './components/AlbumForm';
import CurrentAlbum from './components/CurrentAlbum'
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      albumList: [],
      selectedAlbum: null

    }
  }

  onFormSubmit(newSearch){
    // console.log(newSearch)
    axios.get('https://api.spotify.com/v1/search?type=album&query=' + newSearch.name)
      .then((response) => {

        this.setState({ 
          albumList: response.data.albums.items 
        })
        // console.log(response.data.albums.items)
        // console.log(this.state.albumList)
      })
      .catch((err) => {
        alert(err)
      })
  }

  render() {
    // console.log(this.props.albumName)
    // ALBUM RENDER IS PASSING ALBUMS TO ALBUM COMPONENT AS THIS.PROPS.ALBUMS
    return (
      <div>
        <span>Search for an Album!</span>
        <AlbumForm onSearchSubmit={this.onFormSubmit.bind(this)} /> 
        <AlbumList 
          onAlbumSelect={selectedAlbum => this.setState({selectedAlbum})}
          albums={this.state.albumList} 
        />
        <CurrentAlbum album={this.state.selectedAlbum} />
      </div>

      )
  }

}




export default App;
