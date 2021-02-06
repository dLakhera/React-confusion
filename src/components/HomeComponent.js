import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Breadcrumb , BreadcrumbItem
} from 'reactstrap';

import { Link } from 'react-router-dom'

function RenderCard({ item }) {
    console.log("RednerCard called");
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    console.log(props);
    return (
        <div className="container">

            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem active><Link to="/home">Home</Link></BreadcrumbItem>
                    {/* <BreadcrumbItem active>Menu</BreadcrumbItem> */}
                </Breadcrumb>
                <div className="col-12">
                    <h3>Home</h3>
                    <hr />
                </div>
            </div>

            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;   