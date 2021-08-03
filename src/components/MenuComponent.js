import React , { Component } from 'react';
import Details from './DishdetailComponent  ';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
               selectedDish:null
            }
            console.log('Menu Component constructor is invoke')
    }
    componentDidMount()
    {
        console.log('Menu Component DidMount is invoke')
    }
    OnDishSelect(dish)
    {
            this.setState({selectedDish : dish})
    }
    renderDish(dish)
    {
            if(dish != null)
                return (
                   <Details details = {dish}/> 
                )
            else   
            return (
                <div></div>
            );
    }
    render(){
        const menu = this.props.dishes.map( (dish) => {
            return (
                <div className = "item" key={dish.id} onClick = { () => this.OnDishSelect(dish)}>
                    <div><h1> {dish.name}</h1></div>
                    <div><img className = "img-item" src={dish.image} alt= {dish.name}/></div>
                </div>
            );
        } );
        console.log('Menu Component render is invoke')
        return (
            <div className = "container">
                {menu}
                {this.renderDish(this.state.selectedDish)}
            </div>
        );
    }
}
export default Menu;