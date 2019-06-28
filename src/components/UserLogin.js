import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db } from "../config/Fire";
import firestore from "firebase/firestore";
import * as firebase from "firebase";

class userLogin extends Component {
    constructor() {
        super()
        this.state = {
            isLogin: true,
            email: '',
            password: '',
            isCredential: true,
        }
        this.userLogin = this.userLogin.bind(this);
    }

    userLogin() {
        const uid = firebase.auth().currentUser.uid;
        console.log(uid)
        
        db.collection('users').doc(uid).get().then((snapshot) => {
    
         
              let items = snapshot.data();
    
              /* Make data suitable for rendering */
              items = JSON.stringify(items);
    
              /* Update the components state with query result */
              console.log(items)

              this.setState({email : items.email , password : items.password})
          });
    
        

        const { email, password } = this.state;

        // if (email !== 'admin' && password !== 'admin') {
        //     this.setState({ isCredential: false });
        // }
        // else {
        //     this.setState({ isCredential: true });
        //     this.props.history.push('/user/Restaurants');
        // }
        const history = this.props.history;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            console.log("Login Succussfully");
            history.push('/user/Restaurants');
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            alert("Email or Password not matched!"
            )
            // ...
          });
    }


    render() {
        const { isCredential } = this.state;
        return (
            <div className="UserLogin login">
            <div className="Aligner">
                <div className="tabs">
                    <Link className="link" to="/userLogin">
                        <span onClick={() => { this.setState({ isLogin: true }) }}>Log in </span>
                    </Link>
                    <Link className="link" to="/userSignup">
                        <span onClick={() => { this.setState({ isLogin: false }) }}>Register </span>
                    </Link>
                </div>

                <h2> Log in - User </h2>
                {!isCredential && <div className="formError">Email or Password is incorrent ! </div>}
                <input onChange={(e) => { this.setState({ email: e.target.value }) }} type="email" placeholder="Email" /><br />
                <input onChange={(e) => { this.setState({ password: e.target.value }) }} type="password" placeholder="Password" /><br />
                <input onClick={this.userLogin} type="submit" value="Log in" /><br />
</div>
            </div>
        )
    }
}

export default userLogin;