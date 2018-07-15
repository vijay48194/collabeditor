import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/github';
import fire from './Fire';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

class Editor extends Component {

constructor(props){
		super(props);
		this.state={
			code:""
		};

	}
componentDidMount(){
		fire.database().ref("/doc").on("value",(snapshot)=>{
			let val=snapshot.val();
			this.setState({
				code:val
			})
		})
	}


handleChange(data){
		fire.database().ref("/doc").set(data);
	}
  render() {
    return (
      <div>
      	
      <nav>
          <div className="nav-wrapper blue darken-2">
            <a href="#" className="brand-logo center">Collab_Editor</a>
          </div>
        </nav>
     	  <AceEditor
		    mode="javascript"
		    theme="github"
		    value={this.state.code}
		    onChange={(data)=>{this.handleChange(data)}}
		    name="UNIQUE_ID_OF_DIV"
		    editorProps={{$blockScrolling: true}}
		  />
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

export default Editor;
