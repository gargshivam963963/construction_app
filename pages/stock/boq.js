import StocksLayout from '@/layouts/StocksLayout'
import React from 'react'

const boq = () => {
    return (
        <StocksLayout current="boq">
             <div className='row bg-light-blue d-flex justify-content-end'>
                <span className='text-blue fw-bold p-2'>BOQ (Bill Of Quantity)</span>

            </div>

        </StocksLayout>
    )
}

export default boq