import React  from 'react';
import {Link} from 'react-router-dom'
   
function RenderMenuItem({dish , onClick})
{
    return (
        <div className = "item" key={dish.id}>
            <Link to = {`/menu/${dish.id}`}>
                    <div><h1> {dish.name}</h1></div>
                    <div><img className = "img-item" src={dish.image} alt= {dish.name}/></div>
            </Link>
        </div>
    );
}

const Menu = (props) =>
{
    const menu = props.dishes.map( (dish) => {
        return (
            <div>
                <RenderMenuItem dish = {dish} />
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