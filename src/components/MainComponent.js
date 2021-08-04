
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../components/shared/dishes';
import { Component } from 'react';
import Details from './DishdetailComponent  ';


class Main extends Component {
  constructor (props)
  {
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish : null
    }
  }  

  OnDishSelect(dishId)
  {
            this.setState({selectedDish : dishId})
  }

  render ()
    {
      return(
      <div>
      <Navbar dark color="primary">
        <div >
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes ={this.state.dishes} onClick = { (dishId) => this.OnDishSelect(dishId)} />
      <Details details = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
    </div>
    );
  }
}

export default Main;
