import React from 'react'
import { Card, CardBody } from 'reactstrap';
import Icon from '../../../Helper/Icon'

const Items = props => {
    return (
        <div className="text-center">
            <Card className={`text-white bg-success`}>
                <CardBody className="pb-0">
                    <Icon name="list" size="3x" />
                    <h4 className="mb-3">Items</h4>
                </CardBody>
            </Card>
        </div>
    )
}

export default Items
