import React from 'react'
import { Card, CardBody } from 'reactstrap';
import Icon from '../../../Helper/Icon'

const Customers = props => {
    return (
        <div className="text-center">
            <Card className={`text-white bg-danger`}>
                <CardBody className="pb-0">
                    <Icon name="user-circle" size="3x" />
                    <h4 className="mb-3">Customers</h4>
                </CardBody>
            </Card>
        </div>
    )
}

export default Customers
