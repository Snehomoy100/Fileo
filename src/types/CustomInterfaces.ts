export type DataTypes = {
    children: DataTypes[];
    path: [{ name: string, id: string }];
    isAdmin: boolean;
    isFolder: boolean;
    name: string;
    id: string;
    type: string;
    createdAt: string;
    creator: string;
}


export type GlobalTypes = {
    currentFolder: string;
    fileFolder: DataTypes;  
    search: SearchType 
}

type SearchType = {
    query: string;
    searchResult: DataTypes[];
}
