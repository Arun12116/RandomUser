
import MyuserContext from '../Context/Context'
import { useContext } from 'react'
const Rdio = () => {
    let {setUser ,change} = useContext(MyuserContext)

    // console.log(value);



    return (
        <>

            <div className="radio" style={{ display: "flex", justifyContent: "center", gap: "1rem", margin: "1rem" }}>
                <input type="radio" name='Gender' value="all" defaultChecked onChange={() => {
                    setUser(change);
                }} />All
                <input type="radio" name='Gender' value="male" onChange={() => {
                    setUser(change.filter((data) => {
                        return data.gender === "male"
                    }))
                }} />Male
                <input type="radio" name='Gender' value="Female" onChange={(data) => {
                    setUser(change.filter((data) => {
                        return data.gender === "female"
                    }))
                }} />Female

            </div>

            

        </>
    )
}

export default Rdio