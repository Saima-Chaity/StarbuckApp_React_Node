import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Card, Image, Icon } from 'semantic-ui-react';
import '../../stylesheets/main.css';

class IcedDrinkItem extends Component{

  render(){

  	const {recipes,search} = this.props;

  	const icedDrinkItem = recipes.filter(recipe => {
      return recipe.title.toLowerCase().charAt(0).slice(0).indexOf(search.charAt(0).slice(0).toLowerCase()) >= 0

    }).map((icedDrink, id) => {
      return(
        <div className="col-lg-3">
          <div key={id}>
            <Card className="recipeItems">
              <Image src={icedDrink.image} alt = "IcedDrink Image" />
              <Card.Content>
                <Card.Header>{icedDrink.title}</Card.Header>
                <Card.Description>
                  <strong>Ingredrients: </strong>{icedDrink.ingredients.substring(0, 80)}...<br/>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='right arrow'/>
                  <Link to = {`/icedDrink/show/${icedDrink._id}`}>Read More</Link>
                </a>
              </Card.Content>
            </Card>
          </div>
        </div>
      )

    })

    return (

      <div className="row">

        {icedDrinkItem}

      </div>
      
    )
  }
}


 
export default IcedDrinkItem;















