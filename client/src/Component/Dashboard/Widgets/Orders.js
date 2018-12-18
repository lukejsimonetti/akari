import React from 'react'
import { Card, CardBody } from 'reactstrap';
import Icon from '../../../Helper/Icon'

const Orders = props => {
    return (
        <div className="text-center">
            <Card className={`text-white bg-warning`}>
                <CardBody className="pb-0">
                    <Icon name="book" size="3x" />
                    <h4 className="mb-3">Orders</h4>
                </CardBody>
            </Card>
        </div>
    )
}

export default Orders
