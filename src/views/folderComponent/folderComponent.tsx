import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DashboardItems from "../../components/DashboardElements/DashboardElements";
import { DataTypes, GlobalTypes } from "../../types/CustomInterfaces";

const FolderComponent = (): JSX.Element => {
  const { folderId } = useParams();
  let allFoldersHere: DataTypes = {} as DataTypes;
  const eachRecursive = (obj: DataTypes, id: string | undefined) => {
    if (obj.id === id) {
      {
        allFoldersHere = obj;
        return obj;
      }
    }
    for (var k in obj.children) {
      eachRecursive(obj.children[k], id);
    }
  };

  const data = useSelector(( state: GlobalTypes ) => state.fileFolder);
  eachRecursive(data, folderId);
  if (allFoldersHere.children.length !== 0) {
    return (
      <div>
        <DashboardItems items={allFoldersHere.children} />
      </div>
    );
  }
  return <div>Empty folder</div>;
};

export default FolderComponent;
