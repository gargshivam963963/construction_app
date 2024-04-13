import MaterialLayout from '@/layouts/MaterialLayout'
import React from 'react'

const PurchaseOrder = () => {
    return (
        <MaterialLayout current="purchase">
            <div className='row-sm d-flex justify-content-end gap-2'>
                <div className='col-2 text-end'>
                    <button type="button" className="border-info border-2 text-info m-auto w-75 bg-white rounded px-0 py-1 btn btn-primary" data-bs-toggle="modal" data-bs-target=".bd-example-modal-xl"><i className="bi bi-file-earmark-excel"></i> Export Excel</button>
                </div>
                <div className='col-2'>
                    <button type="button" className="border-info border-2 text-white m-auto w-75 bg-info rounded  py-1 btn btn-primary" data-bs-toggle="modal" data-bs-target=".bd-example-modal-xl"><i className="bi bi-file-earmark-excel"></i> Create PO</button>
                </div>

            </div>
            <div className='row-sm'>
                <ul className="mt-4 p-0 text-decoration-none list-style-none w-100  shadow-sm  m-auto small">
                    <li className="list-group-item list-group-item  fw-bold bg-gray text-black">
                        <div href="/member" className='text-decoration-none text-black'>
                            <div className='row bg-light-gray'>
                                <div className='border text-white  bg-blue py-2 col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        PO-ID</small>
                                </div>

                                <div className='border  col-1 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        Indent ID</small>
                                </div>
                                <div className=' border col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        Created On</small>
                                </div>
                                <div className='border col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    Created By </small>
                                </div>
                                <div className='border col-1 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        Vendor </small>
                                </div>
                                <div className='border col-1 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        Item Name</small>
                                </div>
                                <div className='border col-1   text-center  d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        Expected Delivery Date </small>
                                </div>
                                <div className='border col-1   text-center  d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        Delivery On</small>
                                </div>
                                <div className='border col-1   text-center  d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        Edit</small>
                                </div>
                            </div>
                        </div>
                    </li>


                    {/* data of the table */}

                    <li className="list-group-item ">
                        <div href="/member" className='text-decoration-none text-black'>
                            <div className='row '>
                                <div className='border p-3 col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    PO-2023-2024-000014</small>
                                </div>

                                <div className='border p-3 col-1 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    ID:MT005</small>
                                </div>
                                <div className=' border p-3 col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    06 Feb 2024, 4;05 PM</small>
                                </div>
                                <div className='border p-3 col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    Mr. XYZ Kumar</small>
                                </div>
                                <div className='border p-3 col-1 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    Septal Traders</small>
                                </div>
                                <div className='border p-3 col-1 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    Steel Bar 12 mm</small>
                                </div>
                                <div className='border p-3 col-1   text-center  d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    10 Feb 2024, 4;05 PM</small>
                                </div>
                                <div className='border p-3 col-1   text-center  d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    10 Feb 2024, 4;05 PM</small>
                                </div>
                                <div className='border p-3 col-1   text-center  d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        <i className='bi bi-pencil'></i></small>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item ">
                        <div href="/member" className='text-decoration-none text-black'>
                            <div className='row '>
                                <div className='border p-3 col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    PO-2023-2024-000014</small>
                                </div>

                                <div className='border p-3 col-1 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    ID:MT005</small>
                                </div>
                                <div className=' border p-3 col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    06 Feb 2024, 4;05 PM</small>
                                </div>
                                <div className='border p-3 col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    Mr. XYZ Kumar</small>
                                </div>
                                <div className='border p-3 col-1 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    Septal Traders</small>
                                </div>
                                <div className='border p-3 col-1 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    Steel Bar 12 mm</small>
                                </div>
                                <div className='border p-3 col-1   text-center  d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    10 Feb 2024, 4;05 PM</small>
                                </div>
                                <div className='border p-3 col-1   text-center  d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    10 Feb 2024, 4;05 PM</small>
                                </div>
                                <div className='border p-3 col-1   text-center  d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        <i className='bi bi-pencil'></i></small>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item ">
                        <div href="/member" className='text-decoration-none text-black'>
                            <div className='row '>
                                <div className='border p-3 col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    PO-2023-2024-000014</small>
                                </div>

                                <div className='border p-3 col-1 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    ID:MT005</small>
                                </div>
                                <div className=' border p-3 col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    06 Feb 2024, 4;05 PM</small>
                                </div>
                                <div className='border p-3 col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    Mr. XYZ Kumar</small>
                                </div>
                                <div className='border p-3 col-1 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    Septal Traders</small>
                                </div>
                                <div className='border p-3 col-1 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    Steel Bar 12 mm</small>
                                </div>
                                <div className='border p-3 col-1   text-center  d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    10 Feb 2024, 4;05 PM</small>
                                </div>
                                <div className='border p-3 col-1   text-center  d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                    10 Feb 2024, 4;05 PM</small>
                                </div>
                                <div className='border p-3 col-1   text-center  d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        <i className='bi bi-pencil'></i></small>
                                </div>
                            </div>
                        </div>
                    </li>



                </ul>
            </div >

        </MaterialLayout>
    )
}

export default PurchaseOrder