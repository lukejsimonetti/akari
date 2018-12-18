import React from "react"
import { Switch, Route } from "react-router-dom"

import AccountAdd from './Add'
import AccountList from './List'

const Routes = props => {
    return (
        <Switch>
            <Route path="/add" name="Account Add" component={AccountAdd} />
            <Route path="/list" name="Account Add" component={AccountList} />
        </Switch>
    )
}

export default Routes