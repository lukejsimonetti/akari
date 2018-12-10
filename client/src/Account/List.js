import React, { Component, useState } from 'react';

const List = () => {
    const [accounts, setAccounts] = useState();
    console.log('for herer')
    return (
        <div>
            {accounts}
        </div>
    );
}

export default List;