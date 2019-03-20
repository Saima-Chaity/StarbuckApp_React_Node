import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Form } from 'semantic-ui-react'

class NewCoffeeForm extends Component{

  addRecipe(newRecipe){
    axios.request({
      method:'post',
      url:'http://localhost:3000/api/coffee',
      data: newRecipe
    }).then(response => {
      this.props.history.push('/coffee');
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
       <Link className="btn grey" to="/">Back</Link>
       <h1>Add New Recipe</h1>
       <Form onSubmit={this.onSubmit.bind(this)}
          style={{ "width": "50%" , "margin": "auto", "border": "5px solid white"}}>

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

          <input type="submit" value="Submit" className="btn" />
        </Form>
      </div>
    )
  }
}

export default NewCoffeeForm;

