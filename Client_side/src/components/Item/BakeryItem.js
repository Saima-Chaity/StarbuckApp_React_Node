import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Card, Image, Icon } from 'semantic-ui-react';

class BakeryItem extends Component{

  render(){

  	const {recipes,search} = this.props;

  	const bakeryItem = recipes.filter(recipe => {
      return recipe.title.toLowerCase().charAt(0).slice(0).indexOf(search.charAt(0).slice(0).toLowerCase()) >= 0
    }).map((bakery, id) => {
      return(
        <div className="col-lg-3">
          <div key={id}>
            <Card className="recipeItems">
              <Image src={bakery.image} alt = "Bakery Image" />
              <Card.Content>
                <Card.Header>{bakery.title}</Card.Header>
                <Card.Description>
                  <strong>Ingredrients: </strong>{bakery.ingredients.substring(0, 80)}...<br/>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='right arrow'/>
                  <Link to = {`/bakery/show/${bakery._id}`}>Read More</Link>
                </a>
              </Card.Content>
            </Card>
          </div>
        </div>
      )

    })

    return (

      <div className="row">

        {bakeryItem}

      </div>      
    )
  }
}


 
export default BakeryItem;















