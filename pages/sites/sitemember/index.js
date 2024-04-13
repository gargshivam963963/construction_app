
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import axios from 'axios';
import nookies, { parseCookies } from 'nookies';
import AddSiteMember from '@/components/utils/Modal/AddSiteMember';
import Image from 'next/image';
import SearchInput from '@/components/utils/SearchInput';

const Index = ({ siteMembers, permissions }) => {
    const [showInviteMemberModal, setShowInviteMemberModal] = useState(false)
    const [searchInput, setSearchInput] = useState("");

    const members = siteMembers?.siteMembers;
    const router = useRouter();
    const { siteId } = parseCookies();

    const openInviteMemberModal = () => {
        setShowInviteMemberModal(true);
    };

    const closeInviteMemberModal = () => {
        setShowInviteMemberModal(false);
    };

    const filteredTasksData = members && members?.filter(
        (item) =>
            item &&
            item?.member?.user?.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
    );

    const onChange = (e) => {
        setSearchInput(e.target.value)
    }

    return (
        <>
            <div className="row">
                <div className="col-4 mb-3">
                    <SearchInput className=" form-control" placeholder={"Search Members"} onChange={onChange} value={searchInput} />
                </div>

                <div className="col-8 text-end">
                    <button type="button" className="border-info text-white m-auto  bg-btn-bg rounded px-2 py-1 btn btn-primary" data-bs-toggle="modal" onClick={openInviteMemberModal} data-bs-target=".bd-example-modal-xl">+Add Member</button>

                    {/* <button className='btn bg-info text-white new-site-btn' style={{ boxShadow: "2px 2px 13px #8CBCD9" }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">+ MEMBERS</button> */}
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <ul className="mt-4 list-group shadow-sm  m-auto small">
                        <li className="list-group-item p-4 text-white fw-bolder bg-blue" >
                            <div className='row'>
                                <div className='col-3'>Members</div>
                                <div className='col-4'>Invitation Status</div>
                                <div className='col-3'>Role</div>
                                <div className='col-1 text-center'>Delete</div>
                            </div>
                        </li>

                        {
                            filteredTasksData && filteredTasksData?.map((item, index) => {
                                const nameParts = item?.member?.user?.name.split(' ');
                                const firstNameInitial = nameParts && nameParts[0] ? nameParts[0].charAt(0) : 'N';
                                const lastNameInitial = nameParts && nameParts.length > 1 ? nameParts[nameParts.length - 1].charAt(0) : 'U';
                                return (
                                    <>
                                        {item?.inviteAccepted && <li key={index} className="list-group-item">
                                            <div href="/member" className='text-decoration-none text-black'>
                                                <div className='row gap-5'>
                                                    <div className='col-3 d-flex align-items-center px-2 m-0 gap-3 ' >
                                                        <div className=" profile-logo d-flex justify-content-center align-items-center bg-danger capitalize shadow border border-3">
                                                            <h2 className="text-white mt-3 text-capitalize">{firstNameInitial}{lastNameInitial}</h2>
                                                        </div>
                                                        <div>
                                                            <span className='bold'>{item?.member?.user?.name}</span><br />
                                                            <span>{item?.member?.user?.phone?.number}</span><br />
                                                            <span>{item?.member?.user?.email?.address}</span>
                                                        </div>
                                                    </div>

                                                    <div className='col-3 d-flex align-items-center px-2 m-0 gap-3 ' >
                                                        <small className='w-100'>
                                                            {(item?.inviteAccepted) ?
                                                                <span className='fw-bold text-success fs-6'><i className="bi bi-shield-check fs-5"></i> Accepted</span> :
                                                                <>
                                                                    <span className='fw-bolder  fs-6 text-dark-gray'>
                                                                        <Image src="/assets/images/pending.png" width={28} height={25} className='text-success fs-xl' alt="pending" />
                                                                        Pending
                                                                    </span><br />
                                                                    {/* <span><Link href='#' className='fw-bolder text-info mt-1'>Resend Invitation</Link></span> */}
                                                                </>
                                                            }</small>
                                                    </div>
                                                    <div className='col-3 d-flex align-items-center px-2 m-0 gap-3 ' >
                                                        <span className='form-control'>{item?.member?.permission?.name}</span>
                                                    </div>

                                                    <div className='col-1 d-flex align-items-center px-0 fs-4 bg-none' >
                                                        <i className='bi bi-trash text-danger cursor-pointer'></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>}
                                    </>
                                )
                            })
                        }


                    </ul>
                </div>
            </div >
            <AddSiteMember showModal={showInviteMemberModal} closeModal={closeInviteMemberModal} roles={permissions} siteId={siteId} />

        </>
    )
}

export default Index;

export async function getServerSideProps(context) {
    const { token, siteId, currentOrganizationId } = nookies.get(context);
    let data;

    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/site/members`,
            {
                params: {
                    site: siteId,
                    organization: currentOrganizationId,
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        data = response?.data;
    } catch (error) {
        data = error?.response?.data?.error;
    }
    return {
        props: {
            siteMembers: data || null,

        }
    }
}

