import React, { useEffect, useState } from "react";
import LabourAttendence from "./LabourAttendence";
import axios from "axios";
import config from "@/config/config";
import { parseCookies } from "nookies";

export default function EmployeeAttendenceDetails({ date ,setTodayAttendence }) {
  const { currentOrganizationId, siteId, token } = parseCookies();
  const reversedDatesString = date && date.split("-").reverse().join("-");
  const [labourData, setlabourData] = useState("");
  const [attendance, setAttendance] = useState("");

  const [todayPresent, setTodayPresent] = useState(0);
  const [todayAbsent, setTodayAbsent] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  // const [todayPresent , setTodayPresent] = useState(0)

  useEffect(() => {
    async function FetchAttendance() {
      const response = await axios.get(
        `${config.API_URL}/attendance/${reversedDatesString}?organization=${currentOrganizationId}&site=${siteId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAttendance(response?.data);
      setTodayPresent(response?.data?.attendance?.totalPresent || 0);
      setTodayAbsent(response?.data?.attendance?.totalPresent || 0);
      setTotalPayment(response?.data?.attendance?.totalAmountToPay || 0);

    }

    FetchAttendance();
  }, [date]);

  const fetchLabour = async () => {
    const response = await axios.get(
      `${config.API_URL}/labours?organization=${currentOrganizationId}&site=${siteId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setlabourData(response?.data?.labours);
  };


  useEffect(()=>{
    fetchLabour()
  },[]);
  return (
    <>
      <div className="row">
        <div className="col bg-light-blue p-2 text-center position-static d-flex justify-content-between">
          <span className=" p-3 fw-bold text-center">
            {reversedDatesString}
          </span>
          <span className=" p-3 fw-bold text-center">Attendence</span>
        </div>
      </div>
      {true ? (
        <div className="row">
          <ul
            className="nav nav-tabs mb-4 d-flex justify-content-center border-0 mt-4 gap-5"
            id="myTab"
            role="tablist"
          >
            <div className="d-flex justify-content-center gap-5">
              <li className="" role="presentation">
                <span className="fw-bold">Total Present</span>
                <br />
                <span className="fw-bold text-success">{todayPresent} </span>
                {/* <small className="bg-blue p-2 rounded fw-bold text-white underline" ></small> */}
              </li>
              <li className="nav-item " role="presentation">
                <span className="fw-bold">Total Absent</span>
                <br />
                <span className="fw-bold text-danger ">{todayAbsent}</span>
                {/* <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#employee-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"> Labour</button> */}
              </li>
              <li className="nav-item" role="presentation">
                <span className="fw-bold">₹ Total Payment</span>
                <br />
                <span className="fw-bold text-warning   ">
                  ₹ {totalPayment}/-
                </span>
                {/* <button className="nav-link" data-bs-toggle="tab" data-bs-target="#labour-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="true">Employee</button> */}
              </li>
            </div>
          </ul>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active "
              id="employee-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab-pane"
              tabIndex="0"
            >
              { (
                <LabourAttendence
                  attendance={attendance?.attendance?.attendance}
                  labourData={ labourData }
                  setTodayAttendence={setTodayAttendence}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="row  p-5">
          <span>Click on Calendar to show Attendence.</span>
        </div>
      )}
    </>
  );
}
