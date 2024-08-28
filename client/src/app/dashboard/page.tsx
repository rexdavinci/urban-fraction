'use client'

import { useRouter } from 'next/navigation';
import { useAssetStore } from "../store"

export default function Dashboard() {

  const { auth } = useAssetStore()
  const router = useRouter()

  if(!auth) return router.replace('/')
console.log(auth)
  return (
    <div className="mt-10">
      {/* {
        auth.bought.map((a: any, idx: number) => {
          <div key={idx}>

          </div>
        })
      } */}
      <div>
        <img src="" alt="asset-img"/>
        </div>
    </div>
  )
}
