
function Modal({ children }: { children: any }) {
  return (
    <div className="w-lvw h-lvh bg-black/90 fixed top-0 z-[900] left-0">
      <div className="w-full h-full flex flex-col items-center justify-center ">

    {children}
      </div>
    </div>
  )
}

export default Modal