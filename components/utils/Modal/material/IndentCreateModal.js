import { ErrorMessage, Field, Form, Formik } from "formik";
import Select from 'react-select'

const IndentCreateModal = () => {

    const options = [
        { value: 'Dimensions', label: 'Dimensions' },
        { value: 'Weight', label: 'Weight' },
        { value: 'Manufacturing Part', label: 'Manufacturing Part' },
    ]

    const initialValues = {
        materialCode: "",
        materialName: "",
        brandName: "",
        uom: "",
    }

    const onSubmit = async () => {
        try {
            const response = await axios.post();
        } catch {
            console.log(error)
        }
    }

    return (
        <div class="modal fade w-100" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable w-100">
                <div class="modal-content w-100">
                    <div class="modal-header w-100">
                        <h1 class="modal-title fs-5 w-100" id="exampleModalLabel">Create Indent</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body w-100">
                        <Formik
                            initialValues={initialValues}
                        // validationSchema={bomValidationSchema}
                        onSubmit={onSubmit}
                        >
                            {({
                                resetForm,
                                isSubmitting,
                            }) => {

                                return (
                                    <Form className="d-flex flex-column">
                                        <div className="d-flex gap-3 flex-column p-3">
                                            <div className="row">
                                                <div className="form-group col-12 mt-4">
                                                    <div className="text-start w-100 mb-2">
                                                        <label htmlFor="exampleInputPassword1 ">
                                                            Search Bom
                                                        </label>
                                                    </div>

                                                    <div>
                                                        <Select options={options}
                                                            isMulti={true}
                                                        // onChange={handleChange}
                                                        // value={selectedOptions}
                                                        />
                                                    </div>

                                                </div>

                                                <div className="form-group col-12 mt-4">
                                                    <div className="text-start w-100 mb-2">
                                                        <label htmlFor="exampleInputPassword1">
                                                            Assign To
                                                        </label>
                                                        <span className="text-danger">*</span>
                                                    </div>
                                                    <Field
                                                        type="text"
                                                        name="materialName"
                                                        className="form-control  border-info"
                                                        placeholder="Enter Material Name"
                                                    />

                                                    <ErrorMessage
                                                        name="materialName"
                                                        render={(msg) => (
                                                            <small style={{ color: "red" }}>{msg}</small>
                                                        )}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-12 mt-4">
                                                    <label htmlFor="exampleInputPassword1 ">
                                                        Expected Start Date
                                                    </label>
                                                    <br />
                                                    <Field
                                                        type="text"
                                                        name="brandName"
                                                        className="form-control  border-info"
                                                        placeholder="Enter Brand Name"
                                                    />

                                                    <ErrorMessage
                                                        name="brandName"
                                                        render={(msg) => (
                                                            <small style={{ color: "red" }}>{msg}</small>
                                                        )}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-12 mt-4">
                                                    <label htmlFor="exampleInputPassword1 ">
                                                        Enter Description
                                                    </label>
                                                    <br />
                                                    <Field
                                                        type="text"
                                                        name="brandName"
                                                        className="form-control  border-info"
                                                        placeholder="Enter Brand Name"
                                                    />

                                                    <ErrorMessage
                                                        name="brandName"
                                                        render={(msg) => (
                                                            <small style={{ color: "red" }}>{msg}</small>
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                            {/* <div className="row mt-3">
                                                {showLengthBreadthHeight &&
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <label htmlFor="exampleInputPassword1">
                                                                Length
                                                            </label>
                                                            <br />

                                                            <div className="input-group">
                                                                <Field
                                                                    type="text"
                                                                    name="length"
                                                                    className="form-control border-info length_css w-50"
                                                                    placeholder="length in inches"
                                                                />

                                                                <Field
                                                                    as="select"
                                                                    name="lengthUnit"
                                                                    className="form-select border-info"
                                                                >
                                                                    <option value="(in)">in</option>
                                                                    <option value="(cm)">cm</option>
                                                                </Field>
                                                            </div>

                                                            <ErrorMessage
                                                                name="length"
                                                                render={(msg) => (
                                                                    <small style={{ color: "red" }}>{msg}</small>
                                                                )}
                                                            />

                                                            <ErrorMessage
                                                                name="lengthUnit"
                                                                render={(msg) => (
                                                                    <small style={{ color: "red" }}>{msg}</small>
                                                                )}
                                                            />
                                                        </div>

                                                        <div className="form-group col-4">
                                                            <label htmlFor="exampleInputPassword1 ">
                                                                Breadth
                                                            </label>

                                                            <div className="input-group">
                                                                <Field
                                                                    type="text"
                                                                    name="breadth"
                                                                    className="form-control border-info length_css w-50"
                                                                    placeholder="breadth in inches"
                                                                />
                                                                <Field
                                                                    as="select"
                                                                    name="lengthUnit"
                                                                    className="form-select border-info"
                                                                >
                                                                    <option value="(in)">in</option>
                                                                    <option value="(cm)">cm</option>
                                                                </Field>

                                                                <ErrorMessage
                                                                    name="breadth"
                                                                    render={(msg) => (
                                                                        <small style={{ color: "red" }}>{msg}</small>
                                                                    )}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="form-group col-4">
                                                            <label htmlFor="exampleInputPassword1 ">
                                                                Height
                                                            </label>

                                                            <div className="input-group">
                                                                <Field
                                                                    type="string"
                                                                    name="height"
                                                                    className="form-control border-info length_css w-50"
                                                                    placeholder="height in inches"
                                                                />

                                                                <Field
                                                                    as="select"
                                                                    name="lengthUnit"
                                                                    className="form-select border-info"
                                                                >
                                                                    <option value="(in)">in</option>
                                                                    <option value="(cm)">cm</option>
                                                                </Field>
                                                            </div>

                                                            <ErrorMessage
                                                                name="height"
                                                                render={(msg) => (
                                                                    <small style={{ color: "red" }}>{msg}</small>
                                                                )}
                                                            />
                                                        </div>

                                                        <div className="form-group col-4 mt-3">
                                                            <label htmlFor="exampleInputPassword1">
                                                                Diameter
                                                            </label>
                                                            <br />
                                                            <Field
                                                                type="string"
                                                                name="Diameter"
                                                                className="form-control border-info"
                                                            />

                                                            <ErrorMessage
                                                                name="Diameter"
                                                                render={(msg) => (
                                                                    <small style={{ color: "red" }}>{msg}</small>
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                }

                                                {showWeightField &&
                                                    <div className="form-group col-4 mt-3">
                                                        <label htmlFor="exampleInputPassword1 ">
                                                            Weight
                                                        </label>

                                                        <div className="input-group">
                                                            <Field
                                                                type="text"
                                                                name="Weight"
                                                                className="form-control  border-info w-50"
                                                                placeholder="weight in kg's"
                                                            />

                                                            <ErrorMessage
                                                                name="Weight"
                                                                render={(msg) => (
                                                                    <small style={{ color: "red" }}>{msg}</small>
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                }

                                                {manufacturing && <div className="form-group col-4 mt-3">
                                                    <label htmlFor="exampleInputPassword1 ">
                                                        Manufacturing
                                                    </label>

                                                    <Field
                                                        type="string"
                                                        name="Manufacturing"
                                                        className="form-control  border-info"
                                                    />

                                                    <ErrorMessage
                                                        name="Manufacturing"
                                                        render={(msg) => (
                                                            <small style={{ color: "red" }}>{msg}</small>
                                                        )}
                                                    />
                                                </div>}

                                                {uPCEAN &&
                                                    <>
                                                        <div className="form-group col-4 mt-3">
                                                            <label htmlFor="exampleInputPassword1 ">
                                                                UPC
                                                            </label>

                                                            <Field
                                                                type="string"
                                                                name="UPC"
                                                                className="form-control  border-info"
                                                            />

                                                            <ErrorMessage
                                                                name="UPC"
                                                                render={(msg) => (
                                                                    <small style={{ color: "red" }}>{msg}</small>
                                                                )}
                                                            />
                                                        </div>

                                                        <div className="form-group col-4 mt-3">
                                                            <label htmlFor="exampleInputPassword1 ">
                                                                EAN
                                                            </label>

                                                            <Field
                                                                type="string"
                                                                name="EAN"
                                                                className="form-control  border-info"
                                                            />

                                                            <ErrorMessage
                                                                name="EAN"
                                                                render={(msg) => (
                                                                    <small style={{ color: "red" }}>{msg}</small>
                                                                )}
                                                            />
                                                        </div>
                                                    </>
                                                }

                                                {isbnoptionField && <div className="form-group col-4 mt-3">
                                                    <label htmlFor="exampleInputPassword1 ">
                                                        ISBN
                                                    </label>

                                                    <Field
                                                        type="string"
                                                        name="ISBN"
                                                        className="form-control  border-info"
                                                    />

                                                    <ErrorMessage
                                                        name="ISBN"
                                                        render={(msg) => (
                                                            <small style={{ color: "red" }}>{msg}</small>
                                                        )}
                                                    />
                                                </div>}

                                                {colorOptionField && <div className="form-group col-4 mt-3">
                                                    <label htmlFor="exampleInputPassword1 ">
                                                        Color
                                                    </label>

                                                    <Field
                                                        type="string"
                                                        name="Color"
                                                        className="form-control  border-info"
                                                    />

                                                    <ErrorMessage
                                                        name="Color"
                                                        render={(msg) => (
                                                            <small style={{ color: "red" }}>{msg}</small>
                                                        )}
                                                    />
                                                </div>}
                                            </div> */}
                                        </div>

                                        {/* <div className="d-flex justify-content-center p-3  w-100">
                                            <button
                                                type="submit"
                                                className="text-white w-25 bg-btn-bg auth_btn"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <span
                                                            className="spinner-border spinner-border-sm"
                                                            data-bs-toggle="offcanvas" data-bs-target="#addoffcanvasRight" aria-controls="offcanvasRight"
                                                        ></span>
                                                        <span className="ms-2" role="status">
                                                            Loading...
                                                        </span>
                                                    </>
                                                ) : (
                                                    "+ Add"
                                                )}
                                            </button>
                                        </div> */}
                                    </Form>
                                );
                            }}
                        </Formik>
                    </div>

                    <div class="modal-footer w-100">
                        <button type="button" class="btn bg-btn-bg text-white">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndentCreateModal