import React, { Component } from 'react'
import { Menu, Dropdown} from 'semantic-ui-react'

class  HomePageNav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  filterUpdate(){
    const val = this.refs.filterInput.value
    this.props.filterUpdate(val)
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <div style={{border: "20px solid green"}}></div>
        <Menu secondary>
          <Menu.Item href='/' target='_self'>
            <img className="logo" src="http://wjon.com/files/2014/03/Photo_TBD-320x411_1.jpg?w=600&h=0&zc=1&s=0&a=t&q=89" alt = "img" 
            style={{ "height":"70px", "width":"70px"}}
            />
          </Menu.Item>

          <Menu.Item href='/coffee' target='_self' name='Coffee' active={activeItem === 'Coffee'} onClick={this.handleItemClick} />
          <Menu.Item href='/tea' target='_self' name='Tea' active={activeItem === 'Tea'} onClick={this.handleItemClick} />
          <Menu.Item href='/icedDrink' target='_self' name='Iced Drink' active={activeItem === 'Iced Drink'} onClick={this.handleItemClick} />
          <Menu.Item href='/bakery' target='_self' name='Bakery' active={activeItem === 'Bakery'} onClick={this.handleItemClick} />

          <Dropdown item text='New Recipe'>
            <Dropdown.Menu>
              <Dropdown.Item href='/coffee/new'>Add New Recipe to Coffee</Dropdown.Item>
              <Dropdown.Item href='/tea/new'>Add New Recipe to Tea</Dropdown.Item>
              <Dropdown.Item href='/icedDrink/new'>Add New Recipe to Iced Drink</Dropdown.Item>
              <Dropdown.Item href='/bakery/new'>Add New Recipe to Bakery</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Menu position='right'>
            <Menu.Item className="navRight">
              <Menu.Item name='Login or SignUp' active={activeItem === 'Login/SignUp'} onClick={this.handleItemClick} />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default HomePageNav;

