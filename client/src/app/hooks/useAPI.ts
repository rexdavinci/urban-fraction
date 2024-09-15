'use client';
import { useCallback, useMemo } from 'react'
import { useAssetStore } from '../store';
import { Trade, User, Asset } from '../constants';


const uri = 'http://localhost:8000'

const useAPI = () => {
  const { setAuth, auth, watching, setAssets, assets } = useAssetStore()

  const userAPI = useMemo(() => new User(), [])
  const assetAPI = useMemo(() => {
    const assetClass = new Asset()
    setAssets(assetClass.assets)
    return assetClass
  }, [])

  // const trade = useMemo(() => new Trade(assetAPI, userAPI), [assets, users])


  const addAsset = useCallback((data: { [x: string]: string }) => {
    return {
      id: assets.length + 1,
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
  }, [assets.length])


  const login = useCallback(async (data: { username: string, password: string }) => {
    const res = await fetch(`${uri}/login`, {
      body: JSON.stringify(data),
      method: 'POST'
    })
    console.log(await res.json());
  }, [])

  const loginUser = useCallback((data: { [x: string]: string }) => {
    const user = userAPI.users.find(u => u.username === data.username && u.password === data.password)
    setAuth(user)
  }, [setAuth, userAPI])

  const buyAsset = useCallback((asset: number, units: number) => {
    if (!auth) return alert('You must be connected to purchase')
    if (!watching) return alert('None watching')
    const cost = watching.unit_cost * units
    // console.log({  units, asset, cost })

    if (auth.balance < cost) return alert("Insufficient Funds")
    // const { user, assets: updatedAssets } = trade.buy(asset, units, auth.id, cost)
    // console.log(assets.assets, updatedAssets)
    // setAssets(updatedAssets)
    // setAuth(user)

  }, [])

  const updateProfile = useCallback((username: string, crypto: string) => {
    const updatedUser = userAPI.updateUser(auth!.id, username, crypto)
    setAuth(updatedUser)
  }, [setAuth, auth, userAPI])

  return { loginUser, addAsset, buyAsset, updateProfile, assets, login }
}

export { useAPI }