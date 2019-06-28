import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MyRequestList from './MyRequestsList';

class MyRequests extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="MyRequests Dashboard">
                <div className='tabs'>
                    <Link to="/user/Restaurants" className="link">
                        <span>Restaurants</span>
                    </Link>

                    <Link to="/user/myrequests" className="link">
                        <span>My Requests</span>
                    </Link>
                </div>
                
                <div className="myRequestsList">
                    <h2>Track your Orders</h2>
                    <MyRequestList orderNum = {"545146817"} title={"Pizza"} quantity={"2"} status={"In Progress"} total={"1,580"}/>
                    <MyRequestList orderNum = {"545142327"} title={"Desert"} quantity={"5"} status={"Pending"} total={"1,540"}/>
                    <MyRequestList orderNum = {"542323447"} title={"Pizza"} quantity={"2"} status={"In Progress"} total={"2,580"}/>
                    <MyRequestList orderNum = {"54412437"} title={"Desert"} quantity={"1"} status={"Pending"} total={"1,220"}/>
                    <MyRequestList orderNum = {"54244417"} title={"Pizza"} quantity={"6"} status={"In Progress"} total={"4,80"}/>
                    <MyRequestList orderNum = {"5411111817"} title={"Desert"} quantity={"1"} status={"Pending"} total={"3,480"}/>
                    <MyRequestList orderNum = {"5445535617"} title={"Pizza"} quantity={"2"} status={"In Progress"} total={"1,580"}/>
                    
                </div>

            </div>
        )
    }
}

export default MyRequests;