import React, { Component } from 'react';
import AlbumTracks from './AlbumTracks'
import axios from 'axios';


class CurrentAlbum extends Component {

	constructor(props){
		super(props)
		this.state = {
			currentTracklist: [],
			albumArt: null,
			songPreview: null
		}
	}

	// setCurrentTrack(key) {
	// 	this.setState({songPreview: key})
	// }

	renderTracks() {
		// console.log(this.state.currentTracklist)
		return (
			this.state.currentTracklist.map((track) =>
				<AlbumTracks
					songURL={track.preview_url}
					name={track.name} />
			)
		)
	}
				// <li 
				// 	key={track.preview_url} 
				// 	onClick={this.setCurrentTrack(this.key)}
				// 	>
				// 		{track.name}
				// </li>

	renderAlbumArt() {

	}

	render() {

		if (this.props.album) {
		axios.get(`https://api.spotify.com/v1/albums/${this.props.album.id}`)
		.then((response) => {
			// console.log(response)
			const album = response.data
			this.setState({
				currentTracklist: album.tracks.items,
				albumArt: album.images[1].url
			})
		})
		}

		// console.log(this.state.currentTracklist)
		return (
			<div>
	
				<div><img src={this.state.albumArt}/></div>
				<ul>{this.renderTracks()}</ul>
				<audio controls>
				  <source src={this.state.songPreview} type="audio/mpeg" />
				</audio>

			</div>
		)
	}
}


export default CurrentAlbum;