import { useSelector } from "react-redux";
import DashboardItems from "../../components/DashboardElements/DashboardElements";
import { GlobalTypes } from "../../types/CustomInterfaces";

const HomePage = ({children}:any) => {

  return (
    <div>
      <DashboardItems items={children} />
    </div>
  );
};

export default HomePage;
