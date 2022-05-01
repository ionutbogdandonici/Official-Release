import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import LoginErrorModal from "./Modals/LoginErrorModal";
import Button from "./Components/Button";
import InputField from "./Components/InputField";

function Login() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const initailValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup
    .object({
      email: yup
        .string()
        .email("Email is invalid")
        .required("Email is required"),
      password: yup.string().required("Password is required"),
    })
    .defined();

  const handleSubmit = (data) => {
    axios.post("http://localhost:3030/auth/login", data).then((res) => {
      navigate("/");
      console.log(res);
    });
  };

  return (
    <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-3">
      <div className="col-start-2 col-end-3 p-4">
        <div className="-m-4 text-center mb-16">
          <h1 className="text-4xl font-bold mt-32">Keep in Touch</h1>
          <p className="mt-1 text-zinc-400 font-normal">
            A Simple Social Network
          </p>
        </div>
        <Formik
          className="flex flex-col"
          initialValues={initailValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <InputField
              placeholder="Please insert your email"
              name="email"
              type="email"
              label="Email"
            />
            <InputField
              placeholder="Please insert your password"
              name="password"
              type="password"
              label="Password"
            />
            <div className="mt-2 mb-12">
              <Link to="/forgotPassword" className="text-xs text-neutral-600">
                Forgot password?
              </Link>
            </div>
            <div>
              <Button
                decoration="primary"
                type="submit"
                fullWidth={true}
                onClick={handleSubmit}
              >
                Login
              </Button>
              <div className="mt-2">
                <p className="text-xs text-neutral-600 text-center mb-2">
                  Don't have an account yet?
                </p>
                <Link to="/register">
                  <button className="bg-neutral-700 text-white text-base font-semibold w-full py-3 rounded-md">
                    Register
                  </button>
                </Link>
              </div>
            </div>
            {isOpen && <LoginErrorModal setIsOpen={setIsOpen} />}
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
