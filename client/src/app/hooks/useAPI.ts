'use client';
import { useCallback, useEffect, useState } from 'react'
import { useAssetStore } from '../store';

const useAPI = () => {

  const { setAssets, setAuth, auth } = useAssetStore()

  const url = 'http://localhost:8000'

  const postAPI = useCallback(async (data: { [x: string]: string }, action: string) => {
    const result = await fetch(`${url}/${action}`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth}`
      },
      credentials: action === 'assets/new' ? 'include' : 'omit',
    });
    const json = await result.json()
    return json;
  }, [auth])

  const getAPI = useCallback(async (route: string) => {
    const result = await fetch(`${url}/${route}`);
    return await result.json();
  }, [])

  useEffect(() => {
    getAPI('assets/all').then((assets) => {
      setAssets(assets)
    })
  }, [])

  return { postAPI, getAPI }
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