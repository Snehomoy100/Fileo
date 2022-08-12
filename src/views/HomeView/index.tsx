import DashboardElements from "../../components/DashboardElements/index";


const HomeView = ({children}:any) => {

  return (
    <div>
      <DashboardElements items={children} />
    </div>
  );
};

export default HomeView;
