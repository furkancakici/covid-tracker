import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'

import rootSaga from './sagas/root-saga'
import rootSlice from './slices/root-slice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    devTools: true,
    reducer: rootSlice,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
