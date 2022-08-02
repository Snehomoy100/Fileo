import { useSelector } from "react-redux";
import DashboardItems from "../../components/dashboardItems/dashboardItems";
import { globalType } from "../../types/interfaces";

const HomePage = ({children}:any) => {

  return (
    <div>
      <DashboardItems items={children} />
    </div>
  );
};

export default HomePage;
