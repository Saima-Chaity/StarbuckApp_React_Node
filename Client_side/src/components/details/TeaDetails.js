import React, { Component } from 'react';
import axios from 'axios';
import {Image, Button} from 'semantic-ui-react'


class TeaDetails extends Component{

  state = {
      details:''
    }
  

  componentWillMount(){
    this.getTea();
  }


  getTea(){
    let id = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/tea/${id}`)
    .then(response => {
      this.setState({details: response.data})
  })
  .catch(err => console.log(err));
  }

  onDelete(){
    let id = this.state.details._id;
    axios.delete(`http://localhost:3000/api/tea/${id}`)
      .then(response => {
        this.props.history.push('/tea');
      }).catch(err => console.log(err));
  }

  render(){
    return (
     <div style={{"border": "10px solid white"}} >
       <br />
        <Button style={{ marginBottom: "10px"}}><a href={"/tea"}><i className="chevron circle left icon"></i>Back</a></Button>

        <div className="detailsPage">
          <Image src={this.state.details.image} alt = "img" style={{ "height":"400px", "width":"500px"}} />
            <div className="recipeDescription">        
              <h1 >{this.state.details.title}</h1>
              <div className="collection-item"><strong>Ingredients:</strong> {this.state.details.ingredients}</div>
            </div>                
        </div>

        <br/>

        <Button.Group>
          <Button positive ><a href={`/tea/edit/${this.state.details._id}`}> Edit</a></Button>
            <Button.Or />
          <Button  negative onClick={this.onDelete.bind(this)} >Delete</Button>
        </Button.Group>
      </div>
    )
  }
}



export default TeaDetails;

