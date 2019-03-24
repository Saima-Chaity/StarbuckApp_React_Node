import React, { Component } from 'react';
import axios from 'axios';
import BakeryItem from '../Item/BakeryItem';
import Navbar from '../nav/Navbar';

class BakeryPage extends Component{

state = {

      recipes: [],
      search: ''
      
}

componentDidMount(){
    this.getrecipes();
  }

   getrecipes(){
    axios.get('https://recipeappinreactnode.azurewebsites.net/api/bakery')
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

        <BakeryItem 
          recipes = {this.state.recipes}
          search={this.state.search}/>

      </div>
        
      )
  }

}

export default BakeryPage;

