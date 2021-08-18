import React from 'react';
import '<./musicSearchForm.css'

class MusicSearchForm extends Component {
    
function musicSearchForm(props) {
    render() {
        return(
            <div className="searchformusic-nav">
                <h3>Search for Music</h3>
                <h3>Search for Music</h3>
                <form onSubmit = {(event) => this.handleSubmit(event)}>
                    <label for="song_name">Song Name: </label>
                    <input type="text" songName="song_name" onChange={this.handleChange} value={this.state.songName}/>
                    <label for-="artist">Artist: </label>
                    <input type="text" artistName="artist_name" onChange={this.handleChange} value={this.state.artistName}/>
                    <label for-="album_name">Album: </label>
                    <input type="text" albumName="album_name" onChange={this.handleChange} value={this.state.albumName}/>
                    <button type="submit"> Search </button>
                </form>
            </div>
        )
    }
}
export default MusicSearchForm;