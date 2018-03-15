import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

import {Header } from 'semantic-ui-react';

class IcedDrinkItem extends Component{

  render(){

  	const {recipes,search} = this.props;

  	const icedDrinkItem = recipes.filter(recipe => {
      return recipe.title.toLowerCase().charAt(0).slice(0).indexOf(search.charAt(0).slice(0).toLowerCase()) >= 0

    }).map((icedDrink, id) => {
      return(
        <div className="col-lg-3">
          <div className="thumbnail" style={{ "height":"500px"}}>
            <div key={icedDrink._id}>
              <strong> <Header>{icedDrink.title}</Header></strong> <br/>
              <img src = {icedDrink.image}  alt = "img" style={{ "height":"300px"}} /><br/>
              <strong>Ingredrients: </strong>{icedDrink.ingredients.substring(0, 80)}...<br/>
              <Link to = {`/icedDrink/show/${icedDrink._id}`}>Read More</Link>
            </div>
          </div>
        </div>
      )

    })

    return (
      <div style={{"border": "10px solid white"}}>

	      <div className="row">

          {icedDrinkItem}

        </div>
      </div>
      
    )
  }
}


 
export default IcedDrinkItem;















