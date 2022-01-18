import { reducer } from "./reducers/index"


const initialState = {
    cart: [],
    products: [],
    user: null,
    //foco é no número
    number: 0
}

export {
    reducer,
    initialState
}


