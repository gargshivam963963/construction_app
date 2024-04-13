import Image from "next/image";
import { useEffect, useState } from "react";
import CreateOrganisation from "@/components/utils/Modal/CreateOrganisaton";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { getAllmember } from "@/store/member/allmember";
import { parseCookies } from "nookies";
import {  toast } from "react-toastify";
import axios from "axios";


function SyncMember({ showModal, closeModal, siteId }) {
  const [createOrgModal, setCreateOrgModal] = useState(false);
  const [allmembers, setAllmembers] = useState([]);



  useEffect(() => {
    if (siteId) {
      const getMember = async () => {
        const { currentOrganizationId, token } = parseCookies();
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/site/not-members?site=${siteId}&organization=${currentOrganizationId}`,
            {

              headers: {
                "Authorization": `Bearer ${token}`
              }
            }
          )
          const userData = response?.data?.notSiteMembers;
          setAllmembers(userData)
        } catch (error) {
          toast.error(error, { position: "top-center" });
        }

      }
      getMember();
    }
  }, [siteId])
  let members = []
  const handleChange = (ids, checked) => {
    if (checked) {

      members.push({ _id: ids })
    }
    else {
      members.pop({ _id: ids })
    }

  }




  const addMember = async () => {
    const { currentOrganizationId, token } = parseCookies();
    try {
      const response = await axios.post(
        `${config.API_URL}/site/member/invite?site=${siteId}&organization=${currentOrganizationId}`,
        { members },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const userData = response?.payload;
      if (response.ok) {
        toast.success(userData?.message, { position: "top-center" });
      } else {
        toast.error(response?.payload?.error, { position: "top-center" });
      }
    } catch (error) {
      toast.error(error, { position: "top-center" });
    }
  };
  return (
    <div>
      {showModal && (
        <div className="modal-backdrop fade-in-animation ">
          <div className="modal-dialog slide-in-from-bottom h-75">
            <div className="modal-content fade-in-animation p-0 h-none justify-content-start">
              <div className="w-100 h-100">
                <div className="d-flex justify-content-between w-100 border-bottom modal-header bg-light-blue rounded-top">
                  <div className="fs-5 fw-bolder text-blue p-3 ">
                    Add Member
                  </div>
                  <span
                    onClick={closeModal}
                    className="cursor-pointer text-black mr-4 p-3"
                  >
                    x
                  </span>
                </div>
                <div className="overflow-y-scroll h-75 ">
                  {allmembers && allmembers?.length > 0 ? (
                    allmembers &&
                    allmembers?.map((item, index) => {
                      const nameParts = item?.user?.name.split(" ");
                      const firstNameInitial = nameParts[0]
                        ? nameParts[0].charAt(0)
                        : "";
                      const lastNameInitial =
                        nameParts.length > 1
                          ? nameParts[nameParts.length - 1].charAt(0)
                          : "";
                      return (
                        <div
                          key={index}
                          className="w-100 modal-body text-info p-2"
                        >
                          <div className="form-check d-flex justify-content-between ">
                            <div className="d-flex gap-4 ">
                              <div className=" sync-box text-blue border fw-bolder bg-light-blue border-black border-3 rounded-pill p-2 w-50">
                                {firstNameInitial}
                              </div>
                              <div>
                                <label
                                  className="form-check-label text-black d-flex flex-column gap-1"
                                  for="flexCheckDisabled"
                                >
                                  <span className="">{item?.user?.name} </span>
                                  <span className="">
                                    {item?.user?.phone?.number}
                                  </span>
                                  <span className="">
                                    ({item?.permission?.name})
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div>
                              <input
                                className=" p-3"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                                onChange={(e) =>
                                  handleChange(item?._id, e.target.checked)
                                }
                              />
                            </div>
                          </div>
                          <hr />
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center d-flex align-items-center justify-content-center h-100">
                      <span>No Member found to Add </span>
                    </div>
                  )}
                </div>
                <div className="w-50 m-auto mt-2">
                  {allmembers && allmembers?.length > 0 && (
                    <button
                      type="submit"
                      className="text-white m-auto w-100 bg-btn-bg auth_btn"
                      onClick={() => addMember()}
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SyncMember;
