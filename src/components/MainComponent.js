import React, { Component } from 'react'
import Menu from './MenuComponent';
import Home from './HomeComponent'
import DishDetails from './DishdetailComponents'
import Header from './HeaderComponent'
import Contact from './ContactComponent'
import Footer from './FooterComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state =>{
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,

    }
}
class Main extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    };

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured === true)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured === true)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured === true)[0]}
                />
            );
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetails dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} />
            );
        };
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route path='/contactus' component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div >
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));