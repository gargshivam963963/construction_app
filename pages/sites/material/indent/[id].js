import Link from 'next/link'
import { parseCookies } from 'nookies'
import React from 'react'

const Indd = () => {
    const {siteId} = parseCookies()
  return (
    <div>
        <div className='row bg-light-blue p-2'>
           
                <span className='fw-bolder'> <Link href={`/sites/material/indent?siteId=${siteId}`}><i className='bi bi-arrow-left'></i></Link> Create Purchase Order</span>
        </div>

        <div className='row mt-4'>
                <div className=' bg-gray p-2'>
                        <small className='fw-bolder'>Terms and Conditions <span>Optional</span></small>
                </div>
                <div className='col-4 mt-5 d-flex gap-3'>
                    <input 
                    className='form-control'
                    type='textarea'
                    placeholder="Enter terms & Conditions"
                    />
                    <small className='text-info fw-bold'>+Add</small>
                   
                </div>
        </div>
        <div className='row mt-5'>
                <div className=' bg-gray p-2'>
                        <small className='fw-bolder'>Attach File <span>Optional</span></small>
                </div>
                <div className='col-4 mt-5 d-flex gap-3'>
                    <input 
                    className='form-control'
                    type='file'
                    placeholder="Enter terms & Conditions"
                    />
                   
                </div>
        </div>
        <hr/>
        <div className='row d-flex mt-5 justify-content-between'>
            <div className='col-1'>
                    <button className='fw-bold text-dark-gray p-2 border-2 rounded shadow border bg-white'>CANCEL</button>
            </div>
            <div className='col-3 d-flex gap-3 '>
                    <button className='bg-white text-info border  fw-bold border-info rounded'>SAVE DRAFT</button>
                    <button className='bg-btn-bg text-white fw-bold rounded'>CREATE PO</button> 
            </div>

        </div>
    </div>
  )
}

export default Indd