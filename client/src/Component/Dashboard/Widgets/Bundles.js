import React from 'react'
import { Card, CardBody } from 'reactstrap';
import Icon from '../../../Helper/Icon'

const Bundles = props => {
    return (
        <div className="text-center">
            <Card className={`text-white bg-purple`}>
                <CardBody className="pb-0">
                    <Icon name="cubes" size="3x" />
                    <h4 className="mb-3">Bundles</h4>
                </CardBody>
            </Card>
        </div>
    )
}

export default Bundles
