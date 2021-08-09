
import Menu from './MenuComponent';
import {DISHES} from '../components/shared/dishes';
import {COMMENTS} from '../components/shared/comments';
import {LEADERS} from '../components/shared/leaders';
import {PROMOTIONS} from '../components/shared/promotions';
import { Component } from 'react';
import Header  from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch , Route , Redirect} from 'react-router-dom';
import Contact from './ContactComponent';
import Details from './DishdetailComponent  ';
import About from './AboutComponent'

class Main extends Component {
  constructor (props)
  {
    super(props);
    this.state = {
      dishes : DISHES,
      Comments:COMMENTS , 
      promotions : PROMOTIONS , 
      leaders : LEADERS
    };
  }  

  // OnDishSelect(dishId)
  // {
  //           this.setState({selectedDish : dishId})
  // }

  render ()
    {
      const HomePage = ()=>{
        return (
          <Home dish={this.state.dishes.filter( (dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter( (promo) => promo.featured)[0]}
            leader={this.state.leaders.filter( (leader) => leader.featured)[0]}
          />
        );
      }


      const DishWithId = ({match}) =>{
          return (
            <Details dish={this.state.dishes.filter( (dish)=> dish.id === parseInt(match.params.dishId,10) )[0]}
            comments = {this.state.Comments.filter( (comment) => comment.dishId === parseInt(match.params.dishId,10) )}
            />
          );
      }

      return(
      <div>
      <Header />
      <Switch>
        <Route path="/home" component = {HomePage} />
        <Route exact path="/menu" component = {() => <Menu dishes = {this.state.dishes}/>} />
        <Route path="/menu/:dishId" component = {DishWithId} />  
        <Route exact path="/contactus" component = {Contact}/>
        <Route exact path="/aboutus" component = {() => <About leaders = {this.state.leaders}/>}/>
        {/* <Redirect to="/home" /> */}

      </Switch>
      {/* <Menu dishes ={this.state.dishes} onClick = { (dishId) => this.OnDishSelect(dishId)} /> */}
      {/* <Details details = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/> */}
      <Footer />
    </div>
    );
  }
}

export default Main;
