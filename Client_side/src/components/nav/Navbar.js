import React, { Component } from 'react'

class  Navbar extends Component {

  filterUpdate(){
    const val = this.refs.filterInput.value
    this.props.filterUpdate(val)
  }

  render() {
    const { search, filterUpdate} = this.props;

    return (
      <div>
        <div style={{border: "20px solid green"}}></div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href='/' target='_self'>
            <img className="logo" src="http://wjon.com/files/2014/03/Photo_TBD-320x411_1.jpg?w=600&h=0&zc=1&s=0&a=t&q=89" alt = "img" 
            style={{ "height":"70px", "width":"70px"}}/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/coffee" target='_self'>Coffee</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/tea' target='_self'>Tea</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/icedDrink' target='_self'>Iced Drink</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/bakery' target='_self'>Bakery</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  New Recipe
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href='/coffee/new'>Add New Recipe to Coffee</a>
                  <a className="dropdown-item" href='/tea/new'>Add New Recipe to Tea</a>
                  <a className="dropdown-item" href='/icedDrink/new'>Add New Recipe to Iced Drink</a>
                  <a className="dropdown-item" href='/bakery/new'>Add New Recipe to Bakery</a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0" submit = {this.onSubmit}>
              <input className="form-control mr-sm-2" 
              placeholder="Search..." 
              type='text'
              ref='filterInput'
              value={search}
              onChange={() => {
               filterUpdate(this.refs.filterInput.value) 
              }}
              />      
            </form>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;

