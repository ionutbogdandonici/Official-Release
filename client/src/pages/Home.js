import React from "react";
import { Link } from "react-router-dom";
import happyFelling from "../assets/images/HappyFelling.svg";
import Button from "./Components/Button";

function Home() {
  return (
    <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 items-center mt-12 lg:mt-40">
      
      <div className="text-center lg:text-left lg:ml-24 mt-16">
        <img
          className={"mx-auto lg:mx-0"}
          src={happyFelling}
          alt="HappyFelling"
        />
        <h1 className="text-5xl font-bold mt-4 text-zinc-800">Keep in Touch</h1>
        <p className="text-base font-medium text-zinc-600 mt-2">
          An happy place where you can be who you really are, without many
          thoughts!
        </p>
      </div>
      <div className="w-full lg:w-auto mt-16 lg:mr-24">
        <div className="lg:bg-white lg:overflow-hidden lg:shadow lg:rounded-lg bg-transparent py-10 px-4 lg:px-8">
          <Link to={"/login"}>
            <Button decoration="primary" type="button" fullWidth={true}>
              Access
            </Button>
          </Link>
          <p className="text-center my-4 text-sm font-normal text-zinc-500">
            Not registered yet?
          </p>
          <Link to={"/register"}>
            <Button decoration="secondary" type="button" fullWidth={true}>
              Register for free!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
