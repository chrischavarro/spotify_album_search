import React from 'react';
// import axios from 'axios';

const Album = ({album, onAlbumSelect}) => {
		// console.log(album)

	return (
		<li onClick={() => onAlbumSelect(album)} className="list-group-item">
			<div>
				{album.name}
			</div>
		</li>
	)
}


export default Album;