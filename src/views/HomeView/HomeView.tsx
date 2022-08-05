import DashboardElements from "../../components/DashboardElements/DashboardElements";


const HomeView = ({children}:any) => {

  return (
    <div>
      <DashboardElements items={children} />
    </div>
  );
};

export default HomeView;
