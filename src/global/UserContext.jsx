import {createContext} from "react";

export const Context = createContext();

const UserContext = ({children}) => {
    const defaultValue = {
        user: {
            name: "coco",
            age: 12,
            gender: "male",
        },
    };
    return <Context.Provider value={defaultValue}>{children}</Context.Provider>;
};

export default UserContext;
