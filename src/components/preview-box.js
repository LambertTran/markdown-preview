import React, {Component} from 'react';
import marked from 'marked';

class PreviewBox extends Component{
  
  renderMarked(text){
    const markedText = marked(text);
    console.log(text)
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