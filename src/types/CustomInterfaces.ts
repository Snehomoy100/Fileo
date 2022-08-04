
export interface DataTypes {
    children: DataTypes[];
    path: [{ name: string, id: string }];
    isAdmin: boolean;
    isFolder: boolean;
    name: string;
    id: string;
}


export interface GlobalTypes {
    currentFolder: string;
    fileFolder: DataTypes;   
}

