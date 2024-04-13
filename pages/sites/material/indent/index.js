import React from "react";
import ExpensesDetails from "@/components/allbills/ExpensesDetails";
import ViewComptedTask from "@/components/dashboard/sites/completed-Task/ViewComptedTask";
import Image from "next/image";
import Link from "next/link";
import IndentDetails from "../../../../components/sites/materials/IndentDetails";
import { parseCookies } from "nookies";
import MaterialLayout from "@/layouts/MaterialLayout";
import IndentCreateModal from "@/components/utils/Modal/material/IndentCreateModal";

const Indent = () => {
  const { siteId } = parseCookies();
  return (
    <MaterialLayout current="indent">
      <div className="d-flex justify-content-between">
        <div>
          <span className="fw-bold">All Created Indent List</span>
        </div>
        <div>
          <button type="button" class="btn bg-btn-bg text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
          + Create Indent

          </button>
        </div>
      </div>
      <div className="row border-top mt-4 border-bottom-0 h-50 overflow-hidden">
        <div className=" col-lg-3 dz-scroll height500 border border-right border-2 border-solid border-grey ">
          <div className="nav flex-column nav-pills mb-3 mtngtabs mting">
            <Link
              href="#m1-tab"
              data-bs-toggle="pill"
              className={`text-decoration-none text-black py-3 border-bottom `}
            >
              <div className="d-flex  justify-content-between">
                <small className="fw-bold py-1">ID:MT007 </small>
                <small className="  px-4 py-1 ">
                  <i className="bi bi-arrow-right"></i>
                </small>
              </div>
            </Link>
          </div>
        </div>

        {/* <ViewComptedTask /> */}

        <IndentDetails />
      </div>
      <IndentCreateModal />
    </MaterialLayout>
  );
};

export default Indent;
