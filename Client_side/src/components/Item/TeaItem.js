import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Card, Image, Icon } from 'semantic-ui-react';
import '../../stylesheets/main.css';

class TeaItem extends Component{

  render(){

  	const {recipes, search} = this.props;

  	const teaItem = recipes.filter(recipe => {
      return recipe.title.toLowerCase().charAt(0).slice(0).indexOf(search.charAt(0).slice(0).toLowerCase()) >= 0

    }).map((tea, id) => {
      return(
        <div className="col-lg-3">
          <div key={id}>
          <Card className="recipeItems">
            <Image src={tea.image} alt = "Tea Image" />
            <Card.Content>
              <Card.Header>{tea.title}</Card.Header>
              <Card.Description>
                <strong>Ingredrients: </strong>{tea.ingredients.substring(0, 80)}...<br/>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='right arrow'/>
                <Link to = {`/tea/show/${tea._id}`}>Read More</Link>
              </a>
            </Card.Content>
          </Card>
          </div>
        </div>
      )
    })

    return (
      
      <div className="row">

        {teaItem}

      </div>
    )
  }
}


 
export default TeaItem;















