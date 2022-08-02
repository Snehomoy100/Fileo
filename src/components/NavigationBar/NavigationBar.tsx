import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { dataType } from "../../types/interfaces";
import { changeFolder } from "../../redux/actionCreators/currentFolderActionCreator";
import { setQuery } from "../../redux/actionCreators/searchActionCreator";

import "./navigationBar.css";

const Navbar = ({ setIsOpen }: propTypes) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentFolder = useSelector((state: any) => state.currentFolder);
  const data = useSelector((state: any) => state.fileFolder);
  const searchQuery = useSelector((state: any) => state.search.query);
  const [str, setStr] = useState("");
  let getCurrentObject = {} as dataType;
  const eachRecursive = (obj: dataType, id: string) => {
    if (obj.id === id) {
      {
        getCurrentObject = obj;
        return obj;
      }
    }
    for (let k in obj.children) {
      eachRecursive(obj.children[k], id);
    }
  };
  eachRecursive(data, currentFolder);

  const handleClick = (link: string) => {
    if (link === "") {
      navigate("/");
      dispatch(setQuery({ query: "", globalState: data }));
      dispatch(changeFolder("root"));
      return;
    }
    dispatch(changeFolder(link));
    navigate("/" + link);
  };

  const handleChange = (value: any) => {
    dispatch(setQuery({ query: value, globalState: data }));
  }
  function debounce(func: any) {
    let timer: any;
    return (...args: any) => {
      const context: any = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  }

  const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <div className="nb719Navbar">
      <div className="nb527NavbarLeftContainer">
        <div className="nb192Breadcrumb">
          {getCurrentObject?.path?.map((item: any, index: number) => (
            <span
              key={index}
              className={`nb172BreadcrumbItem ${
                index === getCurrentObject.path.length - 1 ? "nb278active" : ""
              }`}
              onClick={() => handleClick(item.link)}
            >
              {item.name} {` `}
              {`>  `}
              {` `}
            </span>
          ))}
        </div>
      </div>
      <div className="nb267NavbarRightContainer">
        <i
          className="fa-solid fa-plus nb361OpenModalIcon"
          onClick={() => setIsOpen(true)}
        >   Create
        </i>
        <input
          type="text"
          className="nb452Icon nb341Input"
          placeholder="Search"
          // value={str}
          onChange={
            (e) => {
              optimizedFn(e.target.value);
            }
            // dispatch(setQuery({ query: e.target.value, globalState: data }))
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

type path = {
  name: string;
  link: string;
};

export default Navbar;
