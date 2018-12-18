import React from 'react'
import { Card, CardBody } from 'reactstrap';
import Icon from '../../../Helper/Icon'

const Users = props => {
    return (
        <div className="text-center">
            <Card className={`text-white bg-teal`}>
                <CardBody className="pb-0">
                    <Icon name="users" size="3x" />
                    <h4 className="mb-3">Users</h4>
                </CardBody>
            </Card>
        </div>
    )
}
export default Users
