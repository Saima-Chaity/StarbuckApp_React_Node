import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Form, Button, Icon } from 'semantic-ui-react'

class NewIcedDrinkForm extends Component{
  
  addRecipe(newRecipe){
    axios.request({
      method:'post',
      url:'https://recipeappinreactnode.azurewebsites.net/api/icedDrink',
      data: newRecipe
    }).then(response => {
      this.props.history.push('/icedDrink');
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    const newRecipe = {
      title: this.refs.title.value,
      image: this.refs.image.value,

      ingredients: this.refs.ingredients.value
    }
    this.addRecipe(newRecipe);
    e.preventDefault();
  }

  render(){
    
    return (
     <div>
        <br />
        <Button style={{ marginBottom: "10px"}}><a href={"/icedDrink"}><i className="chevron circle left icon"></i>Back</a></Button>
        <h1 className="formHeader">Add New Recipe</h1>
        <Form className="formBody" onSubmit={this.onSubmit.bind(this)}>
          <Form.Field>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" ref="title" />  
            </div>
          </Form.Field>

          <Form.Field>
            <div className="input-field">
              <label htmlFor="image">Image</label>
              <input type="text" name="image" ref="image" />
            </div>
          </Form.Field>


          <Form.Field>
            <div className="input-field">
              <label htmlFor="ingredients">Ingredients</label>
              <input type="text" name="ingredients" ref="ingredients" />
            </div>
          </Form.Field>

          <Button animated>
            <Button.Content visible className="buttonText">Submit</Button.Content>
            <Button.Content hidden>
              <Icon className="buttonText" name='right arrow' />
            </Button.Content>
          </Button>
        </Form>
      </div>
    )
  }
}

export default NewIcedDrinkForm;

