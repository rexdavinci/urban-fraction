import { create } from 'zustand'
import { persist, devtools, createJSONStorage } from 'zustand/middleware'

interface AssetState {
  auth: string;
  assets: any;
  watching: any;
  setAuth: (token: string) => void
  setAssets: (assets: any) => void
  setWatching: (watching: any) => void
}

export const useAssetStore = create<AssetState>()(
  devtools(
    persist(
      (set) => ({
        auth: '',
        assets: [],
        watching: null,
        setAuth: (auth) => set(() => ({ auth })),
        setAssets: (assets) => set(() => ({ assets })),
        setWatching: (watching) => set(() => ({ watching })),
      }),
      {
        name: 'asset-store', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      },
    ),
  ),
)

