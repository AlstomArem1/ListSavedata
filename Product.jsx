import { useParams } from "react-router-dom";
import { getProductsById } from "./data";
export default function Product() {
    const param = useParams()
    const data = getProductsById(parseInt(param.id))
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };
    return (
        <div style={myStyle} >Product detall {data.name}</div>
    )
}