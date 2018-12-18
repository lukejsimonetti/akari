import React from 'react'
import { Card, CardBody } from 'reactstrap';
import Icon from '../../../Helper/Icon'
const Calendar = props => {
    // if (props.data === undefined) return null
    return (
        <div className="text-center">
            <Card className={`text-white bg-info`}>
                <CardBody className="pb-0">
                    <Icon name="calendar" size="3x" />
                    <h4 className="mb-3">Calendar</h4>
                </CardBody>
            </Card>
        </div>
    )
}

export default Calendar
