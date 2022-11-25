import React, { useState, useEffect } from "react";
import {DataGrid} from "@mui/x-data-grid";
import { width } from "@mui/system";
import axios from "axios"

const API = process.env.REACT_APP_API_KEY

function Billing() {
   

    const [data, setData] = useState([]);

    const columns = [
       { field: "User_Name", headerName: "Name", width: 90,  },
       { field: "User_Number", headerName: "Number", width: 150 },
       { field: "Car_Name", headerName: "Car Name", width: 150 },
       { field: "Car_Owner_Number", headerName: "Car Owner Number", width: 150 },
       { field: "Total_Amount", headerName: "Total Amount", width: 150 }
       

    ];

    let url = `${API}bill`

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(resp => setData(resp))
    }, [])

    console.log(data)

    const rows = data.map((row)=>({
        id: row._id,
        User_Name: row.User_Name,
        User_Number: row.User_Number,
        Car_Name: row.Car_Name,
        Car_Owner_Number: row.Car_Owner_Number,
        Total_Amount: row.Total_Amount,
        


    }))

  

    return (
        //    <h3>BILLING</h3>
        <form className="data">
           <div style={{height:700, width:"113%"}}>
           <DataGrid 
           rows={rows}
           columns={columns}
           pageSize={10}
           rowsPerPageOptions={[10]}
           
           />
           </div>
        </form>

    );
}

export default Billing;