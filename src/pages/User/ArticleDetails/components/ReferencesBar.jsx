import React from 'react'

const ReferencesBar = ({references}) => {
  return (
    <div className=' max-w-4xl'>
    <h2 className=' text-2xl font-bold text-darkBlue mb-2'>REFERENCES</h2>
    <div className=' flex flex-col'>
        {references.map((refrerence, index) =>{
            return(
                <p key={index} className="font-semibold">{`[${ index + 1}] `+refrerence}</p>
            )
        })}
    </div>
</div>
  )
}

export default ReferencesBar