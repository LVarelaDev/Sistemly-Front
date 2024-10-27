import RequestDetailManage from "@/components/pages/requests/requestDetail/RequestDetailManage";
import React from "react";

const page = ({ params }: { params: any }) => {
  const { id } = params;
  return <RequestDetailManage id={+id} />;
};

export default page;
