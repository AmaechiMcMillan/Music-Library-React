import React, { Component } from 'react';
import './App.css';
import MusicSearchForm from './MusicSearchForm/MusicSearchForm';

class App extends Component {
    state = {
        songName: '',
        artistName: '',
        albumName: ''
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Song Name: ${this.state.songName} Artist: ${this.state.artistName} Album Name: ${this.state.albumName}`)
    };
    componentDidMount(){
        axios.get('http://'127.0.0.1:8000/music/')
        .then(response => this.setState({
            songs: response.data
        }));
    };
    render() {
        return (
            <div className="container-fluid"> 
                <div className="row">
                    <div className="col-md-4">
                    <MusicSearchForm />
                        <div className="col-md-4">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
export default App;