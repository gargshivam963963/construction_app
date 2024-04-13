import BomMaterialCom from "@/components/utils/Modal/material/BomMaterialCom";

const BomComponent = ({ material }) => {

    return (
        <div className='col p-0 overflow-scroll' style={{ height: '70vh' }}>
            <ul className=" list-group shadow-sm m-auto ">
                <li className="list-group-item p-3   bg-light-blue" >
                    <div className='row d-flex justify-content-between align-items-center'>
                        <div className='col-5 fw-bolder text-blue'>{material?.materialName}</div>
                        <div className='col-5 text-end'>
                            <button type='button' className='btn text-blue text-end cursor-pointer' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <i className="bi bi-pencil-square mx-2"></i>
                                Edit
                            </button>
                        </div>
                    </div>
                </li>

                <BomMaterialCom initialData={material} />

                <div className='row-sm mt-5'>
                    <div className='col-11 m-auto border p-0 rounded'>
                        <div className='bg-blue w-100 rounded-top p-2'>
                            <small className='text-white' > Basic Details</small>
                        </div>

                        <div className='row gap-2 p-4 d-flex justify-content-between'>
                            <div className='col-5 mt-2'>
                                <span className='text-blue fw-bold'>Material ID</span><br />
                                <small className='text-black'>{material?.materialCode}</small>
                            </div>

                            <div className='col-5 mt-2'>
                                <span className='text-blue fw-bold'>Brand Name</span><br />
                                <small className='text-black'>{material?.brandName}</small>
                            </div>


                            <div className='col-5 mt-2'>
                                <small className='text-blue fw-bold'>UOM</small><br />
                                <small className='text-black'>{material?.uom}</small>
                            </div>

                            <div className='col-5 mt-2'>
                                <small className='text-blue fw-bold'>Unit Cost</small><br />
                                <small className='text-black'>₹ {""}{material?.unitCost}</small>
                            </div>

                            <div className='col-5 mt-2'>
                                <small className='text-blue fw-bold'> Description</small><br />
                                <small className='text-black'>{material?.description}</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row-sm mt-5'>
                    <div className='col-11 m-auto border p-0  rounded'>
                        <div className='bg-blue w-100 rounded-top p-2'>
                            <small className='text-white'>Specification</small>
                        </div>

                        <div className='row  p-4'>
                            <div className='col-4 my-2'>
                                <small className='text-blue fw-bold'>Dimensions</small><br />
                                <small>
                                    <div>
                                        Length: {material?.length?.length > 0 ? material?.length : null}
                                    </div>
                                </small>

                                <small>
                                    <div>
                                        Breadth:{material?.breadth}
                                    </div>
                                </small>

                                <small>
                                    <div>
                                        Height: {material?.height}
                                    </div>
                                </small>
                                {/* <small>
                                    {material?.length?.length > 0 ? <>{material?.length}*</> : material?.length}
                                    {material?.breadth?.length > 0 ? <>{material?.breadth}*</> : material?.breadth}
                                    {material?.height?.length > 0 ? <>{material?.height}*</> : material?.height}(In)
                                </small> */}
                            </div>

                            <div className='col-4 my-2'>
                                <small className='text-blue fw-bold'>Weight</small><br />
                                <small>{material?.weight?.length > 0 ? <>{material?.weight} Kg</> : material?.weight}</small>
                            </div>

                            <div className='col-4 my-2'>
                                <small className='text-blue fw-bold'>Color</small><br />
                                <small>{material?.color}</small>
                            </div>
                            <div className='col-4 my-2'>
                                <small className='text-blue fw-bold'>ISBN</small><br />
                                <small>{material?.isbn}</small>
                            </div>
                            <div className='col-4 my-2'>
                                <small className='text-blue fw-bold'>UPC</small><br />
                                <small>{material?.upc}</small>
                            </div>
                            <div className='col-4 my-2'>
                                <small className='text-blue fw-bold'>EAN</small><br />
                                <small>{material?.ean}</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row-sm mt-5'>
                    <div className='col-11 m-auto border p-0  rounded'>
                        <div className='bg-blue w-100 rounded-top p-2'>
                            <small className='text-white'>Financial Details</small>
                        </div>

                        <div className='row gap-2 p-4'>
                            <div className='col-5 mt-2'>
                                <small className=' fw-bold'>Tax Group</small><br />
                                <small>{material?.gst}</small>
                            </div>
                            <div className='col-5 mt-2'>
                                <small className=' fw-bold'>HSN</small><br />
                                <small>{material?.hsn}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </ul >
        </div >

    )
}

export default BomComponent