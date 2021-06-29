import React from "react"
import {createContext,useContext,useReducer} from "react"

//Prepares the data Layer
export const StateContext = createContext();

//Provider
export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

//Consumer - Pull information from Data Layer
export const useStateValue = () => useContext(StateContext);
