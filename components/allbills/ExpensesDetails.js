import React from 'react'

const ExpensesDetails = () => {
    return (
        <div className='col p-0'>
            <ul className=" list-group shadow-sm m-auto ">
                <li className="list-group-item p-3  fw-bolder bg-light-blue" >
                    <div className='row'>
                        <div className='col text-black'>Administrative</div></div>
                </li>
                <li className="list-group-item p-3 text-white fw-bolder bg-blue" >
                    <div className='row'>
                        <div className='col'>S. No.</div>
                        <div className='col'> Expense Title</div>
                        <div className='col'>Price</div>
                        <div className='col'>Quality</div>
                        <div className='col'> Billing Date</div>
                        <div className='col'>Total Amount</div>
                    </div>
                </li>

                <>
                    <li className="list-group-item h-100vh shadow-none border-none border-bottom-0">
                        <div  className='text-decoration-none text-black' >
                            <div className='row gap-5 fw-bold border-bottom p-2'>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 border-2 border-right' >
                                    01
                                </div>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 ' > Title</div>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 ' > Printer</div>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 ' > 120000</div>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 ' > 02</div>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 ' > 02</div>
                             </div>
                            <div className='row gap-5 fw-bold border-bottom p-2'>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 border-2 border-right' >
                                    01
                                </div>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 ' > Title</div>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 ' > Printer</div>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 ' > 120000</div>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 ' > 02</div>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 ' > 02</div>
                             </div>
                            <div className='row gap-5 fw-bold border-bottom p-2'>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 border-2 border-right' >
                                    01
                                </div>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 ' > Title</div>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 ' > Printer</div>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 ' > 120000</div>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 ' > 02</div>
                                <div className='col d-flex align-items-center px-2 m-0 gap-3 ' > 02</div>
                             </div>
                        </div>
                    </li>
                    
                </>

            </ul>
        </div>
    )
}

export default ExpensesDetails