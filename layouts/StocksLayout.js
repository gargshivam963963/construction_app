import Link from 'next/link'
import { parseCookies } from 'nookies'
import React from 'react'

const StocksLayout = ({ children, current }) => {
    const {siteId}  = parseCookies()
        return (
        <div>
            <div>
                <div>
                    <ul className="nav nav-tabs mb-4 d-flex justify-content-between" id="myTab" role="tablist">
                        <div className='d-flex'>
                            <Link href={`/stock/bom`} className="nav-item text-decoration-none" role="presentation">
                                <button className={`nav-link ${current == "bom" ? "active" : ""}`} id="home-tab" data-bs-toggle="tab" data-bs-target="#inventary-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">BOM</button>
                            </Link>
                            <Link href={`/stock/site-transfer`} className="nav-item text-decoration-none" role="presentation">
                                <button className={`nav-link ${current == "site-transfer" ? "active" : ""}`} id="profile-tab" data-bs-toggle="tab" data-bs-target="#indent-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Site Transfer </button>
                            </Link>
                            <Link href={`/stock/material-issue`} className="nav-item text-decoration-none" role="presentation">
                                <button className={`nav-link ${current == "material" ? "active" : ""}`} id="profile-tab" data-bs-toggle="tab" data-bs-target="#purchase-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Material Issue </button>
                            </Link>
                            <Link href={`/stock/grn`} className="nav-item text-decoration-none" role="presentation">
                                <button className={`nav-link ${current == "grn" ? "active" : ""}`} id="profile-tab" data-bs-toggle="tab" data-bs-target="#grn-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">GRN </button>
                            </Link>
                            <Link href={`/stock/boq`} className="nav-item text-decoration-none" role="presentation">
                                <button className={`nav-link ${current == "boq" ? "active" : ""}`} id="profile-tab" data-bs-toggle="tab" data-bs-target="#grn-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">BOQ </button>
                            </Link>
                        </div>
                    </ul>
                </div>
                <div>
                    {children}
                </div>
            </div></div>
    )
}

export default StocksLayout