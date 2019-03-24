import React, { Component } from 'react';
import {Image, Button} from 'semantic-ui-react'
import axios from 'axios';
import '../../stylesheets/main.css';

class CoffeeDetails extends Component{

  state = {
      details:''
    }

  componentWillMount(){
    this.getCoffee();
  }

  getCoffee = ()=>{
    let id = this.props.match.params.id;
    axios.get(`https://recipeappinreactnode.azurewebsites.net/api/coffee/${id}`)
    .then(response => {
      this.setState({details: response.data})
  })
  .catch(err => console.log(err));
  }

  onDelete(){
    let id = this.state.details._id;
    axios.delete(`https://recipeappinreactnode.azurewebsites.net/api/coffee/${id}`)
      .then(response => {
        this.props.history.push('/coffee');
      }).catch(err => console.log(err));
  }




  render(){
    return (
     <div style={{"border": "10px solid white"}} >
       <br />
      <Button style={{ marginBottom: "10px"}}><a href={"/coffee"}><i className="chevron circle left icon"></i>Back</a></Button>
       
      <div className="detailsPage">
        <Image src={this.state.details.image} alt = "img" style={{ "height":"400px", "width":"500px"}} />
        <div className="recipeDescription"> 
            <h1 >{this.state.details.title}</h1>       
            <div className="collection-item"><strong>Ingredients:</strong> {this.state.details.ingredients}</div>
        </div>        
       
      </div>
       
      <br/>

      <Button.Group>
        <Button positive ><a href={`/coffee/edit/${this.state.details._id}`}> Edit</a></Button>
          <Button.Or />
        <Button  negative onClick={this.onDelete.bind(this)} >Delete</Button>
      </Button.Group>

      </div>
    )
  }
}



export default CoffeeDetails;

