import React from "react";


function Info(props) {


    return (<div>
        {/* <table border="3">
        <tr>
        <th>Name</th><th>Branch</th><th>PNumber</th>
        </tr> */}

        <table border="3">
            <tr>
                <th>Name</th>
                <th>Branch</th>
                <th>PNumber</th>
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