/* eslint-disable @next/next/no-img-element */
'use client';
import dynamic from 'next/dynamic'
const Modal = dynamic(() => import('./Modal'))

function CreditCard({setData, setShowModal, buy }: {setData: any; setShowModal: any; buy: any }) {
  return (
    <Modal>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="bg-white/90 w-[400px] h-[450px] rounded-lg relative">
          <div className="p-5">
            <img
              src="https://randommer.io/images/cc/visa.png"
              alt="visa-logo"
              className="mx-auto"
            />
            <div className="flex justify-around mt-4">
              <div className="text-center w-[45%] border border-black mt-5">
                <p className="">Name On Card</p>
                <p className="border bg-white text-lg font-semibold">
                  Avry Pavlik
                </p>
              </div>
              <div className="text-center w-[45%] border border-black mt-5">
                <p className="">PIN</p>
                <p className="border bg-white text-lg font-semibold">
                  7020
                </p>
              </div>
            </div>
            <div className="flex justify-around">
              <div className="text-center w-[45%] border border-black mt-5">
                <p className="">Expiration</p>
                <p className="border bg-white text-lg font-semibold">
                  6/27
                </p>
              </div>
              <div className="text-center w-[45%] border border-black mt-5">
                <p className="">CCV</p>
                <p className="border bg-white text-lg font-semibold">810</p>
              </div>
            </div>
            <div className="flex justify-around">
              <div className="text-center w-[65%] border border-black mt-5">
                <p className="">Car Number</p>
                <p className="border bg-white text-lg font-semibold">
                  4756232599884126
                </p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="absolute bottom-0 w-full px-4 flex justify-between mb-2">
            <button
              onClick={() => {
                setData({ units: 1 });
                setShowModal({ action: "nil", open: false });
              }}
              className="font-semibold bg-blue-500 text-white w-[120px] hover:bg-blue-500/90 rounded py-1"
            >
              Cancel
            </button>
            <button
              onClick={buy}
              className="font-semibold bg-blue-500 text-white w-[120px] hover:bg-blue-500/90 rounded py-1"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default CreditCard