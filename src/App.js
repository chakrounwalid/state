import './App.css';
import React, { Component } from 'react';
import img from './123.jpg';
import Count from './components/Count';

class App extends Component {
  state = {
    person :{
      fullName:"Walid Chakroun",
      bio:"“I believe in Farming…  I believe in Coding…  I believe I can do it.”",
      profession: "Farmer",
      imgsrc :{img}
    },
    show :true
  };
  handleClick  = () => {
		this.setState({show : !this.state.show});
  };

  render(){
    return (
      <div className="App">
        <button onClick={this.handleClick } style={{width:'120px',height:'40px',background:'#4CAF50', color:'white',borderRadius:'15px'}}>Show Data</button>
        <Count/>
        {this.state.show ?(
        <div className='block'>
          <div className="container">
        <img src={img} className="image" alt="profil img"/>
            <div className="middle">
              <div className="text">Walid Chakroun</div>
            </div>
          </div>
        <h1><i>{this.state.person.fullName}</i></h1>
        <h2><i>{this.state.person.profession}</i></h2>
        <p><i>{this.state.person.bio}</i></p>
        </div>
        ):('profile not found')
        };
      </div>

    );

  };
  

}

export default App;
