import React, { Component } from 'react';

export const GlobalContext = React.createContext();

export class GlobalProvider extends Component {
    render() {
        return (
            <GlobalContext.Provider value={'true'}>
                {this.props.children}
            </GlobalContext.Provider>
        );
    }
}
