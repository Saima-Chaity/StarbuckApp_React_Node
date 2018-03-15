import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import {Header } from 'semantic-ui-react';

class CoffeeItem extends Component{

  render(){

  	const {recipes,search} = this.props;

    const coffeeItem = recipes.filter(recipe => {
      return recipe.title.toLowerCase().charAt(0).slice(0).indexOf(search.charAt(0).slice(0).toLowerCase()) >= 0

    })
    .map((coffee, id) => {
      return(
        
        <div className="col-lg-3">
          <div className="thumbnail" style={{ "height":"500px"}}>
            <div key={coffee._id}>
              <strong> <Header>{coffee.title}</Header></strong> <br/>
              <img src = {coffee.image}  alt = "img" style={{ "height":"300px"}} /><br/>
              <strong>Ingredrients: </strong>{coffee.ingredients.substring(0, 80)}....<br/>
              <Link to = {`/coffee/show/${coffee._id}`}>Read More</Link>
            </div>
          </div>
        </div>
       
        
      )

    }) 

    return (
      <div style={{"border": "10px solid white"}}>
     
        <div className="row">

            {coffeeItem}

         </div>


          
      </div>
      
    )
  }
}

    

 
export default CoffeeItem;















