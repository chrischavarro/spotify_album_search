import React, { Component } from 'react';

class AlbumForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			albumName: ""
		}
	}

	onalbumNameChange(e){
		this.setState({albumName: e.target.value})
	}

	albumSearch(e){
		e.preventDefault();
		var newSearch = {
			name: this.state.albumName
		};

		this.setState({
			albumName: ""
		})

		this.props.onSearchSubmit(newSearch);
	}


	render() {
		return(
	      <form onSubmit={this.albumSearch.bind(this)}>
	        <input
	          placeholder="Album"
	          value={this.state.albumName}
	          onChange={this.onalbumNameChange.bind(this)}
	          />
	        <button type="submit">Search Album</button>
	      </form>

			)
		}

}

export default AlbumForm;