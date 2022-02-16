import React from 'react';
import eth from '../assets/collectionCard/eth.png';
import './CollectionCard.css'

const CollectionCard = ({id,name,traits,image}) => {
  return <div className='collectionCard'>
      <img src={image} alt=''/>
      <div className='details'>
        <div className='name'>
            {name} <div className='id'>#{id}</div>
        </div>
        <div className='price-container'>
            <img src={eth} className='ethImg' alt='ethImg'/>
            <div className='price'>{traits[0].value}</div>
        </div>
      </div>
  </div>
};
export default CollectionCard;
