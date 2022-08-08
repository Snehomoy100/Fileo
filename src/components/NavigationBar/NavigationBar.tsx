import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { DataTypes, GlobalTypes } from "../../types/CustomTypes";
import { changeFolder } from "../../redux/actionCreators/currentFolderActionCreator";
import { setQuery } from "../../redux/actionCreators/searchActionCreator";

import "./navigationBar.css";


const NavigationBar = ({ setIsOpen }: propTypes) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentFolder = useSelector((state: GlobalTypes) => state.currentFolder);
  const data = useSelector((state: GlobalTypes) => state.fileFolder);

  let getCurrentObject = {} as DataTypes;

  const eachRecursive = (obj: DataTypes, id: string) => {
    if (obj.id === id) {
      {
        getCurrentObject = obj;
        return obj;
      }
    }
    for (let iterator in obj.children) {
      eachRecursive(obj.children[iterator], id);
    }
  };

  eachRecursive(data, currentFolder);

  const debounce = (func: Function) => {
    let timer: any;
    return (...args: any) => {
      const context: any = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 700);
    };
  }

  const handleOnClick = (link: string) => {
    if (link === "") {
      navigate("/");
      dispatch(setQuery({ query: "", globalState: data }));
      dispatch(changeFolder("root"));
      return;
    }
    dispatch(changeFolder(link));
    navigate("/" + link);
  };

  const handleClickChange = (value: string) => {
    dispatch(setQuery({ query: value, globalState: data }));
  }

  const optimizedFn = useCallback(debounce(handleClickChange), []);

  return (
    <div className="nb50TheNavbar">
      <div className="nb50NavbarLeftContainer">
        <div className="nb50Breadcrumb">
          {getCurrentObject?.path?.map((item: any, index: number) => (
            <span
              key={index}
              className={`nb50BreadcrumbItem ${
                index === getCurrentObject.path.length - 1 ? "nb50active" : ""
              }`}
              onClick={() => handleOnClick(item.link)}
            >
              {item.name} {` `}
              {`>  `}
              {` `}
            </span>
          ))}
        </div>
      </div>
      <div className="nb50NavbarRightContainer">
        <i
          className="fa-solid fa-plus nb50OpenModalIcon"
          onClick={() => setIsOpen(true)}
        >   Create
        </i>
        <input
          type="text"
          className="nb50Icon nb50Input"
          placeholder="Search a file/folder"
          onChange={
            (e) => {
              optimizedFn(e.target.value);
            }
          }
        />
      </div>
    </div>
  );
};

type propTypes = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};


export default NavigationBar;
