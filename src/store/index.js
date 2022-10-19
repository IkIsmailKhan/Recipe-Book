// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import recipes from './recipes'

export const store = configureStore({
    reducer: {
        recipes
    }
})