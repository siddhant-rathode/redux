export {increment} from "../reducers/counterSlice"

import {decrement} from "../reducers/counterSlice"

export const asyndecrement = (value) => (dispatch, getState) => {
    setTimeout(() => {
        dispatch(decrement(value))
    }, 2000)
}