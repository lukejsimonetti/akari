import React, { Component } from 'react';
import { Row, Col } from 'reactstrap'

import Orders from './Widgets/Orders'
import Calendar from './Widgets/Calendar'
import Users from './Widgets/Users'
import Items from './Widgets/Items'
import Customers from './Widgets/Customers'
import Bundles from './Widgets/Bundles'

class Dashboard extends Component {
    render() {
        return (
            <div className="animated fadein">
                <br />
                <Row>
                    <Col xs="12" md="4" >
                        <Orders />
                    </Col>
                    <Col xs="12" md="4" >
                        <Calendar />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="4" >
                        <Users />
                    </Col>
                    <Col xs="12" md="4" >
                        <Items />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="4" >
                        <Customers />
                    </Col>
                    <Col xs="12" md="4" >
                        <Bundles />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;