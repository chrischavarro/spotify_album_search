import React, { Component } from 'react';

class AlbumList extends Component {

	renderAlbums(){
		return this.props.albums.map((album, index) => {
			return <li key={index}>{album.name}</li>
		})
	}

	render() {
		return(
			<ul>
				{ this.renderAlbums() }
			</ul>
			)
	}

}

export default AlbumList