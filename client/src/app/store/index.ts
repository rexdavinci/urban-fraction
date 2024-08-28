import { create } from 'zustand'
import { persist, devtools, createJSONStorage } from 'zustand/middleware'


type IUser = { id: number; username: string; password: string, admin: boolean, bought: any[]; balance: number; crypto: string; } | undefined

interface AssetState {
  auth: IUser;
  assets: any;
  watching: any;
  setAuth: (token: IUser) => void
  setAssets: (assets: any) => void
  setWatching: (watching: any) => void
}

export const useAssetStore = create<AssetState>()(
  devtools(
    persist(
      (set) => ({
        auth: undefined,
        assets: [],
        watching: undefined,
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

