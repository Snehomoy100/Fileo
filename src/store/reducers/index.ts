import { AnyAction, combineReducers } from "redux";

const InitialFolders = {
  id: "0",
  name: "root",
  url: "/root",
  creator: "Jayesh",
  type: "folder",
  date: new Date(),
  subFolders: [],
};

const InitialRoutes = [{ id: "0", name: "root", url: "/root", type: "folder" }];

const findIdAndAddFolder = (id: string, newLocation: any, data: any) => {
  if (newLocation.id === id) {
    newLocation.subFolders.push(data);
    return newLocation;
  } else {
    if (newLocation.subFolders.length > 0) {
      for (var i = 0; i < newLocation.subFolders.length; i++) {
        findIdAndAddFolder(id, newLocation.subFolders[i], data);
      }
    }
  }
  return newLocation;
};

const findIdAndRemoveFolder = (id: string, folders: any) => {
  if (folders.subFolders.length > 0) {
    folders.subFolders = folders.subFolders.filter((element: any) => {
      findIdAndRemoveFolder(id, element);
      return element.id !== id;
    });
  }

  return folders;
};

const FoldersReducer = (folders = InitialFolders, action: AnyAction) => {
  if (action.type === "ADD_FOLDER") {
    const { parentId, id, name, url, creator, type, subFolders, date } =
      action.payload;
    const newFolders = folders;
    findIdAndAddFolder(parentId, newFolders, {
      id,
      name,
      url,
      creator,
      type,
      date,
      subFolders,
    });
    return { ...newFolders };
  } else if (action.type === "REMOVE_FOLDER") {
    const newFolders = findIdAndRemoveFolder(action.payload, folders);
    return { ...newFolders };
  }

  return folders;
};

const RoutesReducer = (routes = InitialRoutes, action: AnyAction) => {
  if (action.type === "ADD_ROUTE") {
    return [...routes, action.payload];
  } else if (action.type === "REMOVE_ROUTE") {
    const newRoutes = routes.filter((element) => element.url.slice(0, action.payload.length) !== action.payload);
    return [...newRoutes];
  }

  return routes;
};

const CreateFolderModalReducer = (
  showCreateFolder = false,
  action: AnyAction
) => {
  if (action.type === "SHOW_CREATE_FOLDER_MODAL") {
    return true;
  } else if (action.type === "HIDE_CREATE_FOLDER_MODAL") {
    return false;
  }

  return showCreateFolder;
};

const FolderInfoModalReducer = (showFolderInfo = false, action: AnyAction) => {
  if (action.type === "SHOW_FOLDER_INFO_MODAL") {
    return true;
  } else if (action.type === "HIDE_FOLDER_INFO_MODAL") {
    return false;
  }

  return showFolderInfo;
};

const FolderInfoIdReducer = (folderInfoId = "0", action: AnyAction) => {
  if (action.type === "SET_FOLDER_INFO_ID") {
    return action.payload;
  }

  return folderInfoId;
};

const initialImages = [
  {
    id: "Mv9hjnEUHR4",
    created_at: "2018-02-05T16:58:13Z",
    updated_at: "2022-07-27T20:02:46Z",
    promoted_at: "2018-02-06T12:32:01Z",
    width: 3024,
    height: 4032,
    color: "#f3c00c",
    blur_hash: "LlMiSjxB^ct5}%NfItWC%KskIsj[",
    description: "Toshi wearing a knit sweater.",
    alt_description: "black pug with gray knit scarf",
    urls: {
      raw: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80",
      regular:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1517849845537-4d257902454a",
    },
    links: {
      self: "https://api.unsplash.com/photos/Mv9hjnEUHR4",
      html: "https://unsplash.com/photos/Mv9hjnEUHR4",
      download:
        "https://unsplash.com/photos/Mv9hjnEUHR4/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
      download_location:
        "https://api.unsplash.com/photos/Mv9hjnEUHR4/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
    },
    categories: [],
    likes: 2634,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      animals: {
        status: "approved",
        approved_on: "2020-04-06T14:20:16Z",
      },
    },
    user: {
      id: "mA08QQzQf8Y",
      updated_at: "2022-07-28T15:01:34Z",
      username: "charlesdeluvio",
      name: "charlesdeluvio",
      first_name: "charlesdeluvio",
      last_name: null,
      twitter_username: null,
      portfolio_url: null,
      bio: "Graphic designer",
      location: "Montreal",
      links: {
        self: "https://api.unsplash.com/users/charlesdeluvio",
        html: "https://unsplash.com/@charlesdeluvio",
        photos: "https://api.unsplash.com/users/charlesdeluvio/photos",
        likes: "https://api.unsplash.com/users/charlesdeluvio/likes",
        portfolio: "https://api.unsplash.com/users/charlesdeluvio/portfolio",
        following: "https://api.unsplash.com/users/charlesdeluvio/following",
        followers: "https://api.unsplash.com/users/charlesdeluvio/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1515694660956-9133b2f53e3b?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1515694660956-9133b2f53e3b?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1515694660956-9133b2f53e3b?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: null,
      total_collections: 134,
      total_likes: 5232,
      total_photos: 675,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: null,
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null,
      },
    },
    tags: [
      {
        type: "landing_page",
        title: "dog",
        source: {
          ancestry: {
            type: {
              slug: "images",
              pretty_slug: "Images",
            },
            category: {
              slug: "animals",
              pretty_slug: "Animals",
            },
            subcategory: {
              slug: "dog",
              pretty_slug: "Dog",
            },
          },
          title: "Dog images & pictures",
          subtitle: "Download free dog images",
          description:
            "Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
          meta_title: "Dog Pictures | Download Free Images on Unsplash",
          meta_description:
            "Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.",
          cover_photo: {
            id: "tGBRQw52Thw",
            created_at: "2018-01-19T09:20:08-05:00",
            updated_at: "2022-07-04T12:02:35-04:00",
            promoted_at: "2018-01-20T05:59:48-05:00",
            width: 3264,
            height: 4896,
            color: "#262626",
            blur_hash: "LQDcH.smX9NH_NNG%LfQx^Rk-pj@",
            description: "Dog day out",
            alt_description: "short-coated brown dog",
            urls: {
              raw: "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516371535707-512a1e83bb9a",
            },
            links: {
              self: "https://api.unsplash.com/photos/tGBRQw52Thw",
              html: "https://unsplash.com/photos/tGBRQw52Thw",
              download: "https://unsplash.com/photos/tGBRQw52Thw/download",
              download_location:
                "https://api.unsplash.com/photos/tGBRQw52Thw/download",
            },
            categories: [],
            likes: 679,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {},
            user: {
              id: "toGyhBVt2M4",
              updated_at: "2022-07-04T16:45:08-04:00",
              username: "fredrikohlander",
              name: "Fredrik Öhlander",
              first_name: "Fredrik",
              last_name: "Öhlander",
              twitter_username: null,
              portfolio_url: null,
              bio: "fredrikohlander@gmail.com\r\n\r\n",
              location: "El Stockholmo, Sweden",
              links: {
                self: "https://api.unsplash.com/users/fredrikohlander",
                html: "https://unsplash.com/@fredrikohlander",
                photos: "https://api.unsplash.com/users/fredrikohlander/photos",
                likes: "https://api.unsplash.com/users/fredrikohlander/likes",
                portfolio:
                  "https://api.unsplash.com/users/fredrikohlander/portfolio",
                following:
                  "https://api.unsplash.com/users/fredrikohlander/following",
                followers:
                  "https://api.unsplash.com/users/fredrikohlander/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: "fredrikohlander",
              total_collections: 10,
              total_likes: 36,
              total_photos: 166,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: "fredrikohlander",
                portfolio_url: null,
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
        },
      },
      {
        type: "landing_page",
        title: "animal",
        source: {
          ancestry: {
            type: {
              slug: "images",
              pretty_slug: "Images",
            },
            category: {
              slug: "animals",
              pretty_slug: "Animals",
            },
          },
          title: "Animals images & pictures",
          subtitle: "Download free animals images",
          description:
            "Passionate photographers have captured the most gorgeous animals in the world in their natural habitats and shared them with Unsplash. Now you can use these photos however you wish, for free!",
          meta_title:
            "Best 20+ Animals Pictures [HD] | Download Free Images on Unsplash",
          meta_description:
            "Choose from hundreds of free animals pictures. Download HD animals photos for free on Unsplash.",
          cover_photo: {
            id: "YozNeHM8MaA",
            created_at: "2017-04-18T17:00:04Z",
            updated_at: "2022-07-25T05:01:21Z",
            promoted_at: "2017-04-19T17:54:55Z",
            width: 5184,
            height: 3456,
            color: "#f3f3c0",
            blur_hash: "LPR{0ext~pIU%MRQM{%M%LozIBM|",
            description:
              "I met this dude on safari in Kruger National park in northern South Africa. The giraffes were easily in my favorite creatures to witness. They seemed almost prehistoric the the way the graced the African plain.",
            alt_description: "selective focus photography of giraffe",
            urls: {
              raw: "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1492534513006-37715f336a39",
            },
            links: {
              self: "https://api.unsplash.com/photos/YozNeHM8MaA",
              html: "https://unsplash.com/photos/YozNeHM8MaA",
              download: "https://unsplash.com/photos/YozNeHM8MaA/download",
              download_location:
                "https://api.unsplash.com/photos/YozNeHM8MaA/download",
            },
            categories: [],
            likes: 1500,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              animals: {
                status: "approved",
                approved_on: "2021-06-09T15:10:40Z",
              },
            },
            user: {
              id: "J6cg9TA8-e8",
              updated_at: "2022-07-24T19:25:25-04:00",
              username: "judahlegge",
              name: "Judah Legge",
              first_name: "Judah",
              last_name: "Legge",
              twitter_username: null,
              portfolio_url: null,
              bio: null,
              location: null,
              links: {
                self: "https://api.unsplash.com/users/judahlegge",
                html: "https://unsplash.com/@judahlegge",
                photos: "https://api.unsplash.com/users/judahlegge/photos",
                likes: "https://api.unsplash.com/users/judahlegge/likes",
                portfolio:
                  "https://api.unsplash.com/users/judahlegge/portfolio",
                following:
                  "https://api.unsplash.com/users/judahlegge/following",
                followers:
                  "https://api.unsplash.com/users/judahlegge/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: null,
              total_collections: 0,
              total_likes: 4,
              total_photos: 1,
              accepted_tos: false,
              for_hire: false,
              social: {
                instagram_username: null,
                portfolio_url: null,
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
        },
      },
      {
        type: "search",
        title: "pet",
      },
    ],
  },
  {
    id: "Sg3XwuEpybU",
    created_at: "2019-03-08T14:04:22Z",
    updated_at: "2022-07-27T21:05:49Z",
    promoted_at: "2019-03-11T10:12:41Z",
    width: 3742,
    height: 6000,
    color: "#402626",
    blur_hash: "LKF=s[8_Os%MO[IAWrxu?^Mx-:tR",
    description: "Happy Women’s Day!",
    alt_description: "yellow Labrador retriever biting yellow tulip flower",
    urls: {
      raw: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1552053831-71594a27632d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80",
      regular:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1552053831-71594a27632d",
    },
    links: {
      self: "https://api.unsplash.com/photos/Sg3XwuEpybU",
      html: "https://unsplash.com/photos/Sg3XwuEpybU",
      download:
        "https://unsplash.com/photos/Sg3XwuEpybU/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
      download_location:
        "https://api.unsplash.com/photos/Sg3XwuEpybU/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
    },
    categories: [],
    likes: 1678,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "y9oEVbc-NAE",
      updated_at: "2022-07-28T04:56:15Z",
      username: "richardbrutyo",
      name: "Richard Brutyo",
      first_name: "Richard",
      last_name: "Brutyo",
      twitter_username: null,
      portfolio_url: null,
      bio: "instagram: richardbrutyo\r\n",
      location: "Szeged",
      links: {
        self: "https://api.unsplash.com/users/richardbrutyo",
        html: "https://unsplash.com/@richardbrutyo",
        photos: "https://api.unsplash.com/users/richardbrutyo/photos",
        likes: "https://api.unsplash.com/users/richardbrutyo/likes",
        portfolio: "https://api.unsplash.com/users/richardbrutyo/portfolio",
        following: "https://api.unsplash.com/users/richardbrutyo/following",
        followers: "https://api.unsplash.com/users/richardbrutyo/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1549929411753-5b10f8c9b0fb?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1549929411753-5b10f8c9b0fb?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1549929411753-5b10f8c9b0fb?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "richardbrutyo",
      total_collections: 0,
      total_likes: 1,
      total_photos: 21,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: "richardbrutyo",
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null,
      },
    },
    tags: [
      {
        type: "landing_page",
        title: "dog",
        source: {
          ancestry: {
            type: {
              slug: "images",
              pretty_slug: "Images",
            },
            category: {
              slug: "animals",
              pretty_slug: "Animals",
            },
            subcategory: {
              slug: "dog",
              pretty_slug: "Dog",
            },
          },
          title: "Dog images & pictures",
          subtitle: "Download free dog images",
          description:
            "Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
          meta_title: "Dog Pictures | Download Free Images on Unsplash",
          meta_description:
            "Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.",
          cover_photo: {
            id: "tGBRQw52Thw",
            created_at: "2018-01-19T09:20:08-05:00",
            updated_at: "2022-07-04T12:02:35-04:00",
            promoted_at: "2018-01-20T05:59:48-05:00",
            width: 3264,
            height: 4896,
            color: "#262626",
            blur_hash: "LQDcH.smX9NH_NNG%LfQx^Rk-pj@",
            description: "Dog day out",
            alt_description: "short-coated brown dog",
            urls: {
              raw: "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516371535707-512a1e83bb9a",
            },
            links: {
              self: "https://api.unsplash.com/photos/tGBRQw52Thw",
              html: "https://unsplash.com/photos/tGBRQw52Thw",
              download: "https://unsplash.com/photos/tGBRQw52Thw/download",
              download_location:
                "https://api.unsplash.com/photos/tGBRQw52Thw/download",
            },
            categories: [],
            likes: 679,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {},
            user: {
              id: "toGyhBVt2M4",
              updated_at: "2022-07-04T16:45:08-04:00",
              username: "fredrikohlander",
              name: "Fredrik Öhlander",
              first_name: "Fredrik",
              last_name: "Öhlander",
              twitter_username: null,
              portfolio_url: null,
              bio: "fredrikohlander@gmail.com\r\n\r\n",
              location: "El Stockholmo, Sweden",
              links: {
                self: "https://api.unsplash.com/users/fredrikohlander",
                html: "https://unsplash.com/@fredrikohlander",
                photos: "https://api.unsplash.com/users/fredrikohlander/photos",
                likes: "https://api.unsplash.com/users/fredrikohlander/likes",
                portfolio:
                  "https://api.unsplash.com/users/fredrikohlander/portfolio",
                following:
                  "https://api.unsplash.com/users/fredrikohlander/following",
                followers:
                  "https://api.unsplash.com/users/fredrikohlander/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: "fredrikohlander",
              total_collections: 10,
              total_likes: 36,
              total_photos: 166,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: "fredrikohlander",
                portfolio_url: null,
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
        },
      },
      {
        type: "landing_page",
        title: "animal",
        source: {
          ancestry: {
            type: {
              slug: "images",
              pretty_slug: "Images",
            },
            category: {
              slug: "animals",
              pretty_slug: "Animals",
            },
          },
          title: "Animals images & pictures",
          subtitle: "Download free animals images",
          description:
            "Passionate photographers have captured the most gorgeous animals in the world in their natural habitats and shared them with Unsplash. Now you can use these photos however you wish, for free!",
          meta_title:
            "Best 20+ Animals Pictures [HD] | Download Free Images on Unsplash",
          meta_description:
            "Choose from hundreds of free animals pictures. Download HD animals photos for free on Unsplash.",
          cover_photo: {
            id: "YozNeHM8MaA",
            created_at: "2017-04-18T17:00:04Z",
            updated_at: "2022-07-25T05:01:21Z",
            promoted_at: "2017-04-19T17:54:55Z",
            width: 5184,
            height: 3456,
            color: "#f3f3c0",
            blur_hash: "LPR{0ext~pIU%MRQM{%M%LozIBM|",
            description:
              "I met this dude on safari in Kruger National park in northern South Africa. The giraffes were easily in my favorite creatures to witness. They seemed almost prehistoric the the way the graced the African plain.",
            alt_description: "selective focus photography of giraffe",
            urls: {
              raw: "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1492534513006-37715f336a39",
            },
            links: {
              self: "https://api.unsplash.com/photos/YozNeHM8MaA",
              html: "https://unsplash.com/photos/YozNeHM8MaA",
              download: "https://unsplash.com/photos/YozNeHM8MaA/download",
              download_location:
                "https://api.unsplash.com/photos/YozNeHM8MaA/download",
            },
            categories: [],
            likes: 1500,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              animals: {
                status: "approved",
                approved_on: "2021-06-09T15:10:40Z",
              },
            },
            user: {
              id: "J6cg9TA8-e8",
              updated_at: "2022-07-24T19:25:25-04:00",
              username: "judahlegge",
              name: "Judah Legge",
              first_name: "Judah",
              last_name: "Legge",
              twitter_username: null,
              portfolio_url: null,
              bio: null,
              location: null,
              links: {
                self: "https://api.unsplash.com/users/judahlegge",
                html: "https://unsplash.com/@judahlegge",
                photos: "https://api.unsplash.com/users/judahlegge/photos",
                likes: "https://api.unsplash.com/users/judahlegge/likes",
                portfolio:
                  "https://api.unsplash.com/users/judahlegge/portfolio",
                following:
                  "https://api.unsplash.com/users/judahlegge/following",
                followers:
                  "https://api.unsplash.com/users/judahlegge/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: null,
              total_collections: 0,
              total_likes: 4,
              total_photos: 1,
              accepted_tos: false,
              for_hire: false,
              social: {
                instagram_username: null,
                portfolio_url: null,
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
        },
      },
    ],
  },
  {
    id: "N04FIfHhv_k",
    created_at: "2019-06-20T13:30:15Z",
    updated_at: "2022-07-28T10:07:30Z",
    promoted_at: "2019-06-22T05:43:24Z",
    width: 6000,
    height: 4000,
    color: "#f3d9c0",
    blur_hash: "LTPFZU?H}[4:RQofW-of?aNGE1%2",
    description:
      "Jack Russell Terrier for PuppyHero.com: puppyhero.com/breed/jack-russell-terrier",
    alt_description: "black and white short coated dog",
    urls: {
      raw: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwzfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwzfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80",
      regular:
        "https://images.unsplash.com/photo-1561037404-61cd46aa615b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwzfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1561037404-61cd46aa615b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwzfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1561037404-61cd46aa615b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwzfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1561037404-61cd46aa615b",
    },
    links: {
      self: "https://api.unsplash.com/photos/N04FIfHhv_k",
      html: "https://unsplash.com/photos/N04FIfHhv_k",
      download:
        "https://unsplash.com/photos/N04FIfHhv_k/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwzfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
      download_location:
        "https://api.unsplash.com/photos/N04FIfHhv_k/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwzfHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
    },
    categories: [],
    likes: 1005,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "23l-A2OoQPo",
      updated_at: "2022-07-28T14:26:30Z",
      username: "victor_vector",
      name: "Victor Grabarczyk",
      first_name: "Victor",
      last_name: "Grabarczyk",
      twitter_username: null,
      portfolio_url: "http://www.victorgphotography.com",
      bio: "Dogs & Stuff",
      location: "Poznan - Poland",
      links: {
        self: "https://api.unsplash.com/users/victor_vector",
        html: "https://unsplash.com/@victor_vector",
        photos: "https://api.unsplash.com/users/victor_vector/photos",
        likes: "https://api.unsplash.com/users/victor_vector/likes",
        portfolio: "https://api.unsplash.com/users/victor_vector/portfolio",
        following: "https://api.unsplash.com/users/victor_vector/following",
        followers: "https://api.unsplash.com/users/victor_vector/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1633884887146-23da78e3d314image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1633884887146-23da78e3d314image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1633884887146-23da78e3d314image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 55,
      total_photos: 400,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: null,
        portfolio_url: "http://www.victorgphotography.com",
        twitter_username: null,
        paypal_email: null,
      },
    },
    tags: [
      {
        type: "landing_page",
        title: "dog",
        source: {
          ancestry: {
            type: {
              slug: "images",
              pretty_slug: "Images",
            },
            category: {
              slug: "animals",
              pretty_slug: "Animals",
            },
            subcategory: {
              slug: "dog",
              pretty_slug: "Dog",
            },
          },
          title: "Dog images & pictures",
          subtitle: "Download free dog images",
          description:
            "Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
          meta_title: "Dog Pictures | Download Free Images on Unsplash",
          meta_description:
            "Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.",
          cover_photo: {
            id: "tGBRQw52Thw",
            created_at: "2018-01-19T09:20:08-05:00",
            updated_at: "2022-07-04T12:02:35-04:00",
            promoted_at: "2018-01-20T05:59:48-05:00",
            width: 3264,
            height: 4896,
            color: "#262626",
            blur_hash: "LQDcH.smX9NH_NNG%LfQx^Rk-pj@",
            description: "Dog day out",
            alt_description: "short-coated brown dog",
            urls: {
              raw: "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516371535707-512a1e83bb9a",
            },
            links: {
              self: "https://api.unsplash.com/photos/tGBRQw52Thw",
              html: "https://unsplash.com/photos/tGBRQw52Thw",
              download: "https://unsplash.com/photos/tGBRQw52Thw/download",
              download_location:
                "https://api.unsplash.com/photos/tGBRQw52Thw/download",
            },
            categories: [],
            likes: 679,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {},
            user: {
              id: "toGyhBVt2M4",
              updated_at: "2022-07-04T16:45:08-04:00",
              username: "fredrikohlander",
              name: "Fredrik Öhlander",
              first_name: "Fredrik",
              last_name: "Öhlander",
              twitter_username: null,
              portfolio_url: null,
              bio: "fredrikohlander@gmail.com\r\n\r\n",
              location: "El Stockholmo, Sweden",
              links: {
                self: "https://api.unsplash.com/users/fredrikohlander",
                html: "https://unsplash.com/@fredrikohlander",
                photos: "https://api.unsplash.com/users/fredrikohlander/photos",
                likes: "https://api.unsplash.com/users/fredrikohlander/likes",
                portfolio:
                  "https://api.unsplash.com/users/fredrikohlander/portfolio",
                following:
                  "https://api.unsplash.com/users/fredrikohlander/following",
                followers:
                  "https://api.unsplash.com/users/fredrikohlander/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: "fredrikohlander",
              total_collections: 10,
              total_likes: 36,
              total_photos: 166,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: "fredrikohlander",
                portfolio_url: null,
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
        },
      },
    ],
  },
  {
    id: "2l0CWTpcChI",
    created_at: "2018-11-29T04:47:27Z",
    updated_at: "2022-07-28T04:04:53Z",
    promoted_at: null,
    width: 4032,
    height: 3024,
    color: "#a68c73",
    blur_hash: "LII|:hM{k7R*0eof9vNGJ~oMR+bI",
    description: null,
    alt_description: "dog's face",
    urls: {
      raw: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw0fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw0fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80",
      regular:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw0fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw0fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw0fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1543466835-00a7907e9de1",
    },
    links: {
      self: "https://api.unsplash.com/photos/2l0CWTpcChI",
      html: "https://unsplash.com/photos/2l0CWTpcChI",
      download:
        "https://unsplash.com/photos/2l0CWTpcChI/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw0fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
      download_location:
        "https://api.unsplash.com/photos/2l0CWTpcChI/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw0fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
    },
    categories: [],
    likes: 575,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "EPh4ZPVIc6U",
      updated_at: "2022-07-28T14:21:34Z",
      username: "marliesebrandsma",
      name: "Marliese Streefland",
      first_name: "Marliese",
      last_name: "Streefland",
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: null,
      links: {
        self: "https://api.unsplash.com/users/marliesebrandsma",
        html: "https://unsplash.com/@marliesebrandsma",
        photos: "https://api.unsplash.com/users/marliesebrandsma/photos",
        likes: "https://api.unsplash.com/users/marliesebrandsma/likes",
        portfolio: "https://api.unsplash.com/users/marliesebrandsma/portfolio",
        following: "https://api.unsplash.com/users/marliesebrandsma/following",
        followers: "https://api.unsplash.com/users/marliesebrandsma/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 283,
      total_photos: 14,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: null,
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null,
      },
    },
    tags: [],
  },
  {
    id: "yihlaRCCvd4",
    created_at: "2018-06-29T14:15:36Z",
    updated_at: "2022-07-28T11:04:05Z",
    promoted_at: "2018-06-30T14:58:13Z",
    width: 4016,
    height: 6016,
    color: "#f3f3f3",
    blur_hash: "L$Nm~Ht7tlof~VaeV@fk%gogaKax",
    description:
      "Nova Scotia Duck Tolling Retriever for PuppyHero.com:\nhttps://puppyhero.com/breed/nova-scotia-duck-tolling-retriever",
    alt_description: "dog running on beach during daytime",
    urls: {
      raw: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80",
      regular:
        "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1530281700549-e82e7bf110d6",
    },
    links: {
      self: "https://api.unsplash.com/photos/yihlaRCCvd4",
      html: "https://unsplash.com/photos/yihlaRCCvd4",
      download:
        "https://unsplash.com/photos/yihlaRCCvd4/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
      download_location:
        "https://api.unsplash.com/photos/yihlaRCCvd4/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
    },
    categories: [],
    likes: 1459,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "3kpmmkI-Gco",
      updated_at: "2022-07-28T14:21:33Z",
      username: "o5ky",
      name: "Oscar Sutton",
      first_name: "Oscar",
      last_name: "Sutton",
      twitter_username: "o5ky",
      portfolio_url: "https://www.instagram.com/o5ky/",
      bio: "I am an amature photographer who has a passion for getting the perfect shot.",
      location: "UK",
      links: {
        self: "https://api.unsplash.com/users/o5ky",
        html: "https://unsplash.com/@o5ky",
        photos: "https://api.unsplash.com/users/o5ky/photos",
        likes: "https://api.unsplash.com/users/o5ky/likes",
        portfolio: "https://api.unsplash.com/users/o5ky/portfolio",
        following: "https://api.unsplash.com/users/o5ky/following",
        followers: "https://api.unsplash.com/users/o5ky/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1503663739871-e0806dbe6f23?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1503663739871-e0806dbe6f23?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1503663739871-e0806dbe6f23?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "O5ky",
      total_collections: 4,
      total_likes: 71,
      total_photos: 109,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: "O5ky",
        portfolio_url: "https://www.instagram.com/o5ky/",
        twitter_username: "o5ky",
        paypal_email: null,
      },
    },
    tags: [
      {
        type: "landing_page",
        title: "dog",
        source: {
          ancestry: {
            type: {
              slug: "images",
              pretty_slug: "Images",
            },
            category: {
              slug: "animals",
              pretty_slug: "Animals",
            },
            subcategory: {
              slug: "dog",
              pretty_slug: "Dog",
            },
          },
          title: "Dog images & pictures",
          subtitle: "Download free dog images",
          description:
            "Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
          meta_title: "Dog Pictures | Download Free Images on Unsplash",
          meta_description:
            "Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.",
          cover_photo: {
            id: "tGBRQw52Thw",
            created_at: "2018-01-19T09:20:08-05:00",
            updated_at: "2022-07-04T12:02:35-04:00",
            promoted_at: "2018-01-20T05:59:48-05:00",
            width: 3264,
            height: 4896,
            color: "#262626",
            blur_hash: "LQDcH.smX9NH_NNG%LfQx^Rk-pj@",
            description: "Dog day out",
            alt_description: "short-coated brown dog",
            urls: {
              raw: "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516371535707-512a1e83bb9a",
            },
            links: {
              self: "https://api.unsplash.com/photos/tGBRQw52Thw",
              html: "https://unsplash.com/photos/tGBRQw52Thw",
              download: "https://unsplash.com/photos/tGBRQw52Thw/download",
              download_location:
                "https://api.unsplash.com/photos/tGBRQw52Thw/download",
            },
            categories: [],
            likes: 679,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {},
            user: {
              id: "toGyhBVt2M4",
              updated_at: "2022-07-04T16:45:08-04:00",
              username: "fredrikohlander",
              name: "Fredrik Öhlander",
              first_name: "Fredrik",
              last_name: "Öhlander",
              twitter_username: null,
              portfolio_url: null,
              bio: "fredrikohlander@gmail.com\r\n\r\n",
              location: "El Stockholmo, Sweden",
              links: {
                self: "https://api.unsplash.com/users/fredrikohlander",
                html: "https://unsplash.com/@fredrikohlander",
                photos: "https://api.unsplash.com/users/fredrikohlander/photos",
                likes: "https://api.unsplash.com/users/fredrikohlander/likes",
                portfolio:
                  "https://api.unsplash.com/users/fredrikohlander/portfolio",
                following:
                  "https://api.unsplash.com/users/fredrikohlander/following",
                followers:
                  "https://api.unsplash.com/users/fredrikohlander/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: "fredrikohlander",
              total_collections: 10,
              total_likes: 36,
              total_photos: 166,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: "fredrikohlander",
                portfolio_url: null,
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
        },
      },
      {
        type: "landing_page",
        title: "animal",
        source: {
          ancestry: {
            type: {
              slug: "images",
              pretty_slug: "Images",
            },
            category: {
              slug: "animals",
              pretty_slug: "Animals",
            },
          },
          title: "Animals images & pictures",
          subtitle: "Download free animals images",
          description:
            "Passionate photographers have captured the most gorgeous animals in the world in their natural habitats and shared them with Unsplash. Now you can use these photos however you wish, for free!",
          meta_title:
            "Best 20+ Animals Pictures [HD] | Download Free Images on Unsplash",
          meta_description:
            "Choose from hundreds of free animals pictures. Download HD animals photos for free on Unsplash.",
          cover_photo: {
            id: "YozNeHM8MaA",
            created_at: "2017-04-18T17:00:04Z",
            updated_at: "2022-07-25T05:01:21Z",
            promoted_at: "2017-04-19T17:54:55Z",
            width: 5184,
            height: 3456,
            color: "#f3f3c0",
            blur_hash: "LPR{0ext~pIU%MRQM{%M%LozIBM|",
            description:
              "I met this dude on safari in Kruger National park in northern South Africa. The giraffes were easily in my favorite creatures to witness. They seemed almost prehistoric the the way the graced the African plain.",
            alt_description: "selective focus photography of giraffe",
            urls: {
              raw: "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1492534513006-37715f336a39",
            },
            links: {
              self: "https://api.unsplash.com/photos/YozNeHM8MaA",
              html: "https://unsplash.com/photos/YozNeHM8MaA",
              download: "https://unsplash.com/photos/YozNeHM8MaA/download",
              download_location:
                "https://api.unsplash.com/photos/YozNeHM8MaA/download",
            },
            categories: [],
            likes: 1500,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              animals: {
                status: "approved",
                approved_on: "2021-06-09T15:10:40Z",
              },
            },
            user: {
              id: "J6cg9TA8-e8",
              updated_at: "2022-07-24T19:25:25-04:00",
              username: "judahlegge",
              name: "Judah Legge",
              first_name: "Judah",
              last_name: "Legge",
              twitter_username: null,
              portfolio_url: null,
              bio: null,
              location: null,
              links: {
                self: "https://api.unsplash.com/users/judahlegge",
                html: "https://unsplash.com/@judahlegge",
                photos: "https://api.unsplash.com/users/judahlegge/photos",
                likes: "https://api.unsplash.com/users/judahlegge/likes",
                portfolio:
                  "https://api.unsplash.com/users/judahlegge/portfolio",
                following:
                  "https://api.unsplash.com/users/judahlegge/following",
                followers:
                  "https://api.unsplash.com/users/judahlegge/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: null,
              total_collections: 0,
              total_likes: 4,
              total_photos: 1,
              accepted_tos: false,
              for_hire: false,
              social: {
                instagram_username: null,
                portfolio_url: null,
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
        },
      },
      {
        type: "search",
        title: "pet",
      },
    ],
  },
  {
    id: "WX4i1Jq_o0Y",
    created_at: "2020-04-12T06:01:57Z",
    updated_at: "2022-07-28T05:11:20Z",
    promoted_at: null,
    width: 3596,
    height: 5368,
    color: "#262626",
    blur_hash: "LVCPCeM{0e-pNGofs:R*D*og-pM{",
    description: "Yellow Labrador Retriever Puppy in front of black backdrop",
    alt_description: "yellow labrador retriever puppy sitting on floor",
    urls: {
      raw: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw2fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw2fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80",
      regular:
        "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw2fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw2fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw2fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1586671267731-da2cf3ceeb80",
    },
    links: {
      self: "https://api.unsplash.com/photos/WX4i1Jq_o0Y",
      html: "https://unsplash.com/photos/WX4i1Jq_o0Y",
      download:
        "https://unsplash.com/photos/WX4i1Jq_o0Y/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw2fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
      download_location:
        "https://api.unsplash.com/photos/WX4i1Jq_o0Y/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw2fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
    },
    categories: [],
    likes: 464,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      animals: {
        status: "rejected",
      },
    },
    user: {
      id: "jn8LTrKpbwc",
      updated_at: "2022-07-28T14:21:34Z",
      username: "taylorkopel",
      name: "Taylor Kopel",
      first_name: "Taylor",
      last_name: "Kopel",
      twitter_username: null,
      portfolio_url: "https://taylorkopel.com",
      bio: "Hi, I'm Taylor.\r\nAvailable for commissions.",
      location: null,
      links: {
        self: "https://api.unsplash.com/users/taylorkopel",
        html: "https://unsplash.com/@taylorkopel",
        photos: "https://api.unsplash.com/users/taylorkopel/photos",
        likes: "https://api.unsplash.com/users/taylorkopel/likes",
        portfolio: "https://api.unsplash.com/users/taylorkopel/portfolio",
        following: "https://api.unsplash.com/users/taylorkopel/following",
        followers: "https://api.unsplash.com/users/taylorkopel/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1621536316534-696d8189ed1cimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1621536316534-696d8189ed1cimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1621536316534-696d8189ed1cimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "kowabungakope",
      total_collections: 7,
      total_likes: 53,
      total_photos: 31,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: "kowabungakope",
        portfolio_url: "https://taylorkopel.com",
        twitter_username: null,
        paypal_email: null,
      },
    },
    tags: [
      {
        type: "landing_page",
        title: "dog",
        source: {
          ancestry: {
            type: {
              slug: "images",
              pretty_slug: "Images",
            },
            category: {
              slug: "animals",
              pretty_slug: "Animals",
            },
            subcategory: {
              slug: "dog",
              pretty_slug: "Dog",
            },
          },
          title: "Dog images & pictures",
          subtitle: "Download free dog images",
          description:
            "Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
          meta_title: "Dog Pictures | Download Free Images on Unsplash",
          meta_description:
            "Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.",
          cover_photo: {
            id: "tGBRQw52Thw",
            created_at: "2018-01-19T09:20:08-05:00",
            updated_at: "2022-07-04T12:02:35-04:00",
            promoted_at: "2018-01-20T05:59:48-05:00",
            width: 3264,
            height: 4896,
            color: "#262626",
            blur_hash: "LQDcH.smX9NH_NNG%LfQx^Rk-pj@",
            description: "Dog day out",
            alt_description: "short-coated brown dog",
            urls: {
              raw: "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516371535707-512a1e83bb9a",
            },
            links: {
              self: "https://api.unsplash.com/photos/tGBRQw52Thw",
              html: "https://unsplash.com/photos/tGBRQw52Thw",
              download: "https://unsplash.com/photos/tGBRQw52Thw/download",
              download_location:
                "https://api.unsplash.com/photos/tGBRQw52Thw/download",
            },
            categories: [],
            likes: 679,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {},
            user: {
              id: "toGyhBVt2M4",
              updated_at: "2022-07-04T16:45:08-04:00",
              username: "fredrikohlander",
              name: "Fredrik Öhlander",
              first_name: "Fredrik",
              last_name: "Öhlander",
              twitter_username: null,
              portfolio_url: null,
              bio: "fredrikohlander@gmail.com\r\n\r\n",
              location: "El Stockholmo, Sweden",
              links: {
                self: "https://api.unsplash.com/users/fredrikohlander",
                html: "https://unsplash.com/@fredrikohlander",
                photos: "https://api.unsplash.com/users/fredrikohlander/photos",
                likes: "https://api.unsplash.com/users/fredrikohlander/likes",
                portfolio:
                  "https://api.unsplash.com/users/fredrikohlander/portfolio",
                following:
                  "https://api.unsplash.com/users/fredrikohlander/following",
                followers:
                  "https://api.unsplash.com/users/fredrikohlander/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: "fredrikohlander",
              total_collections: 10,
              total_likes: 36,
              total_photos: 166,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: "fredrikohlander",
                portfolio_url: null,
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
        },
      },
    ],
  },
  {
    id: "U3aF7hgUSrk",
    created_at: "2020-04-19T12:40:23Z",
    updated_at: "2022-07-28T12:14:30Z",
    promoted_at: null,
    width: 4272,
    height: 2848,
    color: "#d9f3f3",
    blur_hash: "LWLXSo-oE1Mx.TIVx]js?wxuRjt6",
    description: null,
    alt_description: "white and brown long coat large dog",
    urls: {
      raw: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw3fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw3fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80",
      regular:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw3fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw3fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw3fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1587300003388-59208cc962cb",
    },
    links: {
      self: "https://api.unsplash.com/photos/U3aF7hgUSrk",
      html: "https://unsplash.com/photos/U3aF7hgUSrk",
      download:
        "https://unsplash.com/photos/U3aF7hgUSrk/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw3fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
      download_location:
        "https://api.unsplash.com/photos/U3aF7hgUSrk/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw3fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
    },
    categories: [],
    likes: 497,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "6m34PEmi8l4",
      updated_at: "2022-07-28T10:56:25Z",
      username: "paulinel",
      name: "Pauline Loroy",
      first_name: "Pauline",
      last_name: "Loroy",
      twitter_username: "LoroyP",
      portfolio_url: "http://paulineloroy.be/",
      bio: "« Do you fall in love often ? »\r\n« Yes often. With a view, with a book, with a dog, a cat, with numbers, with friends, with complete strangers, with nothing at all » \r\n-Jeanette Winterson\r\n",
      location: "Namur Belgium",
      links: {
        self: "https://api.unsplash.com/users/paulinel",
        html: "https://unsplash.com/@paulinel",
        photos: "https://api.unsplash.com/users/paulinel/photos",
        likes: "https://api.unsplash.com/users/paulinel/likes",
        portfolio: "https://api.unsplash.com/users/paulinel/portfolio",
        following: "https://api.unsplash.com/users/paulinel/following",
        followers: "https://api.unsplash.com/users/paulinel/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1582755331500-ba666ad322a2image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1582755331500-ba666ad322a2image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1582755331500-ba666ad322a2image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "paulineloroy",
      total_collections: 41,
      total_likes: 194,
      total_photos: 87,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: "paulineloroy",
        portfolio_url: "http://paulineloroy.be/",
        twitter_username: "LoroyP",
        paypal_email: null,
      },
    },
    tags: [
      {
        type: "landing_page",
        title: "dog",
        source: {
          ancestry: {
            type: {
              slug: "images",
              pretty_slug: "Images",
            },
            category: {
              slug: "animals",
              pretty_slug: "Animals",
            },
            subcategory: {
              slug: "dog",
              pretty_slug: "Dog",
            },
          },
          title: "Dog images & pictures",
          subtitle: "Download free dog images",
          description:
            "Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
          meta_title: "Dog Pictures | Download Free Images on Unsplash",
          meta_description:
            "Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.",
          cover_photo: {
            id: "tGBRQw52Thw",
            created_at: "2018-01-19T09:20:08-05:00",
            updated_at: "2022-07-04T12:02:35-04:00",
            promoted_at: "2018-01-20T05:59:48-05:00",
            width: 3264,
            height: 4896,
            color: "#262626",
            blur_hash: "LQDcH.smX9NH_NNG%LfQx^Rk-pj@",
            description: "Dog day out",
            alt_description: "short-coated brown dog",
            urls: {
              raw: "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516371535707-512a1e83bb9a",
            },
            links: {
              self: "https://api.unsplash.com/photos/tGBRQw52Thw",
              html: "https://unsplash.com/photos/tGBRQw52Thw",
              download: "https://unsplash.com/photos/tGBRQw52Thw/download",
              download_location:
                "https://api.unsplash.com/photos/tGBRQw52Thw/download",
            },
            categories: [],
            likes: 679,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {},
            user: {
              id: "toGyhBVt2M4",
              updated_at: "2022-07-04T16:45:08-04:00",
              username: "fredrikohlander",
              name: "Fredrik Öhlander",
              first_name: "Fredrik",
              last_name: "Öhlander",
              twitter_username: null,
              portfolio_url: null,
              bio: "fredrikohlander@gmail.com\r\n\r\n",
              location: "El Stockholmo, Sweden",
              links: {
                self: "https://api.unsplash.com/users/fredrikohlander",
                html: "https://unsplash.com/@fredrikohlander",
                photos: "https://api.unsplash.com/users/fredrikohlander/photos",
                likes: "https://api.unsplash.com/users/fredrikohlander/likes",
                portfolio:
                  "https://api.unsplash.com/users/fredrikohlander/portfolio",
                following:
                  "https://api.unsplash.com/users/fredrikohlander/following",
                followers:
                  "https://api.unsplash.com/users/fredrikohlander/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: "fredrikohlander",
              total_collections: 10,
              total_likes: 36,
              total_photos: 166,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: "fredrikohlander",
                portfolio_url: null,
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
        },
      },
      {
        type: "landing_page",
        title: "animal",
        source: {
          ancestry: {
            type: {
              slug: "images",
              pretty_slug: "Images",
            },
            category: {
              slug: "animals",
              pretty_slug: "Animals",
            },
          },
          title: "Animals images & pictures",
          subtitle: "Download free animals images",
          description:
            "Passionate photographers have captured the most gorgeous animals in the world in their natural habitats and shared them with Unsplash. Now you can use these photos however you wish, for free!",
          meta_title:
            "Best 20+ Animals Pictures [HD] | Download Free Images on Unsplash",
          meta_description:
            "Choose from hundreds of free animals pictures. Download HD animals photos for free on Unsplash.",
          cover_photo: {
            id: "YozNeHM8MaA",
            created_at: "2017-04-18T17:00:04Z",
            updated_at: "2022-07-25T05:01:21Z",
            promoted_at: "2017-04-19T17:54:55Z",
            width: 5184,
            height: 3456,
            color: "#f3f3c0",
            blur_hash: "LPR{0ext~pIU%MRQM{%M%LozIBM|",
            description:
              "I met this dude on safari in Kruger National park in northern South Africa. The giraffes were easily in my favorite creatures to witness. They seemed almost prehistoric the the way the graced the African plain.",
            alt_description: "selective focus photography of giraffe",
            urls: {
              raw: "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1492534513006-37715f336a39",
            },
            links: {
              self: "https://api.unsplash.com/photos/YozNeHM8MaA",
              html: "https://unsplash.com/photos/YozNeHM8MaA",
              download: "https://unsplash.com/photos/YozNeHM8MaA/download",
              download_location:
                "https://api.unsplash.com/photos/YozNeHM8MaA/download",
            },
            categories: [],
            likes: 1500,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              animals: {
                status: "approved",
                approved_on: "2021-06-09T15:10:40Z",
              },
            },
            user: {
              id: "J6cg9TA8-e8",
              updated_at: "2022-07-24T19:25:25-04:00",
              username: "judahlegge",
              name: "Judah Legge",
              first_name: "Judah",
              last_name: "Legge",
              twitter_username: null,
              portfolio_url: null,
              bio: null,
              location: null,
              links: {
                self: "https://api.unsplash.com/users/judahlegge",
                html: "https://unsplash.com/@judahlegge",
                photos: "https://api.unsplash.com/users/judahlegge/photos",
                likes: "https://api.unsplash.com/users/judahlegge/likes",
                portfolio:
                  "https://api.unsplash.com/users/judahlegge/portfolio",
                following:
                  "https://api.unsplash.com/users/judahlegge/following",
                followers:
                  "https://api.unsplash.com/users/judahlegge/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: null,
              total_collections: 0,
              total_likes: 4,
              total_photos: 1,
              accepted_tos: false,
              for_hire: false,
              social: {
                instagram_username: null,
                portfolio_url: null,
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
        },
      },
    ],
  },
  {
    id: "NE0XGVKTmcA",
    created_at: "2020-03-06T16:39:37Z",
    updated_at: "2022-07-27T15:24:05Z",
    promoted_at: null,
    width: 2832,
    height: 2832,
    color: "#d9a640",
    blur_hash: "LFPq[WE1~0%1^*oHIpNL~NM}5Eoe",
    description: "Sleepy\n",
    alt_description: "brown french bulldog puppy lying on yellow textile",
    urls: {
      raw: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw4fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw4fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80",
      regular:
        "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw4fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw4fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw4fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1583512603805-3cc6b41f3edb",
    },
    links: {
      self: "https://api.unsplash.com/photos/NE0XGVKTmcA",
      html: "https://unsplash.com/photos/NE0XGVKTmcA",
      download:
        "https://unsplash.com/photos/NE0XGVKTmcA/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw4fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
      download_location:
        "https://api.unsplash.com/photos/NE0XGVKTmcA/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw4fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
    },
    categories: [],
    likes: 750,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "dg4S8j5TzmE",
      updated_at: "2022-07-28T14:41:31Z",
      username: "karsten116",
      name: "Karsten Winegeart",
      first_name: "Karsten",
      last_name: "Winegeart",
      twitter_username: "karsten116",
      portfolio_url: null,
      bio: "IG - @karsten116",
      location: "Austin Texas",
      links: {
        self: "https://api.unsplash.com/users/karsten116",
        html: "https://unsplash.com/@karsten116",
        photos: "https://api.unsplash.com/users/karsten116/photos",
        likes: "https://api.unsplash.com/users/karsten116/likes",
        portfolio: "https://api.unsplash.com/users/karsten116/portfolio",
        following: "https://api.unsplash.com/users/karsten116/following",
        followers: "https://api.unsplash.com/users/karsten116/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1583427783052-3da8ceab5579image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1583427783052-3da8ceab5579image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1583427783052-3da8ceab5579image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "karsten116",
      total_collections: 1,
      total_likes: 404,
      total_photos: 566,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: "karsten116",
        portfolio_url: null,
        twitter_username: "karsten116",
        paypal_email: null,
      },
    },
    tags: [],
  },
  {
    id: "brFsZ7qszSY",
    created_at: "2018-09-17T02:33:59Z",
    updated_at: "2022-07-28T02:04:16Z",
    promoted_at: null,
    width: 2568,
    height: 3876,
    color: "#d97326",
    blur_hash: "LBOcsh%1_iRP*{M|TxtQ[WjbBnoL",
    description: null,
    alt_description: "short-coated brown and white puppy sitting on floor",
    urls: {
      raw: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw5fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw5fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80",
      regular:
        "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw5fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw5fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw5fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx&ixlib=rb-1.2.1&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1537151625747-768eb6cf92b2",
    },
    links: {
      self: "https://api.unsplash.com/photos/brFsZ7qszSY",
      html: "https://unsplash.com/photos/brFsZ7qszSY",
      download:
        "https://unsplash.com/photos/brFsZ7qszSY/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw5fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
      download_location:
        "https://api.unsplash.com/photos/brFsZ7qszSY/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHw5fHxkb2d8ZW58MHx8fHwxNjU5MDIwNTQx",
    },
    categories: [],
    likes: 577,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "1LMzZNX562k",
      updated_at: "2022-07-28T14:26:30Z",
      username: "alvannee",
      name: "Alvan Nee",
      first_name: "Alvan",
      last_name: "Nee",
      twitter_username: "Alvan Nee",
      portfolio_url: null,
      bio: "I really love unsplash！！！！！",
      location: "Shanghai, China",
      links: {
        self: "https://api.unsplash.com/users/alvannee",
        html: "https://unsplash.com/@alvannee",
        photos: "https://api.unsplash.com/users/alvannee/photos",
        likes: "https://api.unsplash.com/users/alvannee/likes",
        portfolio: "https://api.unsplash.com/users/alvannee/portfolio",
        following: "https://api.unsplash.com/users/alvannee/following",
        followers: "https://api.unsplash.com/users/alvannee/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1617947361627-4a8765a9b014image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1617947361627-4a8765a9b014image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1617947361627-4a8765a9b014image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "alvan_nee",
      total_collections: 0,
      total_likes: 66,
      total_photos: 194,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: "alvan_nee",
        portfolio_url: null,
        twitter_username: "Alvan Nee",
        paypal_email: null,
      },
    },
    tags: [],
  },
  {
    id: "G8cB8hY3yvU",
    created_at: "2020-05-08T13:07:10Z",
    updated_at: "2022-07-28T01:12:08Z",
    promoted_at: null,
    width: 3024,
    height: 4032,
    color: "#405926",
    blur_hash: "LUG*_#Eg0e-69sxY-pNdbXWBn,of",
    description: null,
    alt_description:
      "brown and white long coated small dog lying on green grass",
    urls: {
      raw: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwxMHx8ZG9nfGVufDB8fHx8MTY1OTAyMDU0MQ&ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwxMHx8ZG9nfGVufDB8fHx8MTY1OTAyMDU0MQ&ixlib=rb-1.2.1&q=80",
      regular:
        "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwxMHx8ZG9nfGVufDB8fHx8MTY1OTAyMDU0MQ&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwxMHx8ZG9nfGVufDB8fHx8MTY1OTAyMDU0MQ&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwxMHx8ZG9nfGVufDB8fHx8MTY1OTAyMDU0MQ&ixlib=rb-1.2.1&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1588943211346-0908a1fb0b01",
    },
    links: {
      self: "https://api.unsplash.com/photos/G8cB8hY3yvU",
      html: "https://unsplash.com/photos/G8cB8hY3yvU",
      download:
        "https://unsplash.com/photos/G8cB8hY3yvU/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwxMHx8ZG9nfGVufDB8fHx8MTY1OTAyMDU0MQ",
      download_location:
        "https://api.unsplash.com/photos/G8cB8hY3yvU/download?ixid=MnwzNDEyMjF8MHwxfHNlYXJjaHwxMHx8ZG9nfGVufDB8fHx8MTY1OTAyMDU0MQ",
    },
    categories: [],
    likes: 489,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "WQR92d6eDqs",
      updated_at: "2022-07-28T14:21:35Z",
      username: "ralu_gal",
      name: "Ralu Gal",
      first_name: "Ralu",
      last_name: "Gal",
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: null,
      links: {
        self: "https://api.unsplash.com/users/ralu_gal",
        html: "https://unsplash.com/@ralu_gal",
        photos: "https://api.unsplash.com/users/ralu_gal/photos",
        likes: "https://api.unsplash.com/users/ralu_gal/likes",
        portfolio: "https://api.unsplash.com/users/ralu_gal/portfolio",
        following: "https://api.unsplash.com/users/ralu_gal/following",
        followers: "https://api.unsplash.com/users/ralu_gal/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-fb-1588937430-8ebd5137b71c.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-fb-1588937430-8ebd5137b71c.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-fb-1588937430-8ebd5137b71c.jpg?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 11,
      total_photos: 4,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: null,
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null,
      },
    },
    tags: [
      {
        type: "landing_page",
        title: "dog",
        source: {
          ancestry: {
            type: {
              slug: "images",
              pretty_slug: "Images",
            },
            category: {
              slug: "animals",
              pretty_slug: "Animals",
            },
            subcategory: {
              slug: "dog",
              pretty_slug: "Dog",
            },
          },
          title: "Dog images & pictures",
          subtitle: "Download free dog images",
          description:
            "Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
          meta_title: "Dog Pictures | Download Free Images on Unsplash",
          meta_description:
            "Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.",
          cover_photo: {
            id: "tGBRQw52Thw",
            created_at: "2018-01-19T09:20:08-05:00",
            updated_at: "2022-07-04T12:02:35-04:00",
            promoted_at: "2018-01-20T05:59:48-05:00",
            width: 3264,
            height: 4896,
            color: "#262626",
            blur_hash: "LQDcH.smX9NH_NNG%LfQx^Rk-pj@",
            description: "Dog day out",
            alt_description: "short-coated brown dog",
            urls: {
              raw: "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
              regular:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=400&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              thumb:
                "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516371535707-512a1e83bb9a",
            },
            links: {
              self: "https://api.unsplash.com/photos/tGBRQw52Thw",
              html: "https://unsplash.com/photos/tGBRQw52Thw",
              download: "https://unsplash.com/photos/tGBRQw52Thw/download",
              download_location:
                "https://api.unsplash.com/photos/tGBRQw52Thw/download",
            },
            categories: [],
            likes: 679,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {},
            user: {
              id: "toGyhBVt2M4",
              updated_at: "2022-07-04T16:45:08-04:00",
              username: "fredrikohlander",
              name: "Fredrik Öhlander",
              first_name: "Fredrik",
              last_name: "Öhlander",
              twitter_username: null,
              portfolio_url: null,
              bio: "fredrikohlander@gmail.com\r\n\r\n",
              location: "El Stockholmo, Sweden",
              links: {
                self: "https://api.unsplash.com/users/fredrikohlander",
                html: "https://unsplash.com/@fredrikohlander",
                photos: "https://api.unsplash.com/users/fredrikohlander/photos",
                likes: "https://api.unsplash.com/users/fredrikohlander/likes",
                portfolio:
                  "https://api.unsplash.com/users/fredrikohlander/portfolio",
                following:
                  "https://api.unsplash.com/users/fredrikohlander/following",
                followers:
                  "https://api.unsplash.com/users/fredrikohlander/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
                medium:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
                large:
                  "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
              },
              instagram_username: "fredrikohlander",
              total_collections: 10,
              total_likes: 36,
              total_photos: 166,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: "fredrikohlander",
                portfolio_url: null,
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
        },
      },
    ],
  },
];

const FetchImagesReducer = (images = initialImages, action: AnyAction) => {
  if (action.type === "FETCH_IMAGES") {
    return [...action.payload.results];
  }

  return images;
};

const ImageModalReducer = (showImageModal = false, action: AnyAction) => {
  if (action.type === "SHOW_IMAGE_MODAL") {
    return true;
  } else if (action.type === "HIDE_IMAGE_MODAL") {
    return false;
  }

  return showImageModal;
}

const ImageUrlReducer = (imageUrl = "", action: AnyAction) => {
  if (action.type === "SET_IMAGE_URL") {
    return action.payload;
  }

  return imageUrl;
};

export default combineReducers({
  folders: FoldersReducer,
  routes: RoutesReducer,
  createFolderModal: CreateFolderModalReducer,
  folderInfoModal: FolderInfoModalReducer,
  folderInfoId: FolderInfoIdReducer,
  fetchImages: FetchImagesReducer,
  imageModal: ImageModalReducer,
  imageUrl: ImageUrlReducer
});
