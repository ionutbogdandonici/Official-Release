import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import LoginErrorModal from "./Modals/LoginErrorModal";
import Button from "./Components/Button";

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
    <div className="container mx-auto lg:px-96 p-4 font-inter">
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
          <div className="mb-6">
            <label
              className="block text-zinc-300 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <Field
              className="bg-zinc-800 border border-zinc-700 rounded-md text-sm w-full py-3 px-4 text-white placeholder:text-zinc-500"
              type="email"
              id="email"
              placeholder="Insert your email here"
              name="email"
              autoComplete="  off"
            />
            <ErrorMessage
              name={"email"}
              component="div"
              className="text-red-500 text-sm mt-2"
            />
          </div>
          <div className="">
            <label className="block text-zinc-300 text-sm font-semibold mb-2">
              Password
            </label>
            <Field
              className="bg-neutral-800 border border-neutral-700 rounded-md text-sm w-full py-3 px-4 text-white placeholder:text-neutral-500"
              type="password"
              id="password"
              placeholder="Insert your password here"
              name="password"
              autoComplete="off"
            />
            <ErrorMessage
              name={"password"}
              component="div"
              className="text-red-500 text-sm mt-2"
            />
          </div>
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
  );
}

export default Login;
