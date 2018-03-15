import React, { Component } from 'react';
import axios from 'axios';
import IcedDrinkItem from '../Item/IcedDrinkItem';
import Navbar from '../nav/Navbar';

class IcedDrinkPage extends Component{

state = {

      recipes: [],
      search: ''
      
}

  componentWillMount(){
    this.getrecipes();
  }

   getrecipes(){
    axios.get('http://localhost:3000/api/icedDrink')
      .then(response => {

        this.setState({recipes: response.data})
    })
    .catch(err => console.log(err));
        
  }

  filterUpdate(value) {
    this.setState({
      search: value
    });
  }


  render(){

  

    return(
      <div>
       
        <Navbar
         search={this.state.search}
         filterUpdate = {this.filterUpdate.bind(this)}

       />

        <IcedDrinkItem 
          recipes = {this.state.recipes}
          search={this.state.search}/>
   
      </div>
        
      )
  }

}

export default IcedDrinkPage;

