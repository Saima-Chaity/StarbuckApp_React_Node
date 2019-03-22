import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Card, Image, Icon } from 'semantic-ui-react';

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
            <Card>
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















