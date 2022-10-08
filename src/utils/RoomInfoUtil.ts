import { db } from "../firebaseConfig";
import firebase from 'firebase/compat';
import { DBCollection } from "../types/dbCollection";

export const fetchRoomInfo = async ()=>{
    const response=db.collection(DBCollection.RoomInfo);
    const data=await response.get();
    //@ts-ignore
    const roomList = [];
    data.docs.forEach(item=>{
      const updatedItemWithID = {...item.data() , roomID: item.id}
      roomList.push(updatedItemWithID);
     });
     //@ts-ignore
     return roomList;
  }