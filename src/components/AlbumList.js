import React from 'react';
import Album from './Album';

const AlbumList = (props) => {
	const albumItems = props.albums.map((album, index) => {
		return (
			<Album
				onAlbumSelect={props.onAlbumSelect}
				album={album}
				key={album.id} />
		)
	});

	return (
		<ul className="col-sm-6 list-group">
			{albumItems}
		</ul>
	)

};

// class AlbumList extends Component {


// 	// onAlbumSearch(albumList) {
// 	// 	return albumList.map( (album) => {
// 	// 		return <li>{album}</li>
// 	// 	})

// 	// }

// 	onAlbumClick(album){
// 		// console.log(album)
// 		// axios.get('https://api.spotify.com/v1/albums/' + ) 
// 	}

// 	// albumInfo(){
// 	// 	return this.props.albums.map((album, index) => {
// 	// 		var newAlbum = {
// 	// 			name: album.name,
// 	// 			artist: album.artists[0].name
// 	// 		}
// 	// 		// console.log(newAlbum)
// 	// 		this.props.albumCollection(newAlbum);
// 	// 	})
// 	// }

// 	renderAlbums(){
// 		return this.props.albums.map((album, index) => {
// 			return <li key={index}>
// 						<h4>
// 							<a href="#" onClick={this.onAlbumClick}>
// 								{album.name}
// 							</a>
// 						</h4>
// 					</li>					
// 		})
// 	}

// 	render() {
// 		return(
// 			<div className="col-sm-6">
// 				<ul>
// 					{ this.renderAlbums() }
// 				</ul>
// 			</div>
// 			)
// 	}

// }

export default AlbumList