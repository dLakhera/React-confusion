import React from 'react'
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


function DishDetails(props) {
    if (props.dish === undefined) {
        return (
            <div></div>
        );
    }

    else {
        return (
            <Card>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}
export default DishDetails;