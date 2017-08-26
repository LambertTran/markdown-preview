import React, {Component} from 'react';
import {Editor, EditorState} from 'draft-js';
import { convertToRaw } from 'draft-js';

class InputBox extends Component{
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange=this.onChange.bind(this);
  }
  
  combineInput(data){
    var str=''; 
    const rawData = convertToRaw(this.state.editorState.getCurrentContent());  
    rawData.blocks.map(data => 
      str += data.text + ' \n'  
    )
    // console.log(str);
    this.props.handleChange(str);
  }

  onChange(editorState){
    this.setState({editorState},() =>this.combineInput());
  }

  render() {
    return (
      <div className="input-box">
        <Editor 
          editorState={this.state.editorState} 
          onChange={this.onChange} /> 
      </div>
    );
  }
}

export default InputBox;