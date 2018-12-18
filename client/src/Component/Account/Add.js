import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import { Row, Col, Button } from 'reactstrap'
import InputText from '../../helper/Form/InputText'
import * as v from '../../Helper/Form/validators'

import { useContextState } from "constate";

import { useAccountReducer, useAccount } from './actions'

const Add = (props) => {
    function Count() {
        const { accounts } = useAccount();

        console.log(accounts, 'updated')
        return (<span>
            
        </span>)
    }

    function IncrementButton() {
        const onSubmit = (v) => {
           
        }
        return (
            <Form
            onSubmit={() =>  useAccountReducer(v)}
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
        />
        )
    }

    return (
        <div>
            <Count />
            <IncrementButton />
        </div>
    )
}
export default Add