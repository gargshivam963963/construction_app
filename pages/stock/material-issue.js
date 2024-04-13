import Issues from '@/components/sites/materialIssue/Issues'
import MaterialIssueComponent from '@/components/sites/materialIssue/MaterialIssueComponent'
import StocksLayout from '@/layouts/StocksLayout'
import Link from 'next/link'
import React from 'react'

const MaterialIssue = () => {
    return (
        <StocksLayout current="material">
            <div className='row bg-light-blue d-flex justify-content-end'>
                <span className='text-blue fw-bold p-2'>Material Issues</span>

            </div>

            <div className="row mt-4">
                <div className="col-3 mb-3">
                    <div className="input-group d-flex align-items-center">
                        <span className="input-group-append d-flex align-items-center position-absolute" style={{ right: 18, display: "flex" }}>
                            <i className="bi bi-search" style={{ color: "#8CBCD9" }}></i>
                        </span>
                        <input
                            type="search"
                            className="outline-none form-control rounded"
                            style={{ border: "1px solid #B8BAC2" }}
                            placeholder="Search Material "

                        />


                        <span className="input-group-append d-flex align-items-center position-absolute" style={{ right: 18, display: "flex" }}>
                            <i className="bi bi-search" style={{ color: "#8CBCD9" }}></i>
                        </span>
                    </div>
                </div>
                <div className='col-3 gap-2 d-flex justify-content-between p-0'>
                    <button className=' bg-white text-info new-site-btn border border-info'  >Export Material List</button>
                    <button className=' bg-white text-info new-site-btn border border-info' type="button" data-bs-toggle="offcanvas" >Upload Material List</button>

                </div>

                <div className="col-5 text-end">
                    <button className='btn bg-btn-bg text-white new-site-btn' style={{ boxShadow: "2px 2px 13px #8CBCD9" }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">+Issue</button>
                    <Issues />
                </div>
            </div>

            <small className=' fw-bold mt-4'>All Created Issues ID</small>
            <div className="row border-top  border-bottom-0">
                <div className="col-lg-3 dz-scroll height500 border border-right border-2 border-solid border-grey ">
                    <div className="nav flex-column nav-pills mb-3 mtngtabs mting">


                        <Link href="#m1-tab" data-bs-toggle="pill" className={`text-decoration-none text-black py-3 border-bottom `}>
                            <div className='d-flex  justify-content-between'>
                                <div>
                                    <small className='fw-bold text-blue py-1'>Issue:03 </small><br />
                                    <small className=' py-1'>Steel Bar 12mm </small>
                                </div>
                                <small className='  py-1 text-grey'><i className='bi bi-arrow-right'></i></small>
                            </div>
                        </Link>
                        <Link href="#m1-tab" data-bs-toggle="pill" className={`text-decoration-none text-black py-3 border-bottom `}>
                            <div className='d-flex  justify-content-between'>
                                <div>
                                    <small className='fw-bold text-blue py-1'>Issue:02  </small><br />
                                    <small className=' py-1'>Brick </small>
                                </div>
                                <small className='  py-1 text-grey'><i className='bi bi-arrow-right'></i></small>
                            </div>
                        </Link>
                        <Link href="#m1-tab" data-bs-toggle="pill" className={`text-decoration-none text-black py-3 border-bottom `}>
                            <div className='d-flex  justify-content-between'>
                                <div>
                                    <small className='fw-bold text-blue py-1'>Issue:01 </small><br />
                                    <small className=' py-1'>Concealed Box </small>
                                </div>
                                <small className='  py-1 text-grey'><i className='bi bi-arrow-right'></i></small>
                            </div>
                        </Link>

                    </div>
                </div>

                <MaterialIssueComponent />

            </div>
        </StocksLayout>
    )
}

export default MaterialIssue