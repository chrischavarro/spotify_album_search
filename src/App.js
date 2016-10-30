import React, { Component } from 'react';
import './App.css';
import AlbumList from './AlbumList'
import Album from './Album';
import AlbumDetailModal from './AlbumDetailModal';
import AlbumForm from './AlbumForm';
import axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state = {
      albumList: []
    }
  }

  onFormSubmit(newSearch){
    console.log(newSearch)
    axios.get('https://api.spotify.com/v1/search?type=album&query=' + newSearch.name)
      .then((response) => {

        this.setState({ albumList: response.data.albums.items })
        
        console.log(response.data.albums.items)
      })
      .catch((err) => {
        alert(err)
      })
  }

  render() {
    var { name } = this.state;
    console.log(this.props.albumName)
    return (
      <div>
        <span>Your Search For { name }</span>
        <AlbumForm onSearchSubmit={this.onFormSubmit.bind(this)} />
        <AlbumList albums={this.state.albumList} />
      </div>

      )
  }

}




export default App;
