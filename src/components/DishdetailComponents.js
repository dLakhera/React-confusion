import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


class DishDetails extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        // console.log("DisDetail constructor called");
        this.state = {
        }
    }

    render() {
        // console.log("DisDetail render called")

        if (this.props.dish === undefined) {
            return (
                <div></div>
            );
        }

        else {
            return (
                <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
    }
}
export default DishDetails;