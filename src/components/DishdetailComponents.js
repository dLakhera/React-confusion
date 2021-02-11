import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Label, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap'
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;

class RenderComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: props.comments,
            addComment: props.addComment,
            isModalOpen: false
        }
        this.handleComment = this.handleComment.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    };

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleComment(values) {
        this.toggleModal();
        var val = JSON.parse(JSON.stringify(values));
        // val.date = new Date();
        // console.log(this.state.comment[0].dishId)
        val.dishId = this.state.comment[0].dishId;
        this.state.addComment(val.dishId, val.rating, val.author, val.comment); 
        return;
    }

    render() {
        var dom_Content = [];
        return (
            <>
                <Card>
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        {this.state.comment.forEach(element => {
                            dom_Content.push(
                                <>  
                                    <CardText>{element.comment}</CardText>
                                    <p>~{element.author}, {new Date(element.date).toDateString()}</p>
                                </>
                            );
                        })}
                        {dom_Content}
                        <Button outline onClick={this.toggleModal}>Comment</Button>
                    </CardBody>
                </Card>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleComment(values)}>
                            <Row row className="form-group">
                                <Col md={2}>
                                    <Label htmlFor="comment">Comment</Label>
                                </Col>
                                <Col md={10}>
                                    {/* eslint-disable-next-line */}
                                    <Control.text model=".comment" id="comment" name="comment"
                                        placeholder="Write your comment here"
                                        className="form-control"
                                        validators={{
                                            required
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row row className="form-group">
                                <Col md={2}>
                                    <Label htmlFor="author">Author</Label>
                                </Col>
                                <Col md={10}>
                                    {/* eslint-disable-next-line */}
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your name"
                                        className="form-control"
                                        validators={{
                                            required
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row row className="form-group">
                                <Col md={2}>
                                    <Label htmlFor="author">Author</Label>
                                </Col>
                                <Col md={10}>
                                    {/* eslint-disable-next-line */}
                                    <Control.select model=".rating" id="rating" name="rating"
                                        className="form-control"> 
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
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
                        <RenderComments comments={props.comments} addComment={props.addComment}/>
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

                <RenderDish dish={props.dish} comments={props.comments} addComment={props.addComment}/>

            </div>
        );
    }
}
export default DishDetails;