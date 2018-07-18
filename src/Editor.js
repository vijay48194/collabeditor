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
     	  <AceEditor
		    mode="javascript"
		    theme="github"
		    value={this.state.code}
		    onChange={(data)=>{this.handleChange(data)}}
		    name="UNIQUE_ID_OF_DIV"
		    editorProps={{$blockScrolling: true}}
		  />
      </div>
    );
  }
}

export default Editor;
