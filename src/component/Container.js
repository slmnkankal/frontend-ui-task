// import { useState, useEffect } from "react";
// import axios from "axios";
import TeamsMenu from "./container-item/TeamsMenu";
import AllTeamsCards from "./container-item/AllTeamsCards";
import Activity from "./container-item/Activity";

const Container = (props) => {
  // const [tasks, setTasks] = useState();

  // const baseURL =
  //   "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/807ba601-b71c-4a02-8d9f-44700a20791e/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220731T135819Z&X-Amz-Expires=86400&X-Amz-Signature=49283b68dc19fd74103af3ef5b719f3f7320583f6d632e775997a7f268b57946&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22&x-id=GetObject";

  // const fetchTasks = async () => {
  //   const { data } = await axios.get(baseURL);
  //   console.log(data)
  //   setTasks(data);
  // };

  // useEffect(() => {
  //   fetchTasks();
  // }, []);



  return (
    <>
      <TeamsMenu />
      <div className="container-group">
        <AllTeamsCards dataAll={props.dataAll} />

        <Activity dataAll={props.dataAll} />
      </div>
    </>
  );
};

export default Container;
