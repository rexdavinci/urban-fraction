import React from 'react'

export default function Modal({ children }: { children: any }) {
  return (
    <div className="w-lvw h-lvh bg-blue-700/90 fixed top-0 z-[900] left-0">
    {children}
    </div>
  )
}
