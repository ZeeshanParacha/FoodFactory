import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleMap from './googlemap';
import Thumbnail from './Thumbnail';
import { storage } from '../config/Fire';
import firebase from '../config/Fire';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cover1 from '../assets/images/cover1.jpg';
import Cover2 from '../assets/images/cover2.jpg';
import Cover3 from '../assets/images/cover3.jpg';


class Restaurants extends Component {
    constructor() {
        super();
        this.state = {
            CategoryName: '',
            CategoryDesc: '',
            image: '',
            FoodItem: [],
            FoodResult: [],
            CategoryFoodItem: [],
            CategoryFoodResult: []


        }
        // this.uploadData = this.uploadData.bind(this);
        this.ShowCategory = this.ShowCategory.bind(this);

    }
    //Upload Food Data on Firebase via Form which has been disabled temporary

    // uploadData() {
    //     const { CategoryName, CategoryDesc, image } = this.state
    //     console.log(CategoryDesc, CategoryName, image)
    //     var foodCategory = {
    //         CategoryName,
    //         CategoryDesc
    //     }

    //     let storageref = firebase.storage().ref().child(`foodImages/${CategoryName}`)
    //     storageref.put(image)
    //         .then((url) => {
    //             url.ref.getDownloadURL()

    //                 .then((urlref) => {
    //                     foodCategory.image = urlref;

    //                     firebase.database().ref("Pizza")
    //                         .push(foodCategory)
    //                         .then(() => {
    //                             console.log("Food Items has been uploaded")
    //                         })
    //                     firebase.database().ref("AllFood")
    //                         .push(foodCategory)
    //                         .then(() => {
    //                             console.log("All Food Items has been uploaded")
    //                         })
    //                 })
    //         })
    // }

    //Fetching All Food Categories from Firebase

    fetchFoodItems() {
        const { FoodItem, FoodResult, Categorydesc, Images } = this.state;
        firebase.database().ref("AllFood")
            .once("value", (data) => {
                let foodItems = data.val()
                FoodItem.push(foodItems)

                for (var key in FoodItem) {
                    console.log(FoodItem[key])
                    for (var key2 in FoodItem[key]) {
                        console.log(FoodItem[key][key2].CategoryName)
                        FoodResult.push(FoodItem[key][key2])

                    }
                }
                this.setState({ FoodResult })


            })

    }

    ShowCategory(e) {
        const { CategoryFoodItem, FoodResult, CategoryFoodResult } = this.state;
        this.setState({ CategoryFoodItem: [], CategoryFoodResult: [], FoodResult: [] })
        //    this.setState({FoodResult:[] , CategoryFoodResult : []})

        console.log("ShowCategory")
        console.log(e)
        const CategoryName = e;
        firebase.database().ref(CategoryName)
            .once("value", (data) => {
                let foodItems = data.val()
                CategoryFoodItem.push(foodItems)

                for (var key in CategoryFoodItem) {
                    console.log(CategoryFoodItem[key])
                    for (var key2 in CategoryFoodItem[key]) {
                        console.log(CategoryFoodItem[key][key2].CategoryName)
                        CategoryFoodResult.push(CategoryFoodItem[key][key2])

                    }
                }
                this.setState({ FoodResult: CategoryFoodResult })




            })

    }

    componentDidMount() {
        this.fetchFoodItems()
        console.log('COMPIENNNNNNNNNNNNN')
    }

    render() {
        const { FoodResult } = this.state;
        console.log(FoodResult)
        console.log('RENDERRRRRRRRRRRRR')
        return (

            <div>
                <section id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">

                        <div className="carousel-item active" style={{ backgroundImage: `url(${Cover1})` }}>
                            <div className="carousel-caption d-none d-md-block">
                                {/* <h3 className="display-4">Welcome to FoodFactory!</h3> */}
                                {/* <p className="lead">We served the best!</p> */}
                            </div>
                        </div>

                        <div className="carousel-item" style={{ backgroundImage: `url(${Cover2})` }}>
                            <div className="carousel-caption d-none d-md-block">
                                {/* <h3 className="display-4">Second Slide</h3>
                                    <p className="lead">This is a description for the second slide.</p> */}
                            </div>
                        </div>

                        <div className="carousel-item" style={{ backgroundImage: `url(${Cover3})` }}>
                            <div className="carousel-caption d-none d-md-block">
                                {/* <h3 className="display-4">Third Slide</h3>
                                    <p className="lead">This is a description for the third slide.</p> */}
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </section>
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
                    <form onSubmit={this.search}>
                        <input type="text" placeholder="Search your meal here..." />
                        <input type="submit" value="Search" />
                    </form>
                </div>

                </div>
                {/* <input onChange={(e) => { this.setState({ CategoryName: e.target.value }) }} type="text" placeholder="Name" /><br />
            <input onChange={(e) => { this.setState({ CategoryDesc: e.target.value }) }} type="text" placeholder="Description" /><br />
            <input onChange={(e) => { this.setState({ image: e.target.files[0] }) }} type="file" placeholder="Description" /><br />
            
            <input onClick={this.uploadData} type="submit" value="upload" /><br /> */}


                


                <div className="chips">
                    <span onClick={() => this.ShowCategory('BBQ')} value='BBQ'>BBQ</span>
                    <span onClick={() => this.ShowCategory('Chineese')} value='Chineese'>Chineese</span>
                    <span onClick={() => this.ShowCategory('FastFood')} value='FastFood'>Fast Food</span>
                    <span onClick={() => this.ShowCategory('Desi')} value='Desi'>Desi</span>
                    <span onClick={() => this.ShowCategory('Buffet')} value='Buffet'>Buffet</span>
                    <span onClick={() => this.ShowCategory('Pizza')} value='Pizza'>Pizzeria</span>
                    <span onClick={() => this.ShowCategory('Deserts')} value='Deserts'>Deserts</span>
                    <span onClick={() => this.ShowCategory('Cafe')} value='Cafe'>Cafe</span>
                    <span onClick={() => this.ShowCategory('AllFood')} value='Cafe'>Show All</span>

                </div>
               <br />
               <br />
               <br />
               

                <GoogleMap />


                <div className="thumbnailList">
                    {FoodResult.map((item, index) => {
                        return <Thumbnail key={index} img={item.image} title={item.CategoryName} description={item.CategoryDesc} />
                    })}


                </div>
           

<section id="footer">
<div className="container">
    <div className="row text-center text-xs-center text-sm-left text-md-left">
        
        
        
    </div>
    <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></a></li>
            </ul>
        </div>
        <hr />
    </div>
    <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p><u><a href="https://www.nationaltransaction.com/">Food Factory</a></u> has established itself as more than just a dining destination. Inviting ambiance extends from the antipasti and wood-fired pizzas to the walls </p>
            <p className="h6">&copy All right Reversed.<a className="text-green ml-2" href="#" target="_blank">FoodFactory</a></p>
        </div>
        <hr />
    </div>	
</div>
</section>
</div>

        )
    }
}

export default Restaurants;