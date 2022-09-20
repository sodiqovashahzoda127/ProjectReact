import React from "react";
import "./Home.css";
import rasm from "../../img/flower.jpg"
export function Home(props) {
    return(
        <div>
           <table className="table" border={"1px"} style={{}}>
            <thead>
            <tr>
            <th>ISM</th>

            </tr>
            </thead>
            <tbody>
             <tr>
                <td>{props.name}</td>

             </tr>
            </tbody>
           </table>
           <img src={rasm} alt="" />
        </div>
    );
}
export default Home