import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { parseCookies } from 'nookies';
import { Circle } from "rc-progress";
import EditStatusTimeLine from "./EditStatusTimeLine";

const StatusTimeline = ({ taskresponse, userpermission }) => {
    const [taskTimelines, setTaskTimelines] = useState([]);

    let count = 0;

    const { token, currentOrganizationId, floorId, siteId } = parseCookies();

    const fetchData = useCallback(async () => {
        if (!taskresponse?._id) return;

        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/task/timelines`, {
                params: { organization: currentOrganizationId, site: siteId, floor: floorId, task: taskresponse._id },
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.status === 200) {
                setTaskTimelines(res?.data?.taskTimelines); // Update state with fetched data
            } else {
                console.log("Error: Unexpected response status"); // Log unexpected response status
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [taskresponse, currentOrganizationId, siteId, floorId, token]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <li className="list-group-item p-3 text-blue fw-bold bg-task-title">
                <div className='row d-flex justify-content-between'>
                    <div className='col'>Update Task Status TimeLine</div>
                    <div className='col text-end'
                    >
                        {userpermission && userpermission?.update && <button type='button' className='text-black text-end cursor-pointer bg-gray'
                            data-bs-toggle="offcanvas" data-bs-target="#editStatusBackdrop" aria-controls="staticBackdrop"
                        >
                            <i className='bi bi-pencil mx-2'></i>
                        </button>}

                    </div>
                </div>
            </li>

            <table className="table table-bordered fw-bold text-center">
                <thead className="bg-blue">
                    <tr className="bg-blue">
                        <th scope="col" className="bg-blue text-white">Task No</th>
                        <th scope="col" className="bg-blue text-white">Work Done</th>
                        <th scope="col" className="bg-blue text-white">Work Left</th>
                        <th scope="col" className="bg-blue text-white">Time</th>
                        <th scope="col" className="bg-blue text-white">Date</th>
                        <th scope="col" className="bg-blue text-white">Duration</th>
                        <th scope="col" className="bg-blue text-white">Status</th>
                    </tr>
                </thead>

                <tbody className="p-5">
                    {taskTimelines && taskTimelines?.map((timeline) => {
                        count += timeline?.progress

                        return (
                            <tr key={timeline?._id}>
                                <td>{taskresponse.taskName}</td>

                                <td className="text-yellow">
                                    <Circle className="me-3"
                                        percent={timeline?.progress} strokeWidth={10}
                                        strokeColor={timeline?.progress < 30 ? "red" : timeline?.progress > 70 ? "green" : "#F5AE00"}

                                        style={{ width: 30 }} />
                                    <span style={{ color: timeline?.progress < 30 ? "red" : timeline?.progress > 70 ? "green" : "#F5AE00" }}
                                    >
                                        Progress {timeline?.progress}%
                                    </span>
                                </td>

                                <td className="text-upcoming-progress">
                                    <Circle className="bg-upcoming me-3" percent={timeline?.progress} strokeWidth={10} strokeColor="#CBCBC9" style={{ width: 30 }} />

                                    Left {100 - count}%
                                </td>

                                <td>{timeline.createdAt.slice(12, 16)}{" "} PM</td>

                                <td>{timeline.createdAt.slice(0, 10)}</td>

                                <td>4 days</td>

                                <td>
                                    <div className="d-flex justify-content-center text-white rounded bg-success p-1 bg-yellow-progress">
                                        Ongoing
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table >

            {
                taskTimelines.length <= 0 && <div className="d-flex justify-content-center align-items-center fw-bold border-bottom p-3">
                    No Updated Timeline
                </div>
            }
            <EditStatusTimeLine taskresponse={taskresponse} fetchData={fetchData} progress={count} />
        </>
    )
}

export default StatusTimeline