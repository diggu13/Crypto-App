import './App.css';
import Header from './components/Header';
import { useState, useEffect} from 'react';
import axios from 'axios';
import AvgList from './components/AvgList';
import Main from './components/Main';

function App() {
  
    const [avgList, avgSetList] = useState([])
    const [selectedAvg, setSelectedAvg] = useState(0)
    useEffect(()=>{
      const getNft = async ()=>{
        const sea = await axios.get('/assets?asset_contract_address=0x0ABf0FE202d52eDff1B9481A74543Ec01F00cc84&order_direction=asc')
        console.log(sea.data.assets)
        avgSetList(sea.data.assets)
      }
      return getNft();
    },[])

  return ( 
   <div className='app'>
      <Header />
      {avgList.length>0 && (
      <>
      <Main avgListData={avgList} selectedAvg={selectedAvg}/>
      <AvgList avgListData ={avgList} setSelectedAvg={setSelectedAvg}/>
      </>
      )}
     </div> 
    )
}

export default App;
