import React, { Component } from 'react';
import './App.css'
import musicSearchForm from './MusicSearchForm/MusicSearchForm'

class App extends Component {
    constructor(props){
        super(props);
        this.songs = [
            musicSearchForm({input}.get.songs)
        ];
        this.state: {
            default{
                if (this.state.musicSearchForm(input).null){
                    displayedSongInfo === null,
                }
                    return;
                else( displayedSongInfo = input ),
                    return;
                }
            }
        }

    }
    render() {
        return (
            <div className="container-fluid"> 
                <div className="row">
                    <div className="col-md-4">
                        <action {this.state.get(musicSearchForm).input}
                    </div>
                </div>
            </div>
        )
    }
}
export default App;