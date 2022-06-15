import { createSlice } from '@reduxjs/toolkit'
import { shopData } from './data'
import { v4 as uuidv4 } from 'uuid'

const getOpenShops = (shop, date) => {
  const { openingDate, closingDate } = shop
  let openDate = new Date(openingDate).getTime()
  let closeDate = new Date(closingDate).getTime()
  if (openDate < date && closeDate > date) return true
  return false
}

export const shopSlice = createSlice({
  name: 'shop',
  initialState: { value: shopData, filtered: null },
  reducers: {
    addShop: (state, action) => {
      state.filtered = null
      state.value.push({ ...action.payload, id: uuidv4() })
    },
    deleteShop: (state, action) => {
      state.value = state.value.filter((shop) => shop.id !== action.payload)
    },
    updateShop: (state, action) => {
      state.value = state.value.map((shop) => {
        if (shop.id == action.payload.id) return action.payload
        return shop
      })
    },
    filterArea: (state, action) => {
      state.filtered = state.value.filter((shop) => shop.area == action.payload)
    },
    filterCategory: (state, action) => {
      state.filtered = state.value.filter(
        (shop) => shop.category == action.payload
      )
    },
    filterDate: (state, action) => {
      state.filtered = state.value.filter((shop) =>
        getOpenShops(shop, action.payload)
      )
    },
    resetFilter: (state) => {
      state.filtered = null
    },
  },
})

export const {
  addShop,
  deleteShop,
  updateShop,
  filterArea,
  filterCategory,
  filterDate,
  resetFilter,
} = shopSlice.actions
export default shopSlice.reducer
