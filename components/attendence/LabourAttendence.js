import axios from "axios";
import React, { useState } from "react";
import nookies, { parseCookies } from "nookies";
import config from "@/config/config";

const LabourAttendence = ({ attendance, labourData, setTodayAttendence }) => {
  const [overTime, adOverTime] = useState(false);
  const [labour, setLobour] = useState(attendance?.attendance);
  const [todayLabourAttendance, settodayLabourAttendance] = useState([]);
  const [labourPayload, setlabourPayload] = useState([]);
  const [overtime, setOvertime] = useState([]);
  const [labourOverTimeHours, setLabourOverTimeHours] = useState("");
  const [labourOverTimeWage, setLabourOverTimeWage] = useState("");

  const handleClick = () => {
    adOverTime(!overTime);
  };

  let todayAttendance = [];
  const markAttendence = (
    labourId,
    labourAvailability,
    labourOvertime,
    labourOvertimePayment
  ) => {
    settodayLabourAttendance([
      ...todayLabourAttendance,
      {
        labourId: labourId,
        labourAvailability: labourAvailability,
        labourOvertime: labourOvertime,
        labourOvertimePayment: labourOvertimePayment,
      },
    ]);
    setTodayAttendence(todayLabourAttendance);
  };

  const marklabourPayload = (
    labourId,
    labourAvailability,
    dailyHours,
    labourOverTimeHours,
    labourOverTimeWage
  ) => {
    // Check if the labourId already exists in the payload
    const existingIndex = labourPayload.findIndex(
      (item) => item.labourId === labourId
    );
  
    // If the labourId exists, update the corresponding object
    if (existingIndex !== -1) {
      setlabourPayload((prevPayload) => {
        const updatedPayload = [...prevPayload];
        updatedPayload[existingIndex] = { 
          ...updatedPayload[existingIndex],
          labourAvailability,
          dailyHours,
          labourOverTimeHours,
          labourOverTimeWage
        };
        return updatedPayload;
      });
    } else {
      // If the labourId does not exist, add a new object to the payload
      setlabourPayload((prevPayload) => [
        ...prevPayload,
        {
          labourId,
          labourAvailability,
          dailyHours,
          labourOverTimeHours,
          labourOverTimeWage
        }
      ]);
    }
  };
  
  const addOvertime = ()=>{

  }
    return (
      <>
        <div className=" p-2 ">
          {labourData &&
            labourData.map((item, index) => (
              <div
                className="row-sm border-bottom mt-2  shadow-lg  rounded p-2 "
                key={index}
              >
                <>
                  <div className="row">
                    <div className="col-8">
                      <small className="fw-bold fs-5 text-btn-bg">
                        {item.name}
                      </small>
                      <br />
                      <small className="fw-bold text-blue">{item.role}</small>
                    </div>
                    <div className="col-4 text-end">
                      <small className="fw-bold fs-5">
                        <i className="bi bi-three-dots-vertical"></i>{" "}
                      </small>

                      <br />
                      <h6 className="fw-bold text-success">
                        {item.totalPayment}
                      </h6>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-7 d-flex justify-content-evenly  ">
                      <div className="row d-flex w-100">
                        <div className="d-flex justify-content-between flex-wrap">
                          <div className="col-2 ">
                            <button
                              className="bg-gray text-blue rounded-circle px-3  py-2 "
                              onClick={() => marklabourPayload(item._id, 1, item.dailyHours, labourOverTimeHours, labourOverTimeWage)}
                            >
                              P
                            </button>
                            {/* <button className='bg-success text-white rounded-circle px-3  py-2 '>P</button>  */}
                          </div>
                          <div className="col-2">
                            <button
                              className="bg-gray text-black rounded-circle px-3  py-2"
                              onClick={() => marklabourPayload(item._id, 0, item.dailyHours, labourOverTimeHours, labourOverTimeWage)}
                            >
                              A
                            </button>
                            {/* <button className="bg-danger text-white rounded-circle px-3  py-2">
                          A
                        </button> */}
                          </div>
                          <div className="col-3">
                            <button
                              className="bg-gray rounded px-2  py-2 rounded-pill"
                              onClick={() => marklabourPayload(item._id, 2, item.dailyHours, labourOverTimeHours, labourOverTimeWage)}
                            >
                              HD
                            </button>
                            {/* <button className="bg-warning rounded px-2  py-2 rounded-pill">
                          HD
                        </button> */}
                          </div>
                        </div>
                        <div className="col-7 mt-3">
                          <small className="fw-bold">Working Hour: </small>
                          <h5 className="  fw-bold text-primary">
                            {item.dailyHours}
                          </h5>
                        </div>
                        {/* <div className="col-5 mt-3">
                        <small className="fw-bold">Working Hour: </small>
                      <h5 className="  fw-bold text-primary">{item.workingHour}</h5>
                      </div> */}
                        <div></div>
                      </div>
                    </div>
                    <div className="col-5 d-flex justify-content-start gap-3 flex-column">
                      <div className="text-center">
                        <small>To Pay</small>
                        <br />
                        <h5>₹ 1000</h5>
                      </div>
                      <div>
                        <span
                          className="fw-bold text-primary cursor-pointer"
                          onClick={() =>
                            setOvertime((prevOvertime) =>
                              prevOvertime.includes(item._id)
                                ? prevOvertime.filter((id) => id !== item._id)
                                : [...prevOvertime, item._id]
                            )
                          }
                        >
                          + Add Overtime
                        </span>
                      </div>
                    </div>
                  </div>
                  {overtime.includes(item._id) && (
                    <div className="row-sm border-top shadow pb-3 rounded">
                      <div className="row-sm mt-4 px-3">
                        <h6>Add OverTime</h6>
                      </div>
                      <div className="row-sm d-flex justify-content-between px-3 mt-3">
                        <div className="col-4">
                          <small className="text">Over Time Hours</small>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="01"
                            onChange={(e) => setLabourOverTimeHours(e.target.value)}
                          />
                        </div>
                        <div className="col-5">
                          <small>Over Time wage/hr</small>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="100"
                            onChange={(e) => setLabourOverTimeWage(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row-sm justify-content-between p-3 gap-3 d-flex">
                        <div>
                          {/* <small className="fw-bold">Overtime Payment: </small>
                        <h5 className="  fw-bold text-primary">
                          dfj
                        </h5> */}
                        </div>

                        <div className="mt-3">
                          <button
                            type="button"
                            className="btn border btn-outline-danger"
                          >
                            Remove
                          </button>
                          <button
                            type="button"
                            className="btn border btn-outline-primary"
                            onClick={() => marklabourPayload(undefined, undefined, undefined,labourOverTimeWage ,labourOverTimeHours )}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              </div>
            ))}
        </div>
      </>
    );
  };

  export default LabourAttendence;
