import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import {Header } from 'semantic-ui-react';

class BakeryItem extends Component{

  render(){

  	const {recipes,search} = this.props;

  	const bakeryItem = recipes.filter(recipe => {
      return recipe.title.toLowerCase().charAt(0).slice(0).indexOf(search.charAt(0).slice(0).toLowerCase()) >= 0
    }).map((bakery, id) => {
      return(
        <div className="col-lg-3">
          <div className="thumbnail" style={{ "height":"500px"}}>
            <div key={bakery._id}>
              <strong> <Header>{bakery.title}</Header></strong> <br/>
              <img src = {bakery.image}  alt = "img" style={{ "height":"300px"}} /><br/>
              <strong>Ingredrients: </strong>{bakery.ingredients.substring(0, 80)}...<br/>
              <Link to = {`/bakery/show/${bakery._id}`}>Read More</Link>
            </div>
          </div>
        </div>
      )

    })

    return (
      <div style={{"border": "10px solid white"}}>

	      <div className="row">

          {bakeryItem}

        </div>
      </div>
      
    )
  }
}


 
export default BakeryItem;















