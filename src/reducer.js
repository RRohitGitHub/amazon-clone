import React from "react"

export const initialState={
    basket:[]
}

//Selector

export const getBasketTotal = (basket) => 
    basket?.reduce((accumulator,item)=> (accumulator + item.price),0);


export const reducer =(state,action) =>{
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[...state.basket,action.item]
            }

        default :
            return {state}
    }
}