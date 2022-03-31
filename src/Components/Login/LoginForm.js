import { useFormik } from "formik";
import Input from "../../common/Input";
import * as Yup from "yup";
import "./loginform.css";
import { Link, withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginUser } from "../../services/loginService";
import toast from "react-hot-toast";
import { useAuth, useAuthActions } from "../../context/AuthProvider";
import { useQuery } from "../../hooks/useQuery";

// inital values for the form
const initialValues = {
  email: "",
  password: "",
};

// Yup schema for form validation
const validationSchema = Yup.object({
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = ({ history }) => {
  // useQuery hook to get the query params and redirect
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  // useAuthActions to dispatch actions
  const setAuth = useAuthActions();
  const userData =useAuth()

  // error state
  const [error, setError] = useState(null);
  useEffect(()=>{
    if(userData) history.push(redirect)
   },[redirect,userData,history]) 
  // submit handler
  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setAuth(data);
      setError(null);
      toast.success("You have successfully logged in");
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
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <button
          className="btn primary"
          style={{ width: "100%", paddingTop: "10px", fontSize: "16px" }}
          type="submit"
          disabled={!formik.isValid}
        >
          Login
        </button>
        {error && <p className="error">{error}</p>}
        <Link to={`signup?redirect=${redirect}`}>
          <p className="signupFrom-login">
            If you don't have an account, signup from here
          </p>
        </Link>
      </form>
    </div>
  );
};
// withRouter to get the history object
export default withRouter(LoginForm);
