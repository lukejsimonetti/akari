import { useContextState, useContextReducer } from "constate";

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        default: return state;
    }
}

export const useAccountReducer = () => {
    const [accounts, dispatch] = useContextReducer("account", reducer, 0);
    const addAccount = () => dispatch({ type: "INCREMENT" });
    return { addAccount };
}

export const useAccount = () => {
    const [accounts, setAccount] = useContextState("account", []);

    const addAccount = (v) => {
        let newAccounts = accounts
        return setAccount([v])
    }
    return { accounts, addAccount };
}
