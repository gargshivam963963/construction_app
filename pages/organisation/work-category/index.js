import AddCategory from "@/components/utils/Modal/AddCategory";
import Loader from "@/layouts/loader/Loader";
import { fetchWorkCategory } from "@/store/organization-profile/work-category";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const WorkCategory = () => {
  const [showModal, setShowModal] = useState(false);

  const { workCategoryData, status } = useSelector((state) => state?.workSlice);
  const dispatch = useDispatch();

  const handleClick = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(fetchWorkCategory());
  }, []);

  return (
    <div>
      <div className="row ">
        <div className="text-end">
          <button
            onClick={() => handleClick()}
            className="btn bg-btn-bg text-white new-site-btn"
            style={{ boxShadow: "2px 2px 13px #8CBCD9" }}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            +Add New
          </button>
        </div>
      </div>
      <div className="row p-0">
        <div className="col p-0">
          <ul className="mt-4 list-group shadow-sm  m-auto small">
            <li className="list-group-item p-3 text-white fw-bolder bg-blue">
              <div className="row d-flex justify-content-start">
                <div className="col-3">S.No.</div>
                <div className="col-4">Category Name</div>
              </div>
            </li>

            {workCategoryData && workCategoryData?.workCategories.length > 0 ? workCategoryData?.workCategories.map((item, index) => {
              return <li className="list-group-item" key={item?._id}>
                <div href="/member" className="text-decoration-none text-black">
                  <div className="row py-2 border-bottom">
                    <div className="col-3 d-flex justify-content-start align-items-center ">
                      <small>
                        <span className="fw-bold fs-6 text-blue">{index + 1}</span>
                      </small>
                    </div>
                    <div className="col-4 d-flex justify-content-start align-items-center ">
                      <small>
                        <span className="fw-bold fs-6 text-blue">
                          {item?.name}
                        </span>
                      </small>
                    </div>
                  </div>
                </div>
              </li>
            })
              : status === "loading" ?
                <div className="d-flex justify-content-center align-items-center fw-bold" style={{ height: "50vh" }}>
                  <Loader />
                </div>
                :
                <div className="d-flex justify-content-center align-items-center fw-bold" style={{ height: "50vh" }}>
                  No Work Category Added
                </div>
            }
          </ul>
        </div>
      </div>

      <AddCategory showModal={showModal} closeModal={closeModal} status={status} />
    </div>
  );
};

export default WorkCategory;