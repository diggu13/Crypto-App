import React from 'react';
import CollectionCard from './CollectionCard';
import './AvgList.css'
const AvgList = ({avgListData,setSelectedAvg}) => {
  return (
    <div className='avgList'>
        {avgListData.map(avg=>(
            <div onClick={()=>setSelectedAvg(avg.token_id)}>
                <CollectionCard 
                key={avg.token_id}
                id={avg.token_id}
                name={avg.name}
                traits={avg.traits}
                image={avg.image_preview_url}
                />
            </div>
        ))}
    </div>
  )
};

export default AvgList;