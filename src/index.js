import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//import components
import InputBox from './components/input-box';
import PreviewBox from './components/preview-box';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {text:''};
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(text){
    this.setState({text});
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <InputBox handleChange={this.handleChange} />
          </div>
          <div className="col-md-6">
            <PreviewBox text={this.state.text} />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
