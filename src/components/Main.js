import React from 'react';
import instagramLogo from '../assets/main/instagram.png';
import twitterLogo from '../assets/main/twitter.png';
import moreLogo from '../assets/main/more.png';
import './Main.css'
import { useState, useEffect} from 'react';


const Main = ({selectedAvg,avgListData}) => {
    const [activeAvg,setActiveavg]=useState(avgListData[0])
    useEffect(()=>{
        setActiveavg(avgListData[selectedAvg])
    },[avgListData,selectedAvg])
  return (
        <div className='main-container'>
            <div className='main-content'>
                <div className='avg-highlight'>
                    <div className='avg-container'>
                        <img className='selected-avg' src={activeAvg.image_preview_url} alt=''
                        />
                    </div>
                </div>
                <div className='avg-details' style={{color:'#fff'}}>
                    <div className='title'>
                        {activeAvg.name}
                    </div>
                    <span className='itemNumber'>#{activeAvg.token_id}</span>
                </div>
                <div className='owner'>
                    <div className='owner-image'>
                        <img src={activeAvg.owner.profile_img_url} alt='' />
                    </div>
                    <div className='owner-details'>
                        <div className='owner-nameAndHandle'>
                            <div>{activeAvg.asset_contract.address}</div>
                            <div className='owner-handle'>@diggu13</div>
                        </div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} alt=''/>
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterLogo} alt=''/>
                        </div>
                        <div className='ownerLink'>
                            <img src={moreLogo} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;
