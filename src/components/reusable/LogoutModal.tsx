import React from "react";
import {useNavigate } from "react-router-dom";
import warningIcon from "../../assets/icons/logo.png";

const LogoutModal = ({setLogoutModal,} : {
  setLogoutModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    //navigate to login if there is no access token
    navigate('/login')
  };

  return (
    <div className="animate-jump fixed top-0 left-0 z-50 w-full h-full bg-[#3a3a3a]/50 backdrop-blur-[8px]">
      <div className="w-[350px] md:w-[400px] py-6 px-6 min-h-[246px] rounded absolute bg-white backdrop-blur-xl top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
        <img src={warningIcon} className="mb-5" alt="" />
        <div className="mb-8  ">
          <h1 className="text-lg font-medium">Logout!</h1>
          <p className="text-[#303030] ">Are you sure you want to logout? </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => setLogoutModal(false)}
            className="border-[#999999] border rounded-md py-3 px-10 md:px-14capitalize text-lg font-medium "
          >
            cancel
          </button>
          <button onClick={handleLogout} className=" rounded-md py-3 px-10 md:px-14 capitalize text-white bg-[#D92D20] text-lg font-medium ">
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
