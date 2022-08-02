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
      id: "iiebjdicdcfiejegecff",
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
          link: "iiebjdicdcfiejegecff",
        },
      ],
    },
    {
      name: "Desktop",
      id: "bgfbbebifhddaciacjec",
      isFolder: true,
      creator: "admin",
      type: "Default",
      children: [],
      isAdmin: true,
      createdAt: new Date().toLocaleString(),
      path: [
        {
          name: "root",
          link: "",
        },
        {
          name: "Desktop",
          link: "bgfbbebifhddaciacjec",
        },
      ],
    },
    {
      name: "Downloads",
      id: "jgjkhihjeeacdffggibk",
      isFolder: true,
      isAdmin: true,
      creator: "admin",
      type: "Default",
      children: [],
      createdAt: new Date().toLocaleString(),
      path: [
        {
          name: "root",
          link: "",
        },
        {
          name: "Downloads",
          link: "jgjkhihjeeacdffggibk",
        },
      ],
    },
    {
      name: "Documents",
      id: "bkbcecfjfhkgaefacjbj",
      isFolder: true,
      isAdmin: true,
      creator: "admin",
      type: "Default",
      children: [],
      createdAt: new Date().toLocaleString(),
      path: [
        {
          name: "root",
          link: "",
        },
        {
          name: "Documents",
          link: "bkbcecfjfhkgaefacjbj",
        },
      ],
    },
    {
      name: "Recycle Bin",
      id: "cfigkiedijfifahicekb",
      isFolder: true,
      isAdmin: true,
      children: [],
      creator: "admin",
      type: "Default",
      createdAt: new Date().toLocaleString(),
      path: [
        {
          name: "root",
          link: "",
        },
        {
          name: "Recycle Bin",
          link: "cfigkiedijfifahicekb",
        },
      ],
    },
  ],
};
const addRecursive = (obj: any, parent: any, id: string, item: any) => {
  if (obj.id === id) {
    {
      console.log(obj, parent, id);
      const alreadyPresentInParent = obj?.children?.find(
        (child: any) =>
          child.name === item.name && child.isFolder === item.isFolder
      );
      if (alreadyPresentInParent) {
        alert("already present");
        return;
      }
      const pathTillParent = obj.path;
      const newPath = [...pathTillParent, { name: item.name, link: item.id }];
      const newItem = { ...item, path: newPath };
      obj.children.push(newItem);
      return;
    }
  }
  for (var k in obj.children) {
    addRecursive(obj.children[k], obj, id, item);
  }
};

const deleteRecursive = (obj: any, parent: any, id: string) => {
  if (obj?.id === id) {
    {
      const newChildren = parent?.children.filter(
        (item: any) => item.id !== id
      );
      parent.children = newChildren;
      return;
    }
  }
  for (var k in obj.children) {
    if (obj && obj.children[k]) deleteRecursive(obj.children[k], obj, id);
  }
};
const fileFolderReducer = (state = intitialState, action: any) => {
  switch (action.type) {
    case types.CREATE_ITEM:
      const { createInside, item } = action.payload;
      const newState = { ...state };
      addRecursive(newState, newState, createInside, item);
      // localStorage.setItem("fileFolder", JSON.stringify(newState));
      return newState;
    case types.DELETE_ITEM:
      const deleteThis = action.payload;
      const newState2 = { ...state };
      deleteRecursive(newState2, state, deleteThis);
      // localStorage.setItem("fileFolder", JSON.stringify(newState2));
      return newState2;
  }
  return state;
};
export default fileFolderReducer;
