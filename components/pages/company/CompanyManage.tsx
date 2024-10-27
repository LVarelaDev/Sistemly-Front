"use client";
import GeneralInfoCardManage from "./partials/generalInformation/GeneralInfoCardManage";
import UserCardManage from "./partials/users/UserCardManage";

const CompanyManage = () => {
  return (
    <div className="grid grid-cols-[1fr_2fr] gap-5 p-3">
      <div>
        <GeneralInfoCardManage />
      </div>
      <div>
        <UserCardManage />
      </div>
    </div>
  );
};

export default CompanyManage;
