import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Editor from "./Editor";
import fire from './Fire';
import firebase from "firebase"
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


class Home extends Component {
  state={isSignedIn:false}

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    });
  }

  authenticate() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    fire.auth().signInWithPopup(provider).then(function(result) {
     // This gives you a Google Access Token.
     var token = result.credential.accessToken;
     // The signed-in user info.
     var user = result.user;
    });
  }

  logout(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }


  render() {
    return (
      <div>
      <nav>
          <div className="nav-wrapper blue darken-2">
            <a href="#" className="brand-logo center">Collab_Editor</a>
          </div>
        </nav>
        {this.state.isSignedIn?
          (
            <div>
                <div>
                
                  <Editor></Editor>
                </div>
                <div>
                 <button onClick={this.logout.bind(this)} className="btn waves-effect waves-light blue lighten-1" type="submit" name="action">Sign-out
                <i className="material-icons right">account_circle</i>
              </button>
                
                </div>
            </div>
          )
          :
          (
            
              <div align="center">
              <br /><br /><br /><br /><br /><br />
              <button onClick={this.authenticate.bind(this)} className="btn waves-effect waves-light blue lighten-1" type="submit" name="action">LOG IN
                <i className="material-icons right">account_circle</i>
              </button>
              <br />
              <br></br>
                <Link to="/Editor" type="button">GUEST<br /><i className="material-icons">send</i> </Link>
              </div>
          
          )
        }

        <br /><br /><br /><br /><br /><br />
         <footer className="page-footer blue lighten-1 ">
          <div className="container ">
            <div className="row ">
              <div className="col l6 s12">
                <h5 className="white-text">Collab_Editor</h5>
                <p className="grey-text text-lighten-4 ">Collab_Editor is a online live code editor</p>
              </div>
            
            </div>
          </div>
          <div className="footer-copyright blue darken-3 ">
            <div className="container">
            Collab_Editor
            © 2018 Copyright 
            </div>
          </div>
        </footer>
        
      </div>
    );
  }
}

export default Home;

