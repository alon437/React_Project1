import React  from 'react';

   
function RenderMenuItem({dish , onClick})
{
    return (
        <div className = "item" key={dish.id} onClick = { () => onClick(dish.id)}>
                    <div><h1> {dish.name}</h1></div>
                    <div><img className = "img-item" src={dish.image} alt= {dish.name}/></div>
        </div>
    );
}

const Menu = (props) =>
{
    const menu = props.dishes.map( (dish) => {
        return (
            <div>
                <RenderMenuItem dish = {dish} onClick = {props.onClick} />
            </div>
        );
    } );
    return (
        <div className = "container">
            {menu}
        </div>
    );
}
      
export default Menu;