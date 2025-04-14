import React from 'react'
import Image from 'next/image'
const BreweryImages = ({data}:{data: string[]}) => {
  return (
    
    <>  
    {data && data.length > 0 ? ( data.map((item, index) => (
          <div key={index} className="snap-start shrink-0 first:pl-0 last:pr-4 w-[156px] h-[106px] rounded-lg">
            <img src={item} alt={`Brewery Image ${index}`} className='w-full h-full object-cover rounded-lg' />
          </div>
        ))): (<h3>
            No data display
            
        </h3>)}
     
    </>
  )
}

export default BreweryImages