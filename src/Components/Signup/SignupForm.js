import { useFormik } from "formik";
import Input from "../../common/Input";
import * as Yup from "yup";
import "./signup.css";
import { Link, withRouter } from "react-router-dom";
import { signupUser } from "../../services/signupService";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth, useAuthActions } from "../../context/AuthProvider";
import { useQuery } from "../../hooks/useQuery";

// inital values for the form
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};
// Yup schema for form validation
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(4, "Name must be at least 4 characters"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{11}$/, "Phone number is not valid")
    .nullable(),

  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
    ),
  passwordConfirm: Yup.string()
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password"), null], "password must match"),
});

const SignupForm = ({ history }) => {
  // useQuery hook to get the query params and redirect
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  // useAuthActions to dispatch actions and useAuth to get the auth state
  const setAuth = useAuthActions();
  const userData =useAuth()
  // error state
  const [error, setError] = useState(null);

// useEffect to check if the user is already logged in
 useEffect(()=>{
  if(userData) history.push(redirect)
 },[redirect,userData,history]) 

  // submit handler
  const onSubmit = async (values) => {
    const userData = {
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
      password: values.password,
    };

    try {
      const { data } = await signupUser(userData);
      setAuth(data);
      setError(null);
      toast.success("You have successfully signed up");
      history.push(redirect);
    } catch (error) {
      if (error.response && error.response.data.message)
        setError(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  // useFormik hook
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="name" label="Name" />
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="phoneNumber"
          label="Phone Number"
          type="tel"
        />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <Input
          formik={formik}
          name="passwordConfirm"
          label="Password Confirmation"
          type="password"
        />
        <button
          className="btn primary"
          style={{ width: "100%", paddingTop: "10px", fontSize: "16px" }}
          type="submit"
          disabled={!formik.isValid}
        >
          Sign up
        </button>
        {error && <p className="error">{error}</p>}
        <Link to={`login?redirect=${redirect}`}>
          <p className="loginFrom-signup">
            Already have an account? Login from here
          </p>
        </Link>
      </form>
    </div>
  );
};
// withRouter to get the history object
export default withRouter(SignupForm);
