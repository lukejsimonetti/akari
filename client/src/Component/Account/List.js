import React, { Component, useState } from 'react';

import {useAccount} from './actions'

const List = () => {
    const {accounts} = useAccount()

    console.log(accounts)
    return (
        <div>
            { accounts.map((v, i) =>{
             return  <div key={v.value}>{v.value}</div>
            })}
        </div>
    );
}

export default List;