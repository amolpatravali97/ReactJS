import React from 'react'
import SearchBar from './SearchBar'

class App extends React.Component {
    onSearchSubmit(e) {
        console.log(e);
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default App;