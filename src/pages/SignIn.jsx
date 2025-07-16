import React from "react";
import Header2 from "../components/Header2";
import Login from "../components/SignIn";

const SignIn = () => {
  return (
    <>
      <Header2 />
      <div className="min-h-screen flex items-center justify-center font-josefin mx-4 my-4 ">
        <div className="w-full max-w-md flex flex-col items-center justify-center py-4 border border-black rounded-xl">
          <Login />
        </div>
      </div>
    </>
  );
};

export default SignIn;
