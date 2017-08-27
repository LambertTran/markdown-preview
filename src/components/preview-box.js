/*======================================
                Packages
=======================================*/

import React, {Component} from 'react';
import marked from 'marked';



/*======================================
                Body
=======================================*/

class PreviewBox extends Component{
  
  /** Convert normal text form to marked text */
  renderMarked(text){
    const markedText = marked(text);

    // console.log(text)

    // Need __html for inject inner html
    return {__html: markedText}; 
  }


  render(){
    const text = this.props.text;
    return (
      <div className="preview-box">
        <div dangerouslySetInnerHTML={this.renderMarked(text)}>
        </div>
      </div>
    )
  }
}

export default PreviewBox;