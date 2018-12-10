import React, {useState} from 'react'
import { Form, Field } from 'react-final-form'
import { Row, Col, Button } from 'reactstrap'
import InputText from '../helper/Form/InputText'
import * as v from '../Helper/Form/validators'

const Add = (props) => {
    const [accounts, setAccount ] = useState()
    const onSubmit = (v) => {
        setAccount(v)
        props.history.push('/account/list')
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, pristine, invalid }) => (
                <form onSubmit={handleSubmit}>
                    <h2>Add Account</h2>
                    <Row>
                        <Col sm={3}>
                            <Field
                                name="first_name"
                                label="First Name"
                                type="text"
                                placeholder="John"
                                validate={v.required}
                                component={InputText}
                            />
                        </Col>
                        <Col sm={3}>
                            <Field
                                name="last_name"
                                label="Last Name"
                                type="text"
                                placeholder="Smith"
                                validate={v.required}
                                component={InputText}
                            />
                        </Col>
                        <Col sm={3}>
                            <Field
                                name="user_email"
                                label="User Email"
                                type="text"
                                placeholder="user@email.com"
                                validate={v.required}
                                component={InputText}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className="pull-right btn-array">
                                <Button color="primary" type="submit" disabled={pristine || invalid}>Submit</Button>
                            </div>
                        </Col>
                    </Row>
                </form>
            )}
        />)
}
export default Add