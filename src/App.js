import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

const ButtonA = () => (
  <Button variant="contained" color="primary">
  </Button>
);

class App extends React.Component{
  render(){
    return (
      <div className="buttonWrapper" >     
        <Button className='sendButton' variant="contained" color="primary" onClick={() => this.props.nextQuestion()}>
              {this.props.text}
        </Button>
      </div>
    );
  }
}



export default App;
