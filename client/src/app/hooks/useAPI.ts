'use client';
import { useCallback, useEffect } from 'react'
import { useAssetStore } from '../store';
import { users, assets, trade } from '../constants';

const useAPI = () => {

  const { setAuth, auth, watching, setAssets } = useAssetStore()

  const addAsset = useCallback((data: { [x: string]: string }) => {
    return {
      id: assets.assets.length + 1,
      name: data.name,
      location: data.location,
      worth: Number(data.worth),
      units: Number(data.units),
      unit_cost: Number(data.unit_cost),
      minimum_buy: Number(data.minimum_buy),
      monthly_rent: Number(data.monthly_rent),
      sold: 0,
      image: 'https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg'
    }
  }, [])

  const loginUser = useCallback((data: { [x: string]: string }) => {
    const user = users.users.find(u => u.username === data.username && u.password === data.password)
    setAuth(user)
  }, [])

  const buyAsset = useCallback((asset: number, units: number) => {
    if (!auth) return alert('You must be connected to purchase')
    const cost = watching.unit_cost * units
    if (auth.balance < cost) return alert("Insufficient Funds")
    const { user, assets: updatedAssets } = trade.buy(asset, units, auth.id, cost)
    setAssets(updatedAssets)
    setAuth(user)

  }, [])

  const updateProfile = useCallback((username: string, crypto: string) => {
    const updatedUser = users.updateUser(auth!.id, username, crypto)
    setAuth(updatedUser)
  }, [setAuth, auth])

  return { loginUser, addAsset, buyAsset, updateProfile }
}

export { useAPI }