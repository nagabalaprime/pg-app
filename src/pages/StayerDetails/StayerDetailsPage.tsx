import firebase from 'firebase/compat';
import _ from 'lodash';
import React, { useEffect, useState } from 'react'
import ModalPopup from '../../components/ModalPopup/ModalPopup';
import RoomVacateForm from '../../components/RoomVacateForm/RoomVacateForm';
import { db } from '../../firebaseConfig';
import { DBCollection } from '../../types/dbCollection';
import StayerDetailsList from './StayerDetailsList';
import './StayerDetailsStyle.scss'

const StayerDetailsPage = () => {

  const [userDataList, setUserDataList] = useState([]);
  const [showAllocate, setShowAllocate] = useState(false);
  const [selectedUserID, setSelectedUserID] = useState('');

  const fetchUserData=async()=>{
    const response=db.collection(DBCollection.UserInfo);
    const data=await response.get();
    const userList: firebase.firestore.DocumentData[] = [];
    data.docs.forEach(item=>{
      const docData = {...item.data()};
      if(docData.status === 'allocated'){
        const updatedItemWithID = {...item.data() , userID: item.id}
        userList.push(updatedItemWithID);
      }
    
     });
     //@ts-ignore
     setUserDataList([...userList]);
}

useEffect(() => {
  fetchUserData();
}, []);

const allocateUser = (userID: string)=>{
  setShowAllocate(true);
  setSelectedUserID(userID);
}


const onCloseModal = ()=>{
  setShowAllocate(false);
}
  return (
    <div className='stayer-details-page'>
      <h2 style={{'textAlign' : 'center'}}>PG Stayer Details</h2>
      {!_.isEmpty(userDataList) && 
      <StayerDetailsList userDataList={userDataList}  allocateUser={allocateUser}/>}
      <ModalPopup onClose={()=>{onCloseModal()}} title="Vacate Room" show={showAllocate}>
        <RoomVacateForm userID = {selectedUserID } /> 
      </ModalPopup>
    </div>
  )
}

export default StayerDetailsPage;