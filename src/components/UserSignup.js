import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { db } from "../config/Fire";
import firestore from "firebase/firestore";
import * as firebase from "firebase";
import { Route,  BrowserRouter as Router, Switch } from "react-router-dom";

class UserSignup extends Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            email: '',
            gender: '',
            age: '',
            country: '',
            city: '',
            password: '',
            confirmPassword: '',

            isfullName: true,
            isEmail: true,
            isGender: true,
            isCountry: true,
            isCity: true,
            isPassword: true,
            isConfirmPassword: true,
            isAge : true
        }
        this.userSignup = this.userSignup.bind(this);
    }
    userSignup() {
        const { fullName, email, gender, age, country, city, password, confirmPassword } = this.state;

        //full name validation
        if (fullName.length === 0) {
            this.setState({ isfullName: false })
        }
        else {
            this.setState({ isfullName: true })
        }
        // email validation
        const emailREGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailResult = emailREGEX.test(email);

        if (emailResult === false) {
            this.setState({ isEmail: false });
        }
        else {
            this.setState({ isEmail: true });
        }

        //gender validation

        if (gender === '') {
            this.setState({ isGender: false })
        }
        else {
            this.setState({ isGender: true });
        }

        //age validation
        if (age < 18) {
            this.setState({ isAge: false });
        }
        else {
            this.setState({ isAge: true });
        }

        //country validation 

        if (country === '') {
            this.setState({ isCountry: false });
        }
        else {
            this.setState({ isCountry: true });
        }

        //city validation

        if (city === '') {
            this.setState({ isCity: false });
        }
        else {
            this.setState({ isCity: true });
        }

        //password validation

        const passwordREGEX = new RegExp("^(?=.*[0-9])(?=.{6,})");
        const passwordResult = passwordREGEX.test(password);

        if (passwordResult === false) {
            this.setState({ isPassword: false });
        }
        else {
            this.setState({ isPassword: true });
        }
        //confirm password validation
        if (password !== confirmPassword) {
            this.setState({ isConfirmPassword: false });
        } else {
            this.setState({ isConfirmPassword: true });
        }
        const history = this.props.history;
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          db.collection("users").doc(res.user.uid)
            .set({
              fullName,
              email,
              password,
              confirmPassword,
              gender,
              age,
              city,
              country
            })
            .then(function() {
              console.log("Document successfully written!");
              history.push("/userLogin");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
        });


    }
    render() {
        const {isfullName , isEmail , isAge , isGender , isCountry , isCity, isPassword , isConfirmPassword} = this.state;
        return (
            <div className="UserSignup login">
                <div className="tabs">
                    <Link className="link" to="/userLogin">
                        <span onClick={() => { this.setState({ isLogin: true }) }} > Log in</span>
                    </Link>
                    <Link className="link" to="/userSignup">
                        <span onClick={() => { this.setState({ isLogin: false }) }} >Register</span>
                    </Link>
                </div>

                <h2>Sign up - User </h2>
                <input onChange={(e) => { this.setState({ fullName: e.target.value }) }} type="text" placeholder="Enter Full Name" /> <br />
                {!isfullName && <div className="formError">Enter your Full name</div>}
                <input onChange={(e) => { this.setState({ email: e.target.value }) }} type="text" placeholder="Enter Full Name" /> <br />
                {!isfullName && <div className="formError">Enter your Full name</div>}
                <label>
                    <input onClick={(e) => { this.setState({ gender: 'male' }) }} type="radio" name="gender" />
                    Male
                    </label>
                <label>
                    <input onClick={(e) => { this.setState({ gender: 'female' }) }} type="radio" name="gender" />
                    Female
                </label>
                {!isGender && <div className="formError">Please select one</div>}
                <input onChange={(e) => { this.setState({ age: e.target.value }) }} type="number" placeholder="Age" /> <br />
                {!isAge && <div className="formError">Age Should be not lesser than 18</div>}
                <select onChange={(e) => { this.setState({country: e.target.value})  }} >
                    <option value="">Country </option>
                    <option value="Pakistan">Pakistan</option>
                </select>
                {!isCountry && <div className="formError">Select your country</div>}

                <select onChange={(e) => { this.setState({city: e.target.value})  }} >
                    <option value="">City</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Quetta">Quetta</option>
                </select>
                {!isCity && <div className="formError">Select your City </div>}
                <input onChange={(e) => { this.setState({ password: e.target.value }) }} type="password" placeholder="Password" /><br />
                {!isPassword && <div className="formError">Password should contain minimum 6 characters and at least a number</div>}
                <input onChange={(e) => { this.setState({ confirmPassword: e.target.value }) }} type="password" placeholder="Confirm Password" /><br />
                {!isConfirmPassword && <div className="formError">Password doesn't match</div>}
                <input onClick={this.userSignup} type="submit" value="Register" /><br />
            </div>
        )
    }
}

export default UserSignup;