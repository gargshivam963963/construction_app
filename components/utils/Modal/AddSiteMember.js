import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link'
import axios from 'axios';
import { parseCookies } from 'nookies';

const AddSiteMember = ({ showModal, closeModal, siteId }) => {
    const [allmembers, setAllmembers] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setLoading(true)
        const getMember = async () => {
            const { currentOrganizationId, token } = parseCookies();
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/site/not-members?site=${siteId}&organization=${currentOrganizationId}`,
                    {

                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    }
                )

                const userData = response?.data?.notSiteMembers;
                setAllmembers(userData)
                setLoading(false)
            } catch (error) {
                toast.error(error, { position: "top-center" });
            }

        }
        getMember();
    }, [])

    let members = []
    const handleChange = (ids, checked) => {
        if (checked) {

            members.push({ _id: ids })
        }
        else {
            members.pop({ _id: ids })
        }

    }

    const addMember = async () => {

        const { currentOrganizationId, token } = parseCookies();
        try {
            setLoading(true);
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/site/member/invite?site=${siteId}&organization=${currentOrganizationId}`,
                { members },
                {

                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            )

            const userData = response.data;
            if (userData.success) {
                toast.success("Member Added Succesfully", { position: "top-center" });
                router.push(router.asPath)
            } else {
                toast.error(response?.payload?.error, { position: "top-center" });
            }
        } catch (error) {
            toast.error(error?.response?.data?.error, { position: "top-center" });
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
            {showModal &&
                <div className="modal-backdrop ">
                    <div className="modal-dialog slide-in-from-bottom h-75">
                        <div className="modal-content fade-in-animation p-0 h-none justify-content-start">
                            <div className="w-100 h-100" >
                                <div className='d-flex justify-content-between w-100 border-bottom modal-header bg-light-blue rounded-top' >
                                    <div className='fs-5 fw-bolder text-blue p-3 '>Add Member</div>
                                    <span onClick={closeModal} className='cursor-pointer text-black mr-4 p-3'>x</span>
                                </div>
                                <div className="overflow-y-scroll h-75 ">


                                    {
                                        (allmembers && allmembers?.length !== 0) ?
                                            allmembers.map((item, index) => {
                                                const nameParts = item?.user?.name.split(' ');
                                                const firstNameInitial = nameParts[0] ? nameParts[0].charAt(0) : '';
                                                const lastNameInitial = nameParts.length > 1 ? nameParts[nameParts.length - 1].charAt(0) : '';
                                                return (
                                                    <div key={index} className='w-100 row modal-body text-info p-2'>
                                                        <div className="form-check d-flex justify-content-between ">
                                                            <div className="d-flex gap-4 ">
                                                                <div className=" sync-box text-blue border fw-bolder bg-light-blue border-black border-3 rounded-pill p-2 w-50">{firstNameInitial}</div>
                                                                <div>
                                                                    <label className="form-check-label text-black d-flex flex-column gap-1" for="flexCheckDisabled">
                                                                        <span className="">{item?.user?.name} </span>
                                                                        <span className="">{item?.user?.phone?.number}</span>
                                                                        <span className="">({item?.permission?.name})</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <input className="cursor-pointer p-3 h-100" type="checkbox" value="" id="flexCheckChecked" onChange={(e) => handleChange(item?._id, e.target.checked)}
                                                                //  style={{fontSize: "20px"}} 
                                                                />

                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                )
                                            })
                                            : loading ? <div className="spinner-border" role="status">
                                                <div className="visually-hidden">Loading...</div>
                                            </div> :
                                                <div className='h-100 text-center d-flex flex-column align-items-center justify-content-center p-5'>
                                                    <div>No Member found</div>

                                                    <div>To add Member Please
                                                        <Link href={"/member"} className='mx-1'>Click</Link>
                                                        here</div>
                                                </div>
                                    }
                                </div>
                                {allmembers?.length > 0 && <div className="w-50 m-auto mt-2">
                                    {/* {allmembers.length > 0  ||<button type='submit' className="text-white m-auto w-100 bg-info auth_btn" onClick={() => addMember()}>Add</button>} */}
                                    {!loading ? <button type='submit' className="text-white m-auto w-100 bg-btn-bg auth_btn" onClick={() => addMember()}>Add</button>
                                        :
                                        <button className="btn btn-primary w-100" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                            <span role="status">Loading...</span>
                                        </button>
                                    }
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default AddSiteMember