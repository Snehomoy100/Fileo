import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import { addFolder } from "../store/actions";
import FolderScreen from "../views/folderScreen/folderScreen";

function Routes(props: AppProps) {
  const AllRoutes = () => {
    return (
      <>
        {/* <Route><Redirect to="/root" /></Route> */}
        {props.route.map((data: any) => {
          return (
            <Route
              exact
              key={data.id}
              path={`${data.url}`}
              render={(props) => (
                <FolderScreen {...props} id={data.id} url={data.url} type={data.type} />
              )}
            />
          );
        })}
      </>
    );
  };

  return (
    <Switch>
      <AllRoutes />
    </Switch>
  );
}

type folderData = {
  id: string;
  name: string;
  url: string;
  creator: string;
  date: Date;
  subFolders: Array<folderData>;
};

type routeData = {
  id: string;
  name: string;
  url: string;
};

type AppProps = {
  folder: folderData;
  route: Array<routeData>;
  addFolder: any;
};

const mapStateToProps = (state: any) => {
  return {
    folder: state.folders,
    route: state.routes,
  };
};

export default connect(mapStateToProps, { addFolder })(Routes);
