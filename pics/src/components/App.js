import React from 'react'
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {
    state = { images: [] };
    that = this;

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 36c58bf0e1c8303fa773c53ad577e5a424e4517e292fc7c394afc3ad76643cd7'
            }
        });
        
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found {this.state.images.length} images
            </div>
        );
    }
}

export default App;