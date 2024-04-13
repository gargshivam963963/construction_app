import ExpensesDetails from '@/components/allbills/ExpensesDetails'
import ViewComptedTask from '@/components/dashboard/sites/completed-Task/ViewComptedTask'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const billsDetails = () => {
    return (
        <div>
            <div className='row '>
                <div className='col-3 text-center '>
                    <div className='border rounded-4  p-2 border-black d-flex  gap-2  justify-content-center flex-column'>
                        <div className=' border-bottom border-2 p-1 border-darkgray'>
                            <span className='fw-bold text-blue '>OverAll Site Budget</span><br />
                        </div>
                        <div className=''>
                            <small className='text-light-gray fs-13'> 0000000000000</small>
                        </div>
                    </div>

                </div>
                <div className='col-3 text-center'>
                    <div className='border rounded-4 p-2 border-black d-flex   gap-2 justify-content-center  flex-column'>
                        <div className=' border-bottom border-2 p-1 border-darkgray'>
                            <span className='fw-bold text-blue '>Total Expenses</span><br />
                        </div>
                        <div className=''>
                            <small className='text-light-gray fs-13'> 0000000000000</small>
                        </div>
                    </div>

                </div>
                <div className='col-3 text-center'>
                    <div className='border rounded-4 p-2 border-black d-flex  gap-2 justify-content-center flex-column'>

                        <div className=' border-bottom border-2 p-1 border-darkgray'>
                            <span className='fw-bold text-blue '>Savings</span><br />
                        </div>
                        <div className=''>
                            <small className='text-light-gray fs-13'> 0000000000000</small>
                        </div>
                    </div>

                </div>

            </div>

            <div className="row border-top mt-4 border-bottom-0">
                <div className="col-lg-3 dz-scroll height500 border border-right border-2 border-solid border-grey ">
                    <div className="nav flex-column nav-pills mb-3 mtngtabs mting">

                        <div className='d-flex justify-content-between py-2 border-bottom border-2'>
                            <small>All Expenses</small>
                            <small className='text-info fw-bold'>+ Create Expenses Category</small>
                        </div>
                        {/* <hr/> */}
                        {/* <div>  */}
                            <Link href="#m1-tab" data-bs-toggle="pill" className={`text-decoration-none text-black py-3 border-bottom `}>
                                <div className='d-flex  justify-content-between'>
                                    <small className='fw-bold py-1'>Administrative </small>
                                    <small className='border  border-2 rounded-3 px-4 py-1 text-grey bg-gray'>00.00/</small>
                                </div>
                            </Link>
                            {/* <hr /> */}
                            <Link href="#m1-tab" data-bs-toggle="pill" className={`text-decoration-none text-black mt-4  py-3 border-bottom`}>
                                <div className='d-flex  justify-content-between'>
                                    <small className='fw-bold py-1'>Material </small>
                                    <small className='border  border-2 rounded-3 px-4 py-1 text-grey bg-gray'>00.00/</small>
                                </div>
                            </Link>
                            <Link href="#m1-tab" data-bs-toggle="pill" className={`text-decoration-none text-black mt-4  py-3 border-bottom`}>
                                <div className='d-flex  justify-content-between'>
                                    <small className='fw-bold py-1'>Equipment </small>
                                    <small className='border  border-2 rounded-3 px-4 py-1 text-grey bg-gray'>00.00/</small>
                                </div>
                            </Link>
                            <Link href="#m1-tab" data-bs-toggle="pill" className={`text-decoration-none text-black mt-4  py-3 border-bottom`}>
                                <div className='d-flex  justify-content-between'>
                                    <small className='fw-bold py-1'>Labour </small>
                                    <small className='border  border-2 rounded-3 px-4 py-1 text-grey bg-gray'>00.00/</small>
                                </div>
                            </Link>
                            <Link href="#m1-tab" data-bs-toggle="pill" className={`text-decoration-none text-black mt-4  py-3 border-bottom`}>
                                <div className='d-flex  justify-content-between'>
                                    <small className='fw-bold py-1'>Employees </small>
                                    <small className='border  border-2 rounded-3 px-4 py-1 text-grey bg-gray'>00.00/</small>
                                </div>
                            </Link>
                        {/* </div> */}
                        {/* )
          })} */}



                    </div>
                </div>

                <ExpensesDetails/>
                {/* <ViewComptedTask /> */}

            </div>
        </div>
    )
}

export default billsDetails