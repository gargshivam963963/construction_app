import React, { useEffect, useLayoutEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import AddFinancialDetails from "./AddVendorFinancial";
import axios from "axios";
import { parseCookies } from "nookies";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

const AddVendorUploadProof = ({ rootvendorId }) => {
  const initialvalues = {
    returnPolicy: "",
    paymentTerms: "",
  };

  const { token, currentOrganizationId } = parseCookies();
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    const data = { ...values, organization: currentOrganizationId };
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/vendor/addtermsandcondition?organization=${currentOrganizationId}&rootVendorDetails=${rootvendorId}`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(res, "response");
      if (res?.data?.success) {
        dispatch(fetchVendordata());

        toast.success("Terms and Condition Details Succesfully Added.", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ToastContainer />
      {/* <div
        className="offcanvas offcanvas-end w-50 bg-white"
        tabIndex="-1"
        id="offAddVendorUploadProof"
        aria-labelledby="offcanvasRightLabel"
        data-bs-toggle="offcanvas"
        data-bs-target="#offfinancialcanvasRight"
        aria-controls="offfinancialcanvasRight"
      > */}
      {/* <div className="offcanvas-header bg-light-blue mb-0">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Upload Proof
          </h5>

          <button
            type="button"
            className="btn-close me-0"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-3">
          <Formik
            enableReinitialize
            // initialValues={initialValues}
            // validationSchema={createSiteValidation}
            onSubmit={onSubmit}
          >
            {({
              values,
              setFieldValue,
              errors,
              handleBlur,
              handleChange,
              dirty,
              isValid,
              resetForm,
              isSubmitting,
            }) => {
              return (
                <Form className=" d-flex flex-column gap-4 m-auto p-2">
                  <div className="form-group ">
                    <div className="text-start w-100 mb-2">
                      <label htmlFor="exampleInputPassword1 ">GST</label>
                      <span className="text-danger">*</span>
                    </div>
                    <Field
                      type="file"
                      name="name"
                      className="form-control "
                      placeholder="Enter Vendor Name"
                      // onBlur={handleBlur}
                    />

                    <ErrorMessage
                      name="name"
                      render={(msg) => (
                        <small style={{ color: "red" }}>{msg}</small>
                      )}
                    />
                  </div>

                  <div className="form-group">
                    <div className="text-start w-100 mb-2">
                      <label htmlFor="exampleInputPassword1">PAN</label>
                      <span className="text-danger">*</span>
                    </div>
                    <Field
                      type="file"
                      name="organizationName "
                      className="form-control "
                      placeholder="Enter Business Address"
                      // value={currentOrganizationId}
                    />

                    <ErrorMessage
                      name="organizationName"
                      render={(msg) => (
                        <small style={{ color: "red" }}>{msg}</small>
                      )}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1 ">
                      Bank Details<span className="text-danger">*</span>
                    </label>
                    <br />
                    <Field
                      type="file"
                      name="startDate"
                      id="inputdate"
                      className="form-control  "
                      placeholder="Enter Vendor Label"
                      // min={minEndDate}
                    />

                    <ErrorMessage
                      name="startDate"
                      render={(msg) => (
                        <small style={{ color: "red" }}>{msg}</small>
                      )}
                    />
                  </div>

                  <div className="text-start d-flex w-50 m-auto mt-4">
                  <button
                      
                      className="text-white m-auto w-100 bg-btn-bg auth_btn"
                      data-bs-target="#termsandcondition"
                      data-bs-toggle="offcanvas"
                      aria-controls="offfinancialcanvasRight"
                    >
                      Skip
                    </button>
                    <button
                      type="submit"
                      className="text-white m-auto w-100 bg-btn-bg auth_btn"
                      data-bs-target="#termsandcondition"
                      data-bs-toggle="offcanvas"
                      aria-controls="offfinancialcanvasRight"
                    >
                      Terms and Condiion
                    </button>
                    <br />
                  </div>
                </Form>
              );
            }}
          </Formik>
          <div></div>
        </div> */}
      {/* </div> */}

      {/* terms and condition */}

      <div
        className="offcanvas offcanvas-end w-50 bg-white"
        tabIndex="-1"
        id="termsandcondition"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header bg-light-blue mb-0">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Terms and Condition
          </h5>

          <button
            type="button"
            className="btn-close me-0"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-3">
          <Formik
            enableReinitialize
            initialValues={initialvalues}
            // validationSchema={createSiteValidation}
            onSubmit={onSubmit}
          >
            {({
              values,
              setFieldValue,
              errors,
              handleBlur,
              handleChange,
              dirty,
              isValid,
              resetForm,
              isSubmitting,
            }) => {
              return (
                <Form className=" d-flex flex-column gap-4 m-auto p-2">
                  <div className="form-group ">
                    <div className="text-start w-100 mb-2">
                      <label htmlFor="exampleInputPassword1 ">
                        Return and Cancellation Policy
                      </label>
                      <span className="text-danger">*</span>
                    </div>
                    <Field
                      type="text"
                      name="returnPolicy"
                      className="form-control "
                      placeholder="Enter Return Policy"
                      // onBlur={handleBlur}
                    />

                    <ErrorMessage
                      name="returnPolicy"
                      render={(msg) => (
                        <small style={{ color: "red" }}>{msg}</small>
                      )}
                    />
                  </div>

                  <div className="form-group">
                    <div className="text-start w-100 mb-2">
                      <label htmlFor="exampleInputPassword1">
                        Payment Terms
                      </label>
                      <span className="text-danger">*</span>
                    </div>
                    <Field
                      type="text"
                      name="paymentTerms"
                      className="form-control "
                      placeholder="Enter Payment Terms "
                      // value={currentOrganizationId}
                    />

                    <ErrorMessage
                      name="paymentTerms"
                      render={(msg) => (
                        <small style={{ color: "red" }}>{msg}</small>
                      )}
                    />
                  </div>

                  <div className="text-start w-100 m-auto mt-4 d-flex justify-content-between">
                    
                    <button
                      type="button"
                      className="text-black m-auto w-25  border border auth_btn me-0"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >Skip</button>
                    <button
                      type="submit"
                      className="text-white m-auto w-25 bg-btn-bg auth_btn"
                    >
                      Submit
                    </button>
                    <br />
                  </div>
                </Form>
              );
            }}
          </Formik>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AddVendorUploadProof;
