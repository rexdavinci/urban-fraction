/* eslint-disable @next/next/no-img-element */
'use client'
import dynamic from 'next/dynamic'
import { useAssetStore } from '../store'

const Modal = dynamic(() => import('./Modal'))
export default function BuyModal({ setData, data, setShowModal }: { setData: any; data: any; setShowModal: any; }) {
  const { watching} = useAssetStore()
  return (
      <Modal>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="bg-white/90 w-[400px] h-[450px] rounded-lg relative">
            <div className="w-[80%] mx-auto">
              <p className="py-2 text-[20px] text-center">
                <span className="font-semibold">{watching.name}</span>
                <small className="block">
                  {watching.location}{" "}
                  {watching.units === watching.sold && (
                    <span className="animate-pulse text-red-500 font-semibold">
                      (SOLD OUT)
                    </span>
                  )}
                </small>
              </p>
              <img src={watching.image} alt="" className="rounded" />
              <div>
                <div className="flex items-center justify-center my-3">
                  <label className="mr-2">Units</label>
                  <input
                    disabled={watching.units === watching.sold}
                    id="units"
                    onChange={(e) =>
                      setData({ [e.target.id]: Number(e.target.value) })
                    }
                    min={watching.minimum_buy}
                    defaultValue={watching.unit_cost}
                    className="border items-center px-2 text-sm py-1 rounded"
                    type="number"
                    placeholder="how much units?"
                  />
                  <small className="ml-2">
                    CA${" "}
                    {(
                      Number(watching.unit_cost) * Number(data.units)
                    ).toFixed(2)}
                  </small>
                </div>
              </div>
              <div className="grid gap-2 grid-cols-2 grid-flow-col">
                <button
                  disabled={watching.units === watching.sold}
                  onClick={() => setShowModal({ action: "card", open: true })}
                  className={` ${
                    watching.units === watching.sold
                      ? "bg-gray-500"
                      : "bg-red-700"
                  }  text-white rounded py-1 h-[65px] `}
                >
                  Pay With Card
                </button>
                <button
                  disabled={watching.units === watching.sold}
                  className={` ${
                    watching.units === watching.sold
                      ? "bg-gray-500"
                      : "bg-red-700"
                  }  text-white rounded py-1 h-[65px] `}
                >
                  Pay With Crypto
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 w-full px-4 flex justify-between mb-2">
              <button
                onClick={() => {
                  setShowModal({ action: "nil", open: false });
                  setData({ units: 1 });
                }}
                className="font-semibold bg-blue-500 text-white w-[120px] hover:bg-blue-500/90 rounded py-1"
              >
                Cancel
              </button>
              <button className="font-semibold bg-blue-500 text-white w-[120px] hover:bg-blue-500/90 rounded py-1">
                Buy
              </button>
            </div>
          </div>
        </div>
      </Modal>
  )
}
