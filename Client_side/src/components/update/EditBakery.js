import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Icon} from "semantic-ui-react";

class EditBakery extends Component{
 state = {
      id:"",
      title:"",
      image:"",

      ingredients:"" 
    }

  componentWillMount(){
    this.getBakeryDetails();
  }

  getBakeryDetails(){
    let id = this.props.match.params.id;
    axios.get(`https://recipeappinreactnode.azurewebsites.net/api/bakery/${id}`)
    .then(response => {
      this.setState({
        id: response.data._id,
        title: response.data.title,
        image: response.data.image,
        ingredients: response.data.ingredients
      });
    })
    .catch(err => console.log(err));
    }

editBakery(addedBakery){
  let id = this.state.id;
   axios.request({
      method:'put',
      url:`https://recipeappinreactnode.azurewebsites.net/api/bakery/${id}`,
      data: addedBakery,
      headers: {"Content-Type": "application/json"}
    }).then(response => {
      this.props.history.push('/bakery')
      
    }).catch(err => console.log(err));
  
}


  onSubmit(e){
    const addedBakery = {
      title: this.refs.title.value,
      image: this.refs.image.value,

      ingredients: this.refs.ingredients.value
    }
    this.editBakery(addedBakery);
    e.preventDefault();
  }

  handleInputChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
    
  render(){
    return (
     <div>
        <br />
        <Button style={{ marginBottom: "10px"}}><a href={"/bakery"}><i className="chevron circle left icon"></i>Back</a></Button>
       <h1 className="formHeader">Edit Bakery</h1>
       <Form onSubmit={this.onSubmit.bind(this)}
        style={{ "width": "30%" , "margin": "auto", "border": "5px solid white"}}>

        <Form.Field>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" ref="title" value={this.state.title} onChange={this.handleInputChange.bind(this)}/>  
            </div>
          </Form.Field>

          <Form.Field>
            <div className="input-field">
              <label htmlFor="image">Image</label>
              <input type="text" name="image" ref="image" value={this.state.image} onChange={this.handleInputChange.bind(this)}/>
            </div>
          </Form.Field>


          <Form.Field>
            <div className="input-field">
              <label htmlFor="ingredients">Ingredients</label>
              <input type="text" name="ingredients" ref="ingredients" value={this.state.ingredients} onChange={this.handleInputChange.bind(this)} />
            </div>
            </Form.Field>
         
          <Button animated>
              <Button.Content visible>Next</Button.Content>
              <Button.Content hidden>
                <Icon name='right arrow' />
              </Button.Content>
          </Button>
        </Form>
      </div>
    )
  }
}


export default EditBakery;







