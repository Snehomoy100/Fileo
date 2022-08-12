export type DataTypes = {
    path: [{ name: string, id: string }];
    isAdmin: boolean;
    isFolder: boolean;
    name: string;
    id: string;
    type: string;
    createdAt: string;
    creator: string;
    children: DataTypes[];
}

type SearchType = {
    query: string;
    searchResult: DataTypes[];
}


export type GlobalTypes = {
    fileFolder: DataTypes; 
    currentFolder: string; 
    search: SearchType 
}

