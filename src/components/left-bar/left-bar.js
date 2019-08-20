import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';



class LeftBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }




    }




    home = (event) => {
        event.preventDefault();
        this.props.history.push('/home');
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/fundtransfer');
    }
    payeeList = (event) => {
        event.preventDefault();
        this.props.history.push('/payeeList');
    }
    addPayee = (event) => {
        event.preventDefault();
        this.props.history.push('/addPayee');
    }
    logout = (event) => {
        event.preventDefault();
        this.props.history.push('/');
    }


    render() {
        return (

            <div className="row">

                <div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.home}>
                        Home</button>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.payeeList}>
                        Payee List</button>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.addPayee}>
                        Add Payee</button>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>
                        Fund Transfer</button>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.logout}>
                        Logout</button>

                </div>

            </div>
        )
    }
}
export default withRouter(LeftBar);