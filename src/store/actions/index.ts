import unsplash from "../../utils/unsplash";

//Action Creator

type NewFolderProps = {
  id: string;
  parentId: string;
  name: string;
  creator: string;
  type: "folder" | "file";
  date: Date;
  url: string;
  subFolders: [];
};

type NewRouteProps = {
  id: string;
  name: string;
  url: string;
};

export const addFolder = (folderDetails: NewFolderProps) => {
  return {
    type: "ADD_FOLDER",
    payload: folderDetails,
  };
};

export const removeFolder = (folderId: string) => {
  return {
    type: "REMOVE_FOLDER",
    payload: folderId,
  };
};

export const addRoute = (routeDetails: NewRouteProps) => {
  return {
    type: "ADD_ROUTE",
    payload: routeDetails,
  };
};

export const removeRoute = (folderId: string) => {
  return {
    type: "REMOVE_ROUTE",
    payload: folderId,
  };
};

export const showCreateFolderModal = () => {
  return {
    type: "SHOW_CREATE_FOLDER_MODAL",
  };
};

export const hideCreateFolderModal = () => {
  return {
    type: "HIDE_CREATE_FOLDER_MODAL",
  };
};

export const showFolderInfoModal = () => {
  return {
    type: "SHOW_FOLDER_INFO_MODAL",
  };
};

export const hideFolderInfoModal = () => {
  return {
    type: "HIDE_FOLDER_INFO_MODAL",
  };
};

export const setFolderInfoId = (folderId: string) => {
  return {
    type: "SET_FOLDER_INFO_ID",
    payload: folderId,
  };
};

export const showImageModal = () => {
  return {
    type: "SHOW_IMAGE_MODAL",
  };
};

export const hideImageModal = () => {
  return {
    type: "HIDE_IMAGE_MODAL",
  };
};

export const setImageUrl = (url : string) => {
  return {
    type: "SET_IMAGE_URL",
    payload: url
  }
}

export const fetchImages = () => {
  return async function (dispatch: any) {
    const response = await unsplash.get("photos", {
      params: {
        query: "dog",
        client_id: "iCJ88n7zrJEbDaDih1boz9UbAFAb3vXVitmfo6UNWek",
      },
    });

    dispatch({ type: "FETCH_IMAGES", payload: response.data });
  };
};
