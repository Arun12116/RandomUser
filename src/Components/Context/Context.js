import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"
import axios from "axios"

let MyuserContext = createContext();

export default MyuserContext;


export let CustomComponent = ({ children }) => {

    let [user, setUser] = useState([]);
    // console.log(user);
    const [change, setChange] = useState([])


    // console.log(value)

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=20").then((res) => {
            setUser(res.data.results)
            setChange(res.data.results)
            // console.log(res.data);

        }).catch(() => {
            alert("some api error")
        })

    }, [])

    return (


        <>
            <MyuserContext.Provider value={{ user, setUser, change, setChange }}>
                {children}

            </MyuserContext.Provider>

        </>
    )


}