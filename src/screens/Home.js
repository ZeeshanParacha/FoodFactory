import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super()
        
        this.search = this.search.bind(this);
    }


    search() {

    }

    render() {
        return (
            <div className="Home">
             <div class="layer">
   
                <div className="container">
                    <div className="inHomeContainer">
                        <h1>Grab your meal at just one click! </h1>
                        <div className="searchBar">
                            <form onSubmit={this.search}>
                                <input type="text" placeholder="Search your meal..." />
                                <input type="submit" value="find" />
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;