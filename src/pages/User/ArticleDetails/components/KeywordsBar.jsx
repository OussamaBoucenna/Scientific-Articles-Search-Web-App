import React from 'react'

const KeywordsBar = ({keywords}) => {
  return (
    <div>
        <h2 className=' text-2xl font-bold text-darkBlue mb-2'>KEYWORDS</h2>
        <div className='block sm:flex flex-row'>
            {keywords.map((keyword, index) =>{
                return(
                    <p key={index} className="font-semibold inline sm:block">{keyword}{index==keywords.length-1?"":" ,"}</p>
                )
            })}
        </div>
    </div>
  )
}

export default KeywordsBar