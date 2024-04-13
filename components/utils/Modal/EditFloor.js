
import axios from 'axios';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import { parseCookies } from "nookies"
import { toast } from 'react-toastify';
import { validationSchema } from "@/schemas/floorSchema/EditFloorSchema"

const EditFloor = ({ formData }) => {
    const { token, currentOrganizationId } = parseCookies();
    const router = useRouter();
    const { siteId } = parseCookies()

    const initialValues = {
        name: formData?.name || '',
        number: formData?.number || '',
    }


    const onSubmit = async (values) => {
        const data = {
            name: values?.name,
            number: values?.number
        }

        try {
            const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/floor/update/${formData?._id}?organization=${currentOrganizationId}&site=${siteId}`,
                data,
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            toast.success("Floor Edited Successfully", { position: "top-center" });
            router.push(router.asPath);

        } catch {
            console.warn("something went werong");
        }
    }

    return (
        <div>
            <div>

                <div
                    className="offcanvas offcanvas-end w-25 bg-white"
                    tabIndex="-1"
                    id="editoffcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                    data-bs-backdrop="static"
                >
                    <div className="offcanvas-header bg-light-blue mb-0">
                        <h5 className="offcanvas-title" id="offcanvasRightLabel">
                            Edit Floor
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
                            validationSchema={validationSchema}
                            initialValues={initialValues}
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

                                        <div className="form-group">
                                            <div className="text-start w-100 mb-2">
                                                <label htmlFor="exampleInputPassword1">
                                                    Enter Floor Number
                                                </label>
                                                <span className="text-danger">*</span>
                                            </div>
                                            <Field
                                                type="number"
                                                name="number"
                                                className="form-control form-control-bg-color"
                                                placeholder="Enter Floor Number"
                                            />

                                            <ErrorMessage
                                                name="number"
                                                render={(msg) => (
                                                    <small style={{ color: "red" }}>{msg}</small>
                                                )}
                                            />
                                        </div>

                                        <div className="form-group ">
                                            <div className="text-start w-100 mb-2">
                                                <label htmlFor="exampleInputPassword1 ">
                                                    Enter Floor Name
                                                </label>
                                                <span className="text-danger">*</span>
                                            </div>
                                            <Field
                                                type="text"
                                                name="name"
                                                className="form-control form-control-bg-color"
                                                placeholder="Enter floor Name"
                                                onBlur={handleBlur}
                                            />

                                            <ErrorMessage
                                                name="name"
                                                render={(msg) => (
                                                    <small style={{ color: "red" }}>{msg}</small>
                                                )}
                                            />
                                        </div>

                                        <div className="text-start w-50 m-auto mt-4">
                                            <button
                                                type="submit"
                                                className="text-white m-auto w-100 bg-btn-bg auth_btn"
                                                disabled={isSubmitting || !values.name || !values.number}
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
                                                    "Edit Floor"
                                                )}
                                            </button>
                                            <br />
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>
                        <div></div>
                        {/* </form> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EditFloor