import React, { useEffect, useLayoutEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";

const Issues = () => {
    const onSubmit=()=>{

    }
    return (
        <div>
            <div
                className="offcanvas offcanvas-end  bg-white"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
                data-bs-backdrop="static"
                style={{ width: '35%' }}
            >



                <div className="offcanvas-body p-0">
                    <Formik
                        enableReinitialize
                        // initialValues={initialValues}
                        // validationSchema={createSiteValidation}
                        onSubmit={onSubmit}
                    >
                        {({
                            resetForm,
                            handleBlur,
                            handleChange,
                            isSubmitting,
                        }) => {

                            return (
                                <Form className=" d-flex flex-column">
                                    <div className="offcanvas-header bg-light-blue mb-0">
                                        <span className="offcanvas-title fw-bold text-blue" id="offcanvasRightLabel">
                                            Add Issues 1/2
                                        </span>

                                        <button
                                            type="button"
                                            className="btn-close me-0"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                        // onClick={resetForm}
                                        >
                                        </button>
                                    </div>

                                    <div className="d-flex gap-3 flex-column p-3">
                                        <div className="row">

                                            <div className="form-group col-6 ">
                                                <div className="text-start w-100 mb-2">
                                                    <label htmlFor="exampleInputPassword1 ">
                                                        Select  Project Site
                                                    </label>
                                                    <span className="text-danger">*</span>
                                                </div>
                                                <select
                                                    type="text"
                                                    name="name"
                                                    className="form-control  border-info  "
                                                    placeholder="Enter Site Name"
                                                // onBlur={handleBlur}
                                                >
                                                    <option>Material</option>
                                                    <option>Equipment</option>
                                                </select>

                                                <ErrorMessage
                                                    name="name"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>

                                            <div className="form-group col-6">
                                                <div className="text-start w-100 mb-2">
                                                    <label htmlFor="exampleInputPassword1">
                                                        Select Material Name
                                                    </label>
                                                    <span className="text-danger">*</span>
                                                </div>
                                                <Field
                                                    type="text"
                                                    name="organizationName "
                                                    className="form-control"
                                                    placeholder="Site Transfer Id"
                                                >

                                                </Field>

                                                <ErrorMessage
                                                    name="organizationName"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-6 text-start">
                                                <label htmlFor="exampleInputPassword1 ">
                                                    Select Task<span className="text-danger">*</span>
                                                </label>
                                                <br />
                                                <Field
                                                    type="text"
                                                    name="startDate"
                                                    id="inputdate"
                                                    className="form-control  border-info"
                                                    placeholder="Enter Title"

                                                // min={CreateDate()}
                                                />

                                                <ErrorMessage
                                                    name="startDate"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>
                                            <div className="form-group col-6 text-start">
                                                <label htmlFor="exampleInputPassword1 ">
                                                    Select Vendor<span className="text-danger">*</span>
                                                </label>
                                                <br />
                                                <select
                                                    type="text"
                                                    name="startDate"
                                                    id="inputdate"
                                                    className="form-control  border-info"
                                                    placeholder="Transfer From"

                                                // min={CreateDate()}
                                                >
                                                    <option>Select Site</option>
                                                    <option>Option 1</option>
                                                    <option>Option 1</option>
                                                    <option>Option 1</option>
                                                    <option>Option 1</option>
                                                </select>

                                                <ErrorMessage
                                                    name="startDate"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="form-group col-6 text-start">
                                                <label htmlFor="exampleInputPassword1 ">
                                                     Quantity<span className="text-danger">*</span>
                                                </label>
                                                <br />
                                                <Field
                                                    type="text"
                                                    name="startDate"
                                                    id="inputdate"
                                                    className="form-control  border-info"
                                                    placeholder="00.00"

                                                // min={CreateDate()}
                                                />

                                                <ErrorMessage
                                                    name="startDate"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>
                                            <div className="form-group col-6 text-start">
                                                <label htmlFor="exampleInputPassword1 ">
                                                    Raised Date<span className="text-danger">*</span>
                                                </label>
                                                <br />
                                                <Field
                                                    type="text"
                                                    name="startDate"
                                                    id="inputdate"
                                                    className="form-control  border-info"
                                                    placeholder="00.00"

                                                // min={CreateDate()}
                                                />

                                                <ErrorMessage
                                                    name="startDate"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="form-group col-6 text-start">
                                                <label htmlFor="exampleInputPassword1 ">
                                                    Created By<span className="text-danger">*</span>
                                                </label>
                                                <br />
                                                <Field
                                                    type="number"
                                                    name="startDate"
                                                    id="inputdate"
                                                    className="form-control  border-info"
                                                    placeholder="Sending By"

                                                // min={CreateDate()}
                                                />

                                                <ErrorMessage
                                                    name="startDate"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>
                                            <div className="form-group col-6 text-start">
                                                <label htmlFor="exampleInputPassword1 ">
                                                    Due Date<span className="text-danger">*</span>
                                                </label>
                                                <br />
                                                <Field
                                                    type="date"
                                                    name="startDate"
                                                    id="inputdate"
                                                    className="form-control  border-info"
                                                    placeholder="00.00"

                                                // min={CreateDate()}
                                                />

                                                <ErrorMessage
                                                    name="startDate"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="text-start p-3 mt-5">
                                        <button
                                            type="submit"
                                            className="text-white m-auto w-100 bg-info auth_btn"
                                            data-bs-toggle="offcanvas" data-bs-target="#descoffcanvasRight" aria-controls="offcanvasRight"
                                        >
                                            Next

                                        </button>
                                        <br />
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>



            <div
                className="offcanvas offcanvas-end  bg-white"
                tabIndex="-1"
                id="descoffcanvasRight"
                aria-labelledby="offcanvasRightLabel"
                data-bs-backdrop="static"
                style={{ width: '35%' }}
            >



                <div className="offcanvas-body p-0">
                    <Formik
                        enableReinitialize
                        // initialValues={initialValues}
                        // validationSchema={createSiteValidation}
                        onSubmit={onSubmit}
                    >
                        {({
                            resetForm,
                            handleBlur,
                            handleChange,
                            isSubmitting,
                        }) => {

                            return (
                                <Form className=" d-flex flex-column">
                                    <div className="offcanvas-header bg-light-blue mb-0">
                                        <span className="offcanvas-title fw-bold text-blue" id="descoffcanvasRightLabel">
                                            Add Issues 2/2
                                        </span>

                                        <button
                                            type="button"
                                            className="btn-close me-0"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                        // onClick={resetForm}
                                        >
                                        </button>
                                    </div>

                                    <div className="d-flex gap-3 flex-column p-3">
                                        <div className="row">

                                            <div className="form-group col-6 ">
                                                <div className="text-start w-100 mb-2">
                                                    <label htmlFor="exampleInputPassword1 ">
                                                        Material  Description
                                                    </label>
                                                    <span className="text-danger">*</span>
                                                </div>
                                                <Field
                                                    type="textarea"
                                                    name="name"
                                                    className="form-control  border-info  "
                                                    placeholder="Enter Site Name"
                                                // onBlur={handleBlur}
                                                />

                                                <ErrorMessage
                                                    name="name"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>

                                            <div className="form-group col-6">
                                                <div className="text-start w-100 mb-2">
                                                    <label htmlFor="exampleInputPassword1">
                                                        Enter Title
                                                    </label>
                                                    <span className="text-danger">*</span>
                                                </div>
                                                <Field
                                                    type="text"
                                                    name="organizationName "
                                                    className="form-control"
                                                    placeholder="Transfer Title"
                                                >

                                                </Field>

                                                <ErrorMessage
                                                    name="organizationName"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-6 text-start">
                                                <label htmlFor="exampleInputPassword1 ">
                                                    Transfer From<span className="text-danger">*</span>
                                                </label>
                                                <br />
                                                <Field
                                                    type="text"
                                                    name="startDate"
                                                    id="inputdate"
                                                    className="form-control  border-info"
                                                    placeholder="PO ID"

                                                // min={CreateDate()}
                                                />

                                                <ErrorMessage
                                                    name="startDate"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>
                                            <div className="form-group col-6 text-start">
                                                <label htmlFor="exampleInputPassword1 ">
                                                    Received Quantity<span className="text-danger">*</span>
                                                </label>
                                                <br />
                                                <Field
                                                    type="text"
                                                    name="startDate"
                                                    id="inputdate"
                                                    className="form-control  border-info"
                                                    placeholder="00.00"

                                                // min={CreateDate()}
                                                />

                                                <ErrorMessage
                                                    name="startDate"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="form-group col-6 text-start">
                                                <label htmlFor="exampleInputPassword1 ">
                                                    Receiving By<span className="text-danger">*</span>
                                                </label>
                                                <br />
                                                <Field
                                                    type="text"
                                                    name="startDate"
                                                    id="inputdate"
                                                    className="form-control  border-info"
                                                    placeholder="UOM"

                                                // min={CreateDate()}
                                                />

                                                <ErrorMessage
                                                    name="startDate"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>
                                            <div className="form-group col-6 text-start">
                                                <label htmlFor="exampleInputPassword1 ">
                                                    Received Date/Time<span className="text-danger">*</span>
                                                </label>
                                                <br />
                                                <Field
                                                    type="date"
                                                    name="startDate"
                                                    id="inputdate"
                                                    className="form-control  border-info"
                                                    placeholder="Vendor"

                                                // min={CreateDate()}
                                                />

                                                <ErrorMessage
                                                    name="startDate"
                                                    render={(msg) => (
                                                        <small style={{ color: "red" }}>{msg}</small>
                                                    )}
                                                />
                                            </div>

                                        </div>

                                    </div>

                                    <div className="text-start p-3 mt-5">
                                        <button
                                            type="submit"
                                            className="text-white m-auto w-100 bg-info auth_btn"
                                            data-bs-toggle="offcanvas" data-bs-target="#descuploadoffcanvasRight" aria-controls="offcanvasRight"
                                        >
                                            Description
                                        </button>
                                        <br />
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>


        </div>
    )
}

export default Issues