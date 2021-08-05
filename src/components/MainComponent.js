
import Menu from './MenuComponent';
import {DISHES} from '../components/shared/dishes';
import { Component } from 'react';
import Details from './DishdetailComponent  ';
import Header  from './HeaderComponent';
import Footer from './FooterComponent';
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
      <Header />
      <Menu dishes ={this.state.dishes} onClick = { (dishId) => this.OnDishSelect(dishId)} />
      <Details details = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
      <Footer />
    </div>
    );
  }
}

export default Main;
