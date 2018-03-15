import React from 'react';
import {  Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';

import CoffeePage from './components/pages/CoffeePage';
import TeaPage from './components/pages/TeaPage';
import IcedDrinkPage from './components/pages/IcedDrinkPage';
import BakeryPage from './components/pages/BakeryPage';

import NewCoffeeForm from './components/forms/NewCoffeeForm';
import NewTeaForm from './components/forms/NewTeaForm';
import NewIcedDrinkForm from './components/forms/NewIcedDrinkForm';
import NewBakeryForm from './components/forms/NewBakeryForm';

import CoffeeDetails from './components/details/CoffeeDetails';
import TeaDetails from './components/details/TeaDetails';
import IcedDrinkDetails from './components/details/IcedDrinkDetails';
import BakeryDetails from './components/details/BakeryDetails';

import EditCoffee from './components/update/EditCoffee';
import EditTea from './components/update/EditTea';
import EditIcedDrink from './components/update/EditIcedDrink';
import EditBakery from './components/update/EditBakery';

const App = () => (
  <div>

    
      <Route exact path='/' component={HomePage} />
      <Route exact path='/coffee' component={CoffeePage} />
      <Route exact path='/tea' component={TeaPage} />
      <Route exact path='/icedDrink' component={IcedDrinkPage} />
      <Route exact path='/bakery' component={BakeryPage} />
      
      <Route exact path='/coffee/new' component={NewCoffeeForm} />
      <Route exact path='/tea/new' component={NewTeaForm} />
      <Route exact path='/icedDrink/new' component={NewIcedDrinkForm} />
      <Route exact path='/bakery/new' component={NewBakeryForm} />
     
      <Route exact path='/coffee/show/:id' component={CoffeeDetails} />
      <Route exact path='/tea/show/:id' component={TeaDetails} />
      <Route exact path='/icedDrink/show/:id' component={IcedDrinkDetails} />
      <Route exact path='/bakery/show/:id' component={BakeryDetails} />

      <Route exact path='/coffee/edit/:id' component={EditCoffee} />
      <Route exact path='/tea/edit/:id' component={EditTea} />
      <Route exact path='/icedDrink/edit/:id' component={EditIcedDrink} />
      <Route exact path='/bakery/edit/:id' component={EditBakery} />
  
  </div>
)

export default App;
