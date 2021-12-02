import React from "react";


function Info(props) {


    return (<div>

        {/* <button onClick={() => {
            props.onChecked(props.id);
        }}><span>Delete</span></button> */}
 
        <table border="3">
            <tr>
                <th>Name</th><th>Branch</th><th>PNumber</th>
            </tr>
          
        <tr>
            <td>{props.name}</td>
            <td>{props.branch}</td>
            <td>{props.phoneNumber}</td>
        </tr>
        </table>


        {/* </table> */}
    </div>
    )
};


export default Info;