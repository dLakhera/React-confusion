import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { COMMENTS } from '../shared/comments'


function RenderComments({ comment }) {
    // console.log(props.dish.id);
    var dom_Content = [];
    return (
        <Card>
            <CardBody>
                <CardTitle className="mx-auto">Comments</CardTitle>
                {comment.forEach(element => {
                    dom_Content.push(
                        <>
                            <CardText>{element.comment} ---{element.author}</CardText>
                            <CardText>{new Date(element.date).toDateString()}</CardText>
                        </>
                    );
                })}
                {dom_Content}
            </CardBody>
        </Card>
    );
}

function RenderDish(props) {
    const comments = COMMENTS;
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
                        <RenderComments comment={comments.filter((comment) => props.dish.id === comment.dishId)} />
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