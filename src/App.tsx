// import { useStateTogether } from 'react-together'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RestaurantList from '@components/RestaurantList'
import './index.css'
import RestaurantMenu from '@components/Menu'
import Layout from '@components/Layout'
import { useStateTogether } from 'react-together'
import * as db from './db.json'
import 'primeicons/primeicons.css';

import LoginPage from '@components/LoginPage'
import { useState } from 'react'
import CreateSessionPage from '@components/CreateSessionPage'
import JoinSessionPage from '@components/JoinSessionPage'
import CheckoutPage from '@components/CheckoutPage'
import PaidPage from '@components/PaidPage'
import IndOrderCart from '@components/IndOrderCart'
import RoulettePage from '@components/RoulettePage'

export default function App() {
  type orderItemType = (
    | (typeof db.restaurants)[number]['menu']['food'][number]
  ) & { quantity: number, culprit: {[userName: string]: number} }

  type modificationType = (
    | orderItemType['modifications'][keyof orderItemType['modifications']]
  ) & { quantity: number }

  const [ordersState, setOrdersState] = useStateTogether<{ [id: string]: orderItemType }>('orders', {})

  const [nameState, setNameState] = useState('')
  const [nameListState, setNameListState] = useStateTogether('names', [])

  const addName = (username: string) => {
    setNameState(username)
    setNameListState([
      ...nameListState,
      username
    ])
  }

  const [sessionNameState, setSessionNameState] = useState('')

  const addOrder = (order: orderItemType) => {
    // if no quantity exists, set it to 1
    if (!order.quantity || order.quantity === 0) {
      order.quantity = 1
      order.culprit = {}
      order.culprit[nameState] = 1
    }

    // if order already exists, increment quantity
    if (ordersState[order.id]) {
      order.quantity = ordersState[order.id].quantity + 1
      order.culprit[nameState] = (ordersState[order.id].culprit[nameState] ?? 0) + 1
    }

    setOrdersState({
      ...ordersState,
      [order.id]: order,
    })
  }

  const incrementMod = (order: orderItemType, modification: modificationType) => {
    // if no quantity exists, set it to 1 and add to order
    if (!modification.quantity || modification.quantity === 0) {
      order.modifications[modification.id].quantity = 1
    } else {
      // if modification already exists, increment quantity
      order.modifications[modification.id].quantity = order.modifications[modification.id].quantity + 1
    }
 
    setOrdersState({
      ...ordersState,
      [order.id]: order,
    })
  }

  const decrementMod = (order: orderItemType, modification: modificationType) => {
    // if no quantity exists, do nothing
    if (!modification.quantity || modification.quantity === 0) {
    } else {
      // if modification already exists, increment quantity
      order.modifications[modification.id].quantity = order.modifications[modification.id].quantity - 1
    }

    setOrdersState({
      ...ordersState,
      [order.id]: order,
    })
  }

  const decrementOrder = (order: orderItemType) => {
    if (ordersState[order.id].quantity === 1) {
      const { [order.id]: _, ...rest } = ordersState
      setOrdersState(rest)
    } else {
      let culprit = {...ordersState[order.id].culprit}
      if (culprit[nameState] ?? 0 > 0) {
        --culprit[nameState];
      } else {
        for (let key in culprit) {
          if (culprit[key] > 0) {
            --culprit[key];
            break;
          }
        }
      }
      setOrdersState({
        ...ordersState,
        [order.id]: {
          ...ordersState[order.id],
          quantity: ordersState[order.id].quantity - 1,
          culprit
        },
      })
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<LoginPage addName={addName} />} />
        </Route>
        <Route path='/session'>
          <Route path='/session/create' element={<CreateSessionPage nameState={sessionNameState} setNameState={setSessionNameState} />} />
          <Route path='/session/join/:id' element={<JoinSessionPage nameState={sessionNameState} setNameState={setSessionNameState} />} />
        </Route>
        <Route path='/restaurants' element={<Layout incrementMod={incrementMod} decrementMod={decrementMod} nameState={nameState}  ordersState={ordersState} addOrder={addOrder} decrementOrder={decrementOrder} />}>
          <Route index element={<RestaurantList />} />
          <Route
            path='/restaurants/:id'
            element={<RestaurantMenu addOrder={addOrder} ordersState={ordersState} decrementOrder={decrementOrder} />}
          />
        </Route>
        <Route path='/checkout' element={<Layout incrementMod={incrementMod} decrementMod={decrementMod} nameState={nameState}  ordersState={ordersState} addOrder={addOrder} decrementOrder={decrementOrder} />}>
          <Route index element={<CheckoutPage incrementMod={incrementMod} decrementMod={decrementMod} nameState={nameState} ordersState={ordersState} addOrder={addOrder} decrementOrder={decrementOrder} />} />
        </Route>
        <Route path='/checkout/success' element={<Layout incrementMod={incrementMod} decrementMod={decrementMod} nameState={nameState}  ordersState={ordersState} addOrder={addOrder} decrementOrder={decrementOrder} />}>
          <Route index element={<PaidPage />} />
        </Route>
        <Route path='/checkout/split' element={<Layout incrementMod={incrementMod} decrementMod={decrementMod} nameState={nameState}  ordersState={ordersState} addOrder={addOrder} decrementOrder={decrementOrder} />}>
          <Route index element={<IndOrderCart incrementMod={incrementMod} decrementMod={decrementMod} nameState={nameState} ordersState={ordersState} addOrder={addOrder} decrementOrder={decrementOrder}/>} />
        </Route>
        <Route path='/checkout/sortition' element={<Layout incrementMod={incrementMod} decrementMod={decrementMod} nameState={nameState}  ordersState={ordersState} addOrder={addOrder} decrementOrder={decrementOrder} />}>
          <Route index element={<RoulettePage nameState={nameState} nameListState={nameListState} ordersState={ordersState} addOrder={addOrder} decrementOrder={decrementOrder}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
