import { useSelector } from "react-redux";
import DashboardElements from "../../components/DashboardElements/DashboardElements";
import { GlobalTypes } from "../../types/CustomInterfaces";

const HomeView = ({children}:any) => {

  return (
    <div>
      <DashboardElements items={children} />
    </div>
  );
};

export default HomeView;
