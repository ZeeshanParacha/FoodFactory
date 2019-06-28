import React , { Component } from 'react';
import { Link } from 'react-router-dom';

import Thumbnail from './Thumbnail';

import img1 from '../assets/images/img-1.jpg';
import img2 from '../assets/images/img-2.jpg';



class Restaurants extends Component {
    constructor(){
        super();
        this.state = {

        }
    }



    search(){

    }

    render(){
        return (
            <div className="Restaurants Dashboard">
            <div className="tabs">
            <Link className="link" to="/user/restaurants">
                <span>Restaurants List </span>
            </Link>

            <Link className="link" to="/user/myrequests">
                <span>My Requests </span>
                
            </Link>
            </div>

            <div className="searchbar">
                <form onSubmit = {this.search}>
                    <input type="text" placeholder="Search your meal here..." />
                    <input type="submit" value="Search"/>
                </form>
            </div>

            <div className="chips">
                <span>BBQ </span>
                <span>Chineese </span>
                <span>Fast Food</span>
                <span>Desi</span>
                <span>Buffet </span>
                <span>Pizzeria</span>
                <span>Deserts</span>
                <span>Cafe</span>
                
            </div>

         
            
            <div className="thumbnailList">
                <Thumbnail  img={img1} title="Del Frio" description="This is the description of the above mentioned restaurant so user will know bettter about the servings..."/>
                <Thumbnail  img={img2} title="Broad way" description="This is the description of the above mentioned restaurant so user will know bettter about the servings..."/>
                <Thumbnail  img={img1} title="Del Frio" description="This is the description of the above mentioned restaurant so user will know bettter about the servings..."/>
                <Thumbnail  img={img2} title="Broad way" description="This is the description of the above mentioned restaurant so user will know bettter about the servings..."/>
                <Thumbnail  img={img1} title="Del Frio" description="This is the description of the above mentioned restaurant so user will know bettter about the servings..."/>
                <Thumbnail  img={img2} title="Broad way" description="This is the description of the above mentioned restaurant so user will know bettter about the servings..."/>
                <Thumbnail  img={img1} title="Del Frio" description="This is the description of the above mentioned restaurant so user will know bettter about the servings..."/>
                <Thumbnail  img={img2} title="Broad way" description="This is the description of the above mentioned restaurant so user will know bettter about the servings..."/>
                
            </div>
            </div>

        )
    }
}

export default Restaurants;