import axios from 'axios';
import nookies, { parseCookies } from "nookies";

const PurchaseOrder = ({ purchaseOrderSettings }) => {

    return (
        <>
            <div className='row d-flex justify-content-between'>
                <div className='p-2  bg-gray fw-bold'>
                    <span>Organization Address & GSTIN</span>
                </div>
                <div className='col-4 mt-3'>
                    <div>
                        <small className='fw-bold text-black'> Purchase Order Number</small>
                    </div>
                    <div>
                        <small className='fw-bold text-dark-gray'>(Auto Generated PO Number)</small>
                    </div>
                </div>
                <div className='col-2 mt-3'>
                    <button className='px-3 edit_btn'> Edit</button>
                </div>

                <div className='row'>
                    <div className='col-2 mt-3'>
                        <div>
                            <small className='fw-bold text-dark-gray'>PreFix</small>
                            <input className='form-control' disabled placeholder='PO-2024-25' value={purchaseOrderSettings?.prefix} />
                        </div>

                    </div>
                    <div className='col-2 mt-3'>
                        <div>
                            <small className='fw-bold text-dark-gray'>Next Serial Number</small>
                            <input className='form-control p-2' disabled placeholder='000012' />
                        </div>

                    </div>
                    <div className='col-2 mt-3 d-flex align-items-end'>
                        <div>
                            <small className='fw-bold text-dark-gray'>Eg: PO-2023-2024--000012</small>
                        </div>

                    </div>

                </div>
            </div>


            <div className='row d-flex justify-content-between mt-5'>
                <div className='p-2  bg-gray fw-bold'>
                    <span>Organization Address & GSTIN</span>
                </div>
                <div className='col-4 mt-3'>
                    <div>
                        <small className='fw-bold text-dark-gray'> Address Details</small>
                    </div>
                    <div>
                        <small className='fw-bold'>2B, SHANKER MARKET, CONNAUGHT PLACE, Central Delhi, Delhi, 110001</small>
                    </div>
                </div>
                <div className='col-2 mt-3'>
                    <button className='px-3'> Edit</button>
                </div>

                <div className='row'>
                    <div className='col-4 mt-3'>
                        <div>
                            <small className='fw-bold text-dark-gray'>GST IN</small>
                        </div>
                        <div>
                            <small className='fw-bold'>000000000000000</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row d-flex justify-content-between mt-5'>
                <div className='p-2  bg-gray fw-bold'>
                    <span>Terms & Conditions</span>
                </div>
                <div className='col-4 mt-3'>
                    <div>
                        <input className='form-control p-4 fw-bold text-dark-gray' disabled placeholder='Enter terms and condition' />
                    </div>

                </div>
                <div className='col-2 mt-3'>
                    <span className='px-3 fw-bold text-info'>+Add More </span>
                </div>

            </div>

        </>
    )
}

export default PurchaseOrder;

export async function getServerSideProps(context) {
    try {
        const { token, currentOrganizationId, siteId } = nookies.get(context);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/purchase-order/settings`, {
            headers: { Authorization: `Bearer ${token}` },
            params: {
                organization: currentOrganizationId,
                site: siteId,
            },
        });
        // Extract data from the response
        const purchaseOrderSettings = response?.data?.purchaseOrderSettings;

        // Return props object with data fetched from the server
        return {
            props: {
                purchaseOrderSettings: purchaseOrderSettings || null,
            },
        };
    } catch (error) {
        console.error('Error fetching site settings:', error.message);
        return {
            props: {
                siteSettingData: null, // or provide appropriate fallback data
            },
        };
    }
}