import React, {Component} from 'react';
    
class MusicSearchForm extends Component{
    state = {
        songName: '',
        artistName: '',
        albumName: ''
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handle

render(){
    return(
        <div className="row row-space">
            <div className="col-md-12" style={{ padding: 0 }}>
            <h1>Search for Music</h1>
                <div className="musicsearchform-nav">
                    <form action="" method="get">
                        <label for="song_name"> Song Name: </label>
                        <input type="text" songName="song_name" onChange={this.handleChange} value={this.state.songName}>
                        <label for-="artist">Artist: </label>
                        <input type="text" artistName="artist_name"><br>
                        <label for-="album_name">Album: </label>
                        <input type="text" albumName="album_name"><br>
                        <button type="submit"></button>
                    </form>
                </div>
            </div>
        </div>
        )
}

export default musicSearchForm;