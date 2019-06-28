import React, { Component } from "react";
import { Link } from 'react-router-dom';

class DeliveredOrders extends Component {
    constructor() {
        super();
        this.state = {

        }

        this.search = this.search.bind(this);
    }

    search() {

    }

    render() {
        return (
            <div className="DeliveredOrders Dashboard">
                <div className="tabs">
                    <Link className="link" to="/restaurant/PendingOrders">
                        <span onClick={() => { this.setState({ isLogin: true }) }}>Pending</span>
                    </Link>
                    <Link className="link" to="/restaurant/InProgressOrders">
                        <span onClick={() => { this.setState({ isLogin: false }) }}>In Progress</span>
                    </Link>
                    <Link className="link" to="/restaurant/DeliverdOrders">
                        <span onClick={() => { this.setState({ isLogin: false }) }}>Delivered</span>

                    </Link>
                </div>
            </div>
        )
    }
}

export default DeliveredOrders;