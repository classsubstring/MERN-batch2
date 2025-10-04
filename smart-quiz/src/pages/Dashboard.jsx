import React from "react";
import { useParams, useSearchParams } from "react-router";

function Dashboard() {
  //   let [searchParams] = useSearchParams();
  //   const name = searchParams.get("username");
  //   const userId = searchParams.get("userid");

  const { username, userid } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-black">
        Welcome back {username} : {userid}
      </h1>
    </div>
  );
}

export default Dashboard;
