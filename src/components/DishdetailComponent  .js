import React , { Component } from 'react';


class Details extends Component{
    constructor(props){
        super(props);
        this.state = {
            }
    }
    render(){
      const  dish =  this.props.details;
      const comments = dish.comments;
      console.log(comments)
      const box_comments = comments.map( (comment) => {
        const d = new Date(comment.date)
        return (
            <div className="comment">
                <div><h7> {comment.comment}</h7></div>
                <div><h7>--{comment.author} , {d.toDateString()}</h7></div>
            </div>
        );
    } );

      return (
        <div className = "box-details" key={dish.id} >
            <div className = "box">
                <div> <img className = "img-item" src={dish.image} alt= {dish.name}/> </div>
                <div><h1> {dish.name}</h1></div>
                <div><h5> {dish.description}</h5></div>
            </div>
            <div className = "box">
                <div className= "box-comment">
                    {box_comments}
                </div>
            </div>
        </div>
    );
    }
}
export default Details;