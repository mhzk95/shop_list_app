import {configureStore} from '@reduxjs/toolkit'
import shopReducer from './redux/shopSlice'

export default configureStore({
    reducer:{
        shop:shopReducer
    }
})