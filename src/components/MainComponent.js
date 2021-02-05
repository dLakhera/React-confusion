import React, {Component} from 'react'
import Menu from './MenuComponent';
import DishDetails from './DishdetailComponents'
import { Navbar, NavbarBrand } from 'reactstrap';

import { DISHES } from '../shared/dishes'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish : null
        }
    }

    onDishSelect(dishId) {
        // console.log(dishId);
        this.setState({ selectedDish: dishId });
        // console.log("We here");
        // console.log(this.state.selectedDish);
    }

    
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Abhyuday</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
                <DishDetails dish = {this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
            </div >
        );
    }
}

export default Main;