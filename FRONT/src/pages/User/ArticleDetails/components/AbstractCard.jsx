import React from 'react'

const AbstractCard = ({abstract}) => {
  return (
    <div className=' max-w-96 flex flex-col gap-4 items-center'>
        <div>
        <h1 className="text-darkBlue text-2xl font-semibold">Abstract</h1>
        </div>
        <div className=' px-8 py-8 font-bold  rounded-xl shadow' style={{ boxShadow: '-3px -3px 14px 3px #189AB4' }}>
          <p>{abstract}</p>
        </div>
    </div>
  )
}

export default AbstractCard