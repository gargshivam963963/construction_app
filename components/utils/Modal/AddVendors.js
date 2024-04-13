import React, { useEffect, useLayoutEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import { parseCookies } from "nookies";
import { ToastContainer, toast } from "react-toastify";
import { vendorValidation } from "@/schemas/vendor/vendorValidation";
import AddFinancialDetails from "./AddVendorFinancial";

const AddVendors = () => {
  const [addFinancialDetailsstatus, setaddFinancialDetailsstatus] = useState(false);
  const [personalDetails, setpersonalDetails] = useState(true);
  const [vendorId, setvendorId] = useState(null);

  const { token, currentOrganizationId } = parseCookies();

  const initialValues = {
    vendorName: "",
    address: "",
    vendorLevel: "",
    vendorType: "",
    contactPerson: "",
    designation: "",
    contactNo: "",
    vendorEmail: "",
  };
  const onSubmit = async (values,e) => {
    
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/vendor/adddetails?organization=${currentOrganizationId}`,
        values,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res?.data?.success) {
        setaddFinancialDetailsstatus(true)
        console.log(res?.data?.data,"ppppppppppppppppppppp")
        setvendorId(res?.data?.data?.rootVendorDetails?._id)
        toast.success("Vendor Details Succesfully Added.", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  // console.log(addFinancialDetailsstatus,"addFinancialDetailsstatus")
  return (
    <div>
     { !addFinancialDetailsstatus && <div
        className="offcanvas offcanvas-end w-50 bg-white"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        data-bs-backdrop="static"
      >
        <div className="offcanvas-header bg-light-blue mb-0">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Add Vendor
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
            initialValues={initialValues}
            validationSchema={vendorValidation}
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
                        Vendor Name
                      </label>
                      <span className="text-danger">*</span>
                    </div>
                    <Field
                      type="text"
                      name="vendorName"
                      className="form-control "
                      placeholder="Enter Vendor Name"
                      // onBlur={handleBlur}
                    />

                    <ErrorMessage
                      name="vendorName"
                      render={(msg) => (
                        <small style={{ color: "red" }}>{msg}</small>
                      )}
                    />
                  </div>

                  <div className="form-group">
                    <div className="text-start w-100 mb-2">
                      <label htmlFor="exampleInputPassword1">
                        Business Address
                      </label>
                      <span className="text-danger">*</span>
                    </div>
                    <Field
                      type="text"
                      name="address"
                      className="form-control "
                      placeholder="Enter Business Address"
                      // value={currentOrganizationId}
                    />

                    <ErrorMessage
                      name="address"
                      render={(msg) => (
                        <small style={{ color: "red" }}>{msg}</small>
                      )}
                    />
                  </div>
                  <div className="row">
                    <div className="form-group col-6">
                      <label htmlFor="exampleInputPassword1 ">
                        Vendor Level
                      </label>
                      <br />
                      <Field
                        as="select"
                        name="vendorLevel"
                        id="inputdate"
                        className={`form-control form-select ${
                          errors.vendorType && touched.vendorType
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="Enter vendor Type"
                        // min={endDateState}
                      >
                        <option value="None">Select vendor type</option>
                        <option value="Trader">Trader </option>
                        <option value="Dealor">Dealor </option>
                        <option value="Distributor">Distributor </option>
                        <option value="Brand Manufacture">Brand Manufacture </option>
                        <option value="Manufacture">Contract Manufacture </option>
                      </Field>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="exampleInputPassword1 ">
                        Vendor Type
                      </label>
                      <br />
                      <Field
                        as="select"
                        name="vendorType"
                        id="inputdate"
                        className={`form-control form-select ${
                          errors.vendorType && touched.vendorType
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="Enter vendor Type"
                        // min={endDateState}
                      >
                        <option value="None">Select vendor type</option>
                        <option value="Agency">Agency </option>
                        <option value="Labour">Labour </option>
                        <option value="Material">Material </option>
                        <option value="Professional">Professional </option>
                      </Field>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-6">
                      <label htmlFor="exampleInputPassword1 ">
                        Contact Person Name
                        <span className="text-danger">*</span>
                      </label>
                      <br />
                      <Field
                        type="text"
                        name="contactPerson"
                        className="form-control  "
                        placeholder="Enter Contact Person"
                      />

                      <ErrorMessage
                        name="contactPerson"
                        render={(msg) => (
                          <small style={{ color: "red" }}>{msg}</small>
                        )}
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="exampleInputPassword1 ">
                        Designation
                      </label>
                      <br />
                      <Field
                        type="text"
                        name="designation"
                        
                        className="form-control  "
                        placeholder="Enter Person Designation"
                        // min={minEndDate}
                      />

                      <ErrorMessage
                        name="designation"
                        render={(msg) => (
                          <small style={{ color: "red" }}>{msg}</small>
                        )}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-6">
                      <label htmlFor="exampleInputPassword1 ">
                        Contact No.<span className="text-danger">*</span>
                      </label>
                      <br />
                      <Field
                        type="number"
                        name="contactNo"
                        id="inputdate"
                        className="form-control  "
                        placeholder="Enter Contact No."
                      />

                      <ErrorMessage
                        name="contactNo"
                        render={(msg) => (
                          <small style={{ color: "red" }}>{msg}</small>
                        )}
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="exampleInputPassword1 ">
                        Email Id<span className="text-danger">*</span>
                      </label>
                      <br />
                      <Field
                        type="email"
                        name="vendorEmail"
                        className="form-control"
                        placeholder="email"
                      />

                      <ErrorMessage
                        name="vendorEmail"
                        render={(msg) => (
                          <small style={{ color: "red" }}>{msg}</small>
                        )}
                      />
                    </div>
                  </div>

                  <div className="text-start w-50 m-auto mt-4">
                    <button
                      type="submit"
                      className="text-white m-auto w-100 bg-btn-bg auth_btn"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offfinancialcanvasRight"
                      aria-controls="offfinancialcanvasRight"
                      disabled={
                        !values.contactNo || !values.vendorName || !values.address || !values.contactPerson || !values.vendorEmail 
                      }
                    >
                      {isSubmitting ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm"
                            aria-hidden="true"
                          ></span>
                          <span className="ms-2" role="status">
                            Loading...
                          </span>
                        </>
                      ) : (
                        "Add"
                      )}
                    </button>
                    <br />
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>}
     <AddFinancialDetails rootvendorId={vendorId}/>
    </div>
  );
};

export default AddVendors;
