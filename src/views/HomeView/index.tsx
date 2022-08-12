import DashboardElements from "../../components/DashboardElements/index";


const HomeView = ({ allThefilesAndFolders }: any) => {

  return (
    <div>
      <DashboardElements items={allThefilesAndFolders} />
    </div>
  );
};

export default HomeView;
