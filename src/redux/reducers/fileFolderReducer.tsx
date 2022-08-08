import * as types from "../actionTypes/actionTypes";

const intitialState = {
  name: "root",
  id: "root",
  isAdmin: true,
  creator: "admin",
  type: "Default",
  createdAt: new Date().toLocaleString(),
  path: [
    {
      name: "root",
      link: "",
    },
  ],
  isFolder: true,
  children: [
    {
      name: "Home",
      id: "bcwejnnvwngjnfevbdbfc",
      isFolder: true,
      children: [],
      isAdmin: true,
      creator: "admin",
      type: "Default",
      createdAt: new Date().toLocaleString(),
      path: [
        {
          name: "root",
          link: "",
        },
        {
          name: "Home",
          link: "bcwejnnvwngjnfevbdbfc",
        },
      ],
    }
  ],
};


const addFileFolderRecursive = (obj: any, parent: any, id: string, item: any) => {
  if (obj.id === id) {
    {
      const alreadyPresentInParent = obj?.children?.find(
        (child: any) =>
          child.name === item.name && child.isFolder === item.isFolder
      );
      
      if (alreadyPresentInParent) {
        alert("This already exists over here..!");
        return;
      }

      const pathTillParent = obj.path;
      const newPath = [...pathTillParent, { name: item.name, link: item.id }];
      const newItem = { ...item, path: newPath };
      obj.children.push(newItem);
      return;
    }
  }
  for (let iterator in obj.children) {
    addFileFolderRecursive(obj.children[iterator], obj, id, item);
  }
};


const deleteFileFolderRecursive = (obj: any, parent: any, id: string) => {
  if (obj?.id === id) {
    {
      const newChildren = parent?.children.filter(
        (item: any) => item.id !== id
      );
      parent.children = newChildren;
      return;
    }
  }
  for (let iterator in obj.children) {
    if (obj && obj.children[iterator]) deleteFileFolderRecursive(obj.children[iterator], obj, id);
  }
};


const fileFolderReducer = (state = intitialState, action: any) => {

  switch (action.type) {
    case types.CREATE_ITEM:
      const { createInside, item } = action.payload;
      const newState = { ...state };
      addFileFolderRecursive(newState, newState, createInside, item);
      return newState;
    case types.DELETE_ITEM:
      const deleteThis = action.payload;
      const newState2 = { ...state };
      deleteFileFolderRecursive(newState2, state, deleteThis);
      return newState2;
  }

  return state;
};


export default fileFolderReducer;
