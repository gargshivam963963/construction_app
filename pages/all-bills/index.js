import AddSiteBudget from '@/components/utils/Modal/AddSiteBudget'
import Link from 'next/link';
import React, { useState } from 'react'

const AllBills = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(true);
  };
  const closeOrgnisationModal = () => {
    setShowOffcanvas(false)

  }
  return (
    <div>

      <div className="row">
        <div className="col-12 text-end">
          <button className='btn bg-btn-bg text-white new-site-btn shadow-lg shadow-info' type="button" data-bs-toggle="offcanvas" data-bs-target="#editoffcanvas" aria-controls="offcanvasTop" onClick={handleToggleOffcanvas}>+ Site Budget</button>
        </div>
      </div>
      <div className="row">
        <div className='p-3'>
          <Link href={`/all-bills/${1}`} className='text-decoration-none text-black border-bottom'> 14,Aradhana Enclave-(Site-002)</Link>
        </div>
        <div className='p-3'>
          <Link href={`/all-bills/1`} className='text-decoration-none text-black border-bottom' >14,Project Name-(Site-001)</Link>
        </div>
      </div>
      <AddSiteBudget showModal={showOffcanvas} closeModal={closeOrgnisationModal} />
    </div>
  )
}

export default AllBills