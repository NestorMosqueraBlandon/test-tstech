import React, { ReactNode } from 'react'

interface Props {
    isVisible: boolean;
    children: ReactNode;
    closeModal: Function;
}

const Modal = ({isVisible, children, closeModal}: Props) => {

  if(!isVisible) return null;
  
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[600px] flex flex-col'>
        <button onClick={() => closeModal()} className='text-white text-xl place-self-end'>X</button>
        <div className='bg-white p-2 rounded'>
            {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
