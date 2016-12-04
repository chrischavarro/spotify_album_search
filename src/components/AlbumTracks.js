import React, { Component } from 'react';

class AlbumTracks extends Component {

	constructor(props) {
		super(props)
		this.state = {
			currentTrack: null
		}
	}

	render() {
		// console.log(this.props)
		// const trackURL = this.props.songURL

		return (
				<li 
					key={this.props.songURL} 
						
					>
						{this.props.name}
				</li>

		)
		// setCurrentTrack(track) {
		// 	this.setState(
		// 		{currentTrack: track})
		// }
	}

}

export default AlbumTracks;