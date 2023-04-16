import React , {  useState, createContext } from 'react';


export const AppContext = createContext();

export const AppProvider = (props) => {

    const FarsanObject = {
        

    };

    const [retreivealProduct , setRetreivalProduct] = useState(
        FarsanObject
    );



  



   
   


    return (
            <AppContext.Provider value={ { retrive: [retreivealProduct , setRetreivalProduct]  }} >
                {props.children}
            </AppContext.Provider>
    )
}