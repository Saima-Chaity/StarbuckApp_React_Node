import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Card, Image, Icon } from 'semantic-ui-react';

class CoffeeItem extends Component{

  render(){

  	const {recipes,search} = this.props;

    const coffeeItem = recipes.filter(recipe => {
      return recipe.title.toLowerCase().charAt(0).slice(0).indexOf(search.charAt(0).slice(0).toLowerCase()) >= 0

    })
    .map((coffee, id) => {
      return(
        
        <div className="col-lg-3">
            <div key={id}>
              <Card className="recipeItems">
                <Image src={coffee.image} alt = "Coffee Image" />
                <Card.Content>
                  <Card.Header>{coffee.title}</Card.Header>
                  <Card.Description>
                    <strong>Ingredrients: </strong>{coffee.ingredients.substring(0, 80)}...<br/>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Icon name='right arrow'/>
                    <Link to = {`/coffee/show/${coffee._id}`}>Read More</Link>
                </Card.Content>
              </Card>
            </div>
        </div>
      )

    }) 

    return (

        <div className="row">

            {coffeeItem}

         </div>
      
    )
  }
}

    

 
export default CoffeeItem;















