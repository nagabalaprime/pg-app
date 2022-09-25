import firebase from 'firebase/compat';
import React, { useEffect, useState } from 'react'
import { db } from '../firebaseConfig';
import StayerDetailsList from './StayerDetailsList';
import './StayerDetailsStyle.scss'

const StayerDetailsPage = () => {

  const [userDataList, setUserDataList] = useState([]);
  const fetchUserData=async()=>{
    const response=db.collection('userData');
    const data=await response.get();
    const userList: firebase.firestore.DocumentData[] = [];
    data.docs.forEach(item=>{
      userList.push(item.data());
     })
     //@ts-ignore
     setUserDataList([...userList]);
}

useEffect(() => {
  fetchUserData();
}, []);


  return (
    <div className='stayer-details-page'>
      <h2 style={{'textAlign' : 'center'}}>PG Stayer Information</h2>
      {!!userDataList &&  userDataList.length > 0 && 
      <StayerDetailsList userDataList={userDataList}/>}
    
    </div>
  )
}

export default StayerDetailsPage;