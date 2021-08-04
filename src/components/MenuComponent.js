import React , { Component } from 'react';

class Menu extends Component{
    constructor(props){
        super(props);
       
    }

    render(){
        const menu = this.props.dishes.map( (dish) => {
            return (
                <div className = "item" key={dish.id} onClick = { () => this.props.onClick(dish.id)}>
                    <div><h1> {dish.name}</h1></div>
                    <div><img className = "img-item" src={dish.image} alt= {dish.name}/></div>
                </div>
            );
        } );
        return (
            <div className = "container">
                {menu}
            </div>
        );
    }
}
export default Menu;