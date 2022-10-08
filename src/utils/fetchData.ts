import _ from "lodash";
import { db } from "../firebaseConfig";

export async function fetchData (documentName ='', documentID=''){
    const response =  await db.collection(documentName).doc(documentID+'').get();
    const responseData = response.data();
    if(!_.isEmpty(responseData)){
        return responseData;
    }
   }