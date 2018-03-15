import React, {Component} from "react";
import { Input, Menu, Form, Search} from "semantic-ui-react";

class CoffeeSearch extends Component {

  filterUpdate(){
    const val = this.refs.filterInput.value
    this.props.filterUpdate(val)
  }

  render() {
    const { search, filterUpdate} = this.props
    return (
      <div>
        <Menu secondary >
          <Menu.Menu position='right'>
            <Menu.Item className="navRight">
              <Form submit = {this.onSubmit}>
               <input
                  placeholder='Search...'
                  type='text'
                  ref='filterInput'
                  // binding the input value to state
                  value={search}
                  // onChange ={e => this.setState({ searchBook: e.target.value })}
                  onChange={() => {
                   filterUpdate(this.refs.filterInput.value) 
                  }}
                /> 
            
              </Form>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
      
    )
  }
}



export default CoffeeSearch;

