import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import { parseCookies } from "nookies";
import { createSiteAsync } from "@/store/createSite/CreateSiteSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "@/store/siteSlice";
import { validationSchema } from "@/schemas/create-project"
import { AddTeam } from "./AddTeam";

const CreateProject = () => {
  const [addmemberState, setAddmemberState] = useState(false);
  const [siteId, setSiteId] = useState("");
  const [minEndDate, setMinEndDate] = useState();
  const [endDateState, setEndDateState] = useState();
  const [organizationName, setOrganizationName] = useState("");

  const { currentOrganizationId } = parseCookies();

  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state?.getOrganizationAsync);

  const initialValues = {
    name: '',
    startDate: '',
    endDate: '',
  };

  useEffect(() => {
    if (siteId != null) {
      const addMember = async () => {
        const { token } = parseCookies();
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/site/members?site=${siteId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const userData = response?.payload;
        } catch (error) {
          toast.error(error, { position: "top-center" });
        }
      };
      addMember();
    }
  }, [siteId]);

  function formatDate(date) {
    return date.toISOString().split('T')[0];
  }

  function CreateDate() {
    const formattedDate = new Date();
    return formatDate(formattedDate);
  }

  function CreateEndDate(startDate) {
    const formattedStartDate = new Date(startDate);
    const nextDay = new Date(formattedStartDate);
    nextDay.setDate(formattedStartDate.getDate() + 1);
    const formattedEndDate = formatDate(nextDay);

    setMinEndDate(startDate);
    setEndDateState(formattedEndDate);

    return formattedEndDate;
  }

  var startDate = CreateDate();

  const onSubmit = async (values, {resetForm}) => {
    try {
      const response = await dispatch(createSiteAsync(values));
      const userData = response?.payload;

      if (userData?.success) {
        toast.success(userData?.message, { position: "top-center" });
        resetForm()
        await dispatch(fetchUserData());
        setSiteId(userData?.site);
        setAddmemberState(true);
      } else {
        toast.error(response?.payload?.error, { position: "top-center" });
      }
    } catch (error) {
      toast.error(error, { position: "top-center" });
    }
  };

  useEffect(() => {
    setEndDateState(CreateEndDate(startDate));
  }, [startDate]);

  useEffect(() => {
    const organization = userData?.organizations?.find(item => item?._id === currentOrganizationId);

    if (organization) {
      setOrganizationName(organization?.name);
    }
  }, [userData?.organizations, currentOrganizationId]);

  return (
    <>
      <div
        className="offcanvas offcanvas-end w-25 bg-white"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        data-bs-backdrop="static"
      >
        <div className="offcanvas-body p-0">
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              resetForm,
              handleBlur,
              handleChange,
              isSubmitting,
            }) => {
              return (
                <Form className=" d-flex flex-column">
                  <div className="offcanvas-header bg-light-blue mb-0">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">
                      Create New Site
                    </h5>

                    <button
                      type="button"
                      className="btn-close me-0"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      onClick={resetForm}
                    >
                    </button>
                  </div>

                  <div className="d-flex gap-3 flex-column p-3">
                    <div className="form-group ">
                      <div className="text-start w-100 mb-2">
                        <label htmlFor="exampleInputPassword1 ">
                          Site Name
                        </label>
                        <span className="text-danger">*</span>
                      </div>
                      <Field
                        type="text"
                        name="name"
                        className="form-control  border-info  "
                        placeholder="Enter Site Name"
                        onBlur={handleBlur}
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
                        <label htmlFor="exampleInputPassword1">
                          Organization Name
                        </label>
                        <span className="text-danger">*</span>
                      </div>
                      <Field
                        type="text"
                        name="organizationName "
                        className="form-control   border-info "
                        placeholder="Organization Name"
                        value={organizationName}
                        disabled
                      />

                      <ErrorMessage
                        name="organizationName"
                        render={(msg) => (
                          <small style={{ color: "red" }}>{msg}</small>
                        )}
                      />
                    </div>
                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1 ">
                          Start Date<span className="text-danger">*</span>
                        </label>
                        <br />
                        <Field
                          type="date"
                          name="startDate"
                          id="inputdate"
                          className="form-control  border-info"
                          placeholder="dd/mm/yyyy"
                          onChange={(e) => {
                            const newStartDate = e.target.value;
                            setMinEndDate(CreateEndDate(newStartDate));
                            handleChange(e);
                          }}
                          min={CreateDate()}
                        />

                        <ErrorMessage
                          name="startDate"
                          render={(msg) => (
                            <small style={{ color: "red" }}>{msg}</small>
                          )}
                        />
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1 ">
                          End Date<span className="text-danger">*</span>
                        </label>
                        <br />
                        <Field
                          type="date"
                          name="endDate"
                          id="inputdate"
                          className="form-control  border-info"
                          placeholder="yyyy-MM-dd"
                          min={endDateState}
                        />

                        <ErrorMessage
                          name="endDate"
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
                      className="text-white bg-btn-bg m-auto w-100  auth_btn"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#addoffcanvasRight"
                      aria-controls="offcanvasRight"
                      disabled={
                        !values.name || !values.startDate || !values.endDate
                      }
                    >
                      {isSubmitting ? (
                        <>
                          <span className="ms-2" role="status">
                            Loading...
                          </span>
                        </>
                      ) : (
                        "Create"
                      )}
                    </button>
                    <br />
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>

      <AddTeam siteId={siteId} setAddmemberState={setAddmemberState} />
    </>
  );
};

export default CreateProject;