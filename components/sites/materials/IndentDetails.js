import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';
import { parseCookies } from 'nookies';
import Link from 'next/link';
const IndentDetails = () => {

    const {siteId} = parseCookies()
    const toast = useRef(null);
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef(null);

    const onTemplateSelect = (e) => {
        let _totalSize = totalSize;
        let files = e.files;

        Object.keys(files).forEach((key) => {
            _totalSize += files[key].size || 0;
        });

        setTotalSize(_totalSize);
    };

    const onTemplateUpload = (e) => {
        let _totalSize = 0;

        e.files.forEach((file) => {
            _totalSize += file.size || 0;
        });

        setTotalSize(_totalSize);
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const onTemplateRemove = (file, callback) => {
        setTotalSize(totalSize - file.size);
        callback();
    };

    const onTemplateClear = () => {
        setTotalSize(0);
    };

    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize / 10000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                <div>
                    {chooseButton}
                    {uploadButton}
                    {cancelButton}
                </div>
                <div className="d-flex align-items-center gap-3 ml-auto">
                    <span>{formatedValue} / 1 MB</span>
                    <ProgressBar value={value} showValue={false} style={{ width: '10rem', height: '12px' }}></ProgressBar>
                </div>
            </div>
        );
    };

    const itemTemplate = (file, props) => {
        return (
            <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex justify-content-center gap-5" style={{ width: '40%' }}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="d-flex flex-column justify-content-start ml-3">
                        {file.name}
                        <small >{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <div className='border border-danger rounded-circle  '>
                    <Button type="button" icon="pi pi-times" className="p-button-outlined rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
                </div>
            </div>
        );
    };

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <div className='w-50 m-auto text-center'>
                    <i className="pi pi-image mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                    <br />
                    <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
                        Drag and Drop Image Here
                    </span>
                </div>
            </div>
        );
    };

    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined ' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };

    return (
        <div className='col p-0 overflow-scroll'>


            <div className='row-sm'>
                <div className='bg-light-gray p-2'>
                    <span className='text-blue fw-bold '>Created Indent Details</span>
                </div>
                <ul className=" p-0 text-decoration-none list-style-none w-100  shadow-sm  m-auto small">
                    <li className="list-group-item list-group-item  fw-bold bg-gray text-black">
                        <div href="/member" className='text-decoration-none text-black'>
                            <div className='row-sm d-flex bg-blue text-white'>
                                <div className='border border-gray py-3 col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        Indent ID</small>
                                </div>

                                <div className='border  col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        Request Date and Time</small>
                                </div>
                                <div className=' border col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        Created  By</small>
                                </div>
                                <div className='border  col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        Item </small>
                                </div>
                                <div className='border  col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        Total Estimated Quantity </small>
                                </div>
                                <div className='border  col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        Expected  Delivery Date</small>
                                </div>

                            </div>
                        </div>
                    </li>


                    {/* data of the table */}

                    <li className="list-group-item ">
                        <div href="/member" className='text-decoration-none text-black'>
                            <div className='row-sm d-flex'>
                                <div className='border p-3 col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        ID:MT004</small>
                                </div>

                                <div className='border p-3 col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        06 Feb 2024, 4;05 PM</small>
                                </div>
                                <div className=' border p-3 col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        Mr. XYZ Kumar</small>
                                </div>
                                <div className='border p-3 col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        Steel Bar 12 mm</small>
                                </div>
                                <div className='border p-3 col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        10.00 nos</small>
                                </div>
                                <div className='border p-3 col-2 d-flex align-items-center px-2 m-0 gap-3 ' >
                                    <small className='w-100 text-center'>
                                        00/00/00</small>
                                </div>

                            </div>
                        </div>
                    </li>








                </ul>


                <div className='d-flex mt-3 p-3'>

                    <div className='col-2  border p-2 text-center border-2'>
                        <small className=' fw-bold '>Indent Status</small>
                    </div>
                    <div className='col-2  border p-2 text-center border-2'>
                        <small className=' fw-bold  text-success'>Approved Status</small>
                    </div>
                    <div className='col-2  border p-2 text-center border-2'>
                        <small className=' fw-bold  text-danger'>Rejected</small>
                    </div>
                </div>
            </div >


            <div className='row-sm mt-4'>
                <div className='row-sm p-2 bg-light-gray'>
                    <small className='fw-bold'>Purchase Order</small>
                </div>
                <div className='d-flex mt-3 p-3'>
                    <div className='col-4 border rounded'>
                        <div className='bg-blue text-white rounded-top p-2'>
                            <small>Purchase order Details</small>
                        </div>
                        <div className='p-2'>
                            <small>Not Created Yet</small>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='d-flex p-2'>

                            <div className='col-4  border p-2 text-center border-2'>
                                <small className=' fw-bold '>Indent Status</small>
                            </div>
                            <div className='col-4  border p-2 text-center border-2'>
                                <small className=' fw-bold  text-success'>Approved Status</small>
                            </div>
                            <div className='col-4  border p-2 text-center border-2'>
                                <small className=' fw-bold  text-danger'>Rejected</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 d-flex justify-content-center align-items-start mt-2 '>


                        <Link href={`/sites/material/indent/${1}`}>
                            <button className='border border-info border-2 bg-white text-info rounded fw-bold shadow-lg  shadow-info px-2'>CREATE PO</button>
                        </Link>
                    </div>
                </div>

            </div>
            <div className='row-sm mt-4'>
                <div className='row-sm p-2 bg-light-gray'>
                    <small className='fw-bold'>Delivery Daily status </small>
                </div>
                <div className='row-sm p-3'>
                    <div className='col border rounded'>
                        <div className='bg-blue text-white rounded-top p-2'>
                            <ul className='d-flex justify-content-between text-decoration-none'>

                                <li>Delivery Address</li>
                                <li className='text-decoration-none'> Delivery value</li>
                                <li>Purchase order Details</li>
                            </ul>
                        </div>
                        <div className='p-2'>
                            <small>Not Created Yet</small>
                        </div>
                    </div>
                </div>
                <div className='d-flex mt-3 p-3'>

                    <div className='col-5'>
                        <div className='d-flex p-2'>

                            <div className='col-4  border p-2 text-center border-2'>
                                <small className=' fw-bold '>Delivery Status</small>
                            </div>
                            <div className='col-4  border p-2 text-center border-2'>
                                <small className=' fw-bold  text-success'> Delivered</small>
                            </div>
                            <div className='col-4  border p-2 text-center border-2'>
                                <small className=' fw-bold  text-dark-gray'>Not Delivery</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-3  '>

                    </div>
                </div>

            </div>
            <div className='row-sm p-3'>

                <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
                <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
                <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

                <FileUpload ref={fileUploadRef} name="demo[]" url="/api/upload" multiple accept="image/*" maxFileSize={1000000}
                    onUpload={onTemplateUpload} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
                    headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                    chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />


            </div>
        </div >

    )
}

export default IndentDetails