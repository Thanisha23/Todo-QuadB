// import {configureStore} from '@reduxjs/toolkit'
import { configureStore } from "@reduxjs/toolkit"
import card1Reducer from "../features/card1/card1Slice"
import card3Reducer from "../features/card3/card3Slice"
import card2Reducer from "../features/card2/card2SLice"
export const store = configureStore({
    reducer:{
        card1: card1Reducer,
        card3: card3Reducer,
        card2:card2Reducer
    }
})

