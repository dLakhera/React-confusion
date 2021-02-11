import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { COMMENTS } from '../shared/comments'


function RenderComments(props) {
    const comments = COMMENTS;
    console.log(props.dish.id);
    var dom_Content = [];
    return (
        <Card>
            <CardBody>
                <CardTitle>Comments</CardTitle>
                {comments.forEach(element => {
                    console.log(element.dishId)
                    
                    if (element.dishId === props.dish.id) {
                        dom_Content.push(<CardText>{element.comment}</CardText>);
                    }
                })}

                {dom_Content}
            </CardBody>
        </Card>
    );
}

function RenderDish(props) {
    return (
        <>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={props.dish.image} alt={props.dish.name} />
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                            </CardBody>
                        </Card></div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments dish = {props.dish}/>
                    </div>
                </div>
            </div>
        </>
    );
}

function DishDetails(props) {
    if (props.dish === undefined) {
        return (
            <div></div>
        );
    }

    else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>

                <RenderDish dish={props.dish} />

            </div>
        );
    }
}
export default DishDetails;