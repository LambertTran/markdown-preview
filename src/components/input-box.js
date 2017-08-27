/*======================================
                Packages
=======================================*/

import React, {Component} from 'react';
import {Editor, EditorState,ContentState} from 'draft-js';
import { convertToRaw } from 'draft-js';



/*======================================
                Body
=======================================*/

class InputBox extends Component{
  constructor(props) {
    super(props);
    // this.state = {editorState: EditorState.createEmpty()};
    const sampleText= "# Enter Some Text To See The Result"
    this.state = {editorState: EditorState.createWithContent(
                                  ContentState.createFromText(sampleText))
                };
    this.onChange=this.onChange.bind(this);
  }
  
  /** Combine all inputs into string */
  combineInput(data){
    var str=''; 
    const rawData = convertToRaw(this.state.editorState.getCurrentContent());  
    
    // For every set of data, add to the str
    // Add a new line for a different set of data 
    rawData.blocks.map(data => 
      str += data.text + ' \n'  
    )

    // console.log(str);
    
    // Send back data to parent component
    this.props.handleChange(str);
  }


  /** Handle change of input */
  onChange(editorState){
    this.setState({editorState},() =>this.combineInput());
  }

  handleClick(event){
    event.preventDefault();
    this.edt.focus();
  }

  render() {
    return (
      <div 
        className="input-box" 
        onClick={(event) => this.handleClick(event)}>
          <Editor ref={v=>this.edt=v}
            editorState={this.state.editorState} 
            onChange={this.onChange} /> 
      </div>
    );
  }
}

export default InputBox;