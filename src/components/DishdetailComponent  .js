import React  from 'react';
   
function RenderDetails({dish})
{
    return (
        <div className = "box">
                <div> <img className = "img-item" src={dish.image} alt= {dish.name}/> </div>
                <div><h1> {dish.name}</h1></div>
                <div><h5> {dish.description}</h5></div>
        </div>
    );

}
    function RenderComments({dish})
    {
      const comments = dish.comments;
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
        <div className = "box"> 
            <div className= "box-comment">
                {box_comments}
            </div>
        </div>
    ); 
}

const Details = (props) =>
{
    if(!props.details)
        return ( <div> </div>);

    return (
    <div className = "container">
        <div className = "box-details" key={props.details.id} >
            <RenderDetails dish ={props.details}/> 
            <RenderComments dish = {props.details}/>    
        </div>
    </div>
    );
}
export default Details;