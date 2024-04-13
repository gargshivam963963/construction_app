import React from 'react'

const AddSiteBudget = ({ showModal, closeModal }) => {
    return (
        <div>

            {showModal &&
                <div className="modal-backdrop fade-in-animation  " data-bs-backdrop="true">
                    <div className="modal-dialog slide-in-from-bottom h-auto">
                        <div className="modal-content fade-in-animation p-0 h-none justify-content-start">
                            <div className="w-100 " >
                                <div className='d-flex justify-content-between w-100 border-bottom modal-header bg-light-blue rounded-top ' >
                                    <div className='fs-xxl text-blue p-3 '>Site Budget</div>
                                    <span onClick={closeModal} className='cursor-pointer text-black p-3'>X</span>
                                </div>

                                <div className='w-100 modal-body text-info'>

                                    <div className='p-4'> {/* <div className="text-end w-100 m-auto d-flex mt-5 "><button className="bg-info text-white rounded p-2 w-50 m-auto"> CREATE</button></div> */}
                                        <div>
                                            <label className='text-black'>Select Site</label>
                                            <input
                                                className='form-control'
                                            />
                                        </div>
                                        <div>
                                            <label className='text-black'> Site Budget</label>

                                            <input
                                                className='form-control '
                                            />
                                        </div>
                                        <div className='mt-6 w-50 m-auto'>
                                            <button type="submit"
                                                className="text-white m-auto w-100 bg-btn-bg auth_btn">Add Budget</button>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default AddSiteBudget