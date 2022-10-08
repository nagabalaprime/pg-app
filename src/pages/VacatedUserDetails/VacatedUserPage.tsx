import firebase from "firebase/compat";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import ModalPopup from "../../components/ModalPopup/ModalPopup";
import RoomVacateForm from "../../components/RoomVacateForm/RoomVacateForm";
import { DBCollection } from "../../types/dbCollection";
import { fetchDataList } from "../../utils/fetchData";
import VacatedUserList from "./VacatedUserList";
import "./VacatedUserStyle.scss";

const VacatedUserPage = () => {
  const [userDataList, setUserDataList] = useState([]);

  const fetchUserData = async () => {
    const dataList = await fetchDataList(DBCollection.VacateUserInfo, "vacatedUserID");

    //@ts-ignore
    setUserDataList([...dataList]);
    console.log('data list' , dataList);
  };

  useEffect(() => {
    fetchUserData();
  }, []);



  return (
    <div className="stayer-details-page">
      <h2 style={{ textAlign: "center" }}>PG Vacated User Details</h2>
      {!_.isEmpty(userDataList) &&
        <VacatedUserList
          userDataList={userDataList}
        />}
    </div>
  );
};

export default VacatedUserPage;
