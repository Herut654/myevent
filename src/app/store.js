import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import recommendReducer from '../features/recommend/recommendSlice'
import eventReducer from '../features/event/eventSlice'
import eventsTypeReducer from '../features/eventsType/eventsTypeSlice'
import supplierReducer from '../features/supplier/supplierSlice'
import listReducer from '../features/list/listSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    recommends: recommendReducer,
    events: eventReducer,
    eventsTypes: eventsTypeReducer,
    suppliers: supplierReducer,
    lists: listReducer,
  },
})
