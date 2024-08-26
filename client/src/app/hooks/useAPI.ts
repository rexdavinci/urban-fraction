'use client';
import { useCallback, useEffect } from 'react'
import { useAssetStore } from '../store';
import { users, assets } from '../constants';

const useAPI = () => {

  const { setAssets, setAuth, auth } = useAssetStore()

  const addAsset = useCallback((data: { [x: string]: string }) => {
    return {
      id: assets.assets.length + 1,
      name: data.name,
      location: data.location,
      worth: Number(data.worth),
      units: Number(data.units),
      unit_cost: Number(data.unit_cost),
      minimum_buy: Number(data.minimum_buy),
      sold: 0,
      image: 'https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg'
    }
    // console.log([...assets.assets, asset])
    // setAssets([...assets.assets, asset])

  }, [])

  const loginUser = useCallback((data: { [x: string]: string }) => {
    const user = users.users.find(u => u.username === data.username && u.password === data.password)
    setAuth(user)
  }, [])

  // useEffect(() => {
  //   if(assets.assets.length === 0) {
  //     setAssets(assets.assets)
  //   }
  // }, [])

  return { loginUser, addAsset }
}

export { useAPI }

// {
//   "address": "585 Marley Meadow",
//   "cost": 780000,
//   "units": 100,
//   "unitCost": 18,
//   "minimumBuy": 8
//   "image": "location"
// }