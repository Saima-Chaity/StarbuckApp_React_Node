import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import {Header } from 'semantic-ui-react';

class TeaItem extends Component{

  render(){

  	const {recipes, search} = this.props;

  	const teaItem = recipes.filter(recipe => {
      return recipe.title.toLowerCase().charAt(0).slice(0).indexOf(search.charAt(0).slice(0).toLowerCase()) >= 0

    }).map((tea, id) => {
      return(
        <div className="col-lg-3">
          <div className="thumbnail" style={{ "height":"500px"}}>
            <div key={tea._id}>
              <strong> <Header>{tea.title}</Header></strong> <br/>
              <img src = {tea.image}  alt = "img" style={{ "height":"300px"}} /><br/>
              <strong>Ingredrients: </strong>{tea.ingredients.substring(0, 80)}...<br/>
              <Link to = {`/tea/show/${tea._id}`}>Read More</Link>
            </div>
          </div>
        </div>
      )

    })

    return (
      <div style={{"border": "10px solid white"}}>

	      <div className="row">

          {teaItem}

        </div>
      </div>
    
      
    )
  }
}


 
export default TeaItem;















