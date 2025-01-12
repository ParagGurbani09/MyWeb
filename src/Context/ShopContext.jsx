import React, { createContext } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {


    return (
        // <ShopContext.Provider value={contextValue}>
        <ShopContext.Provider >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;