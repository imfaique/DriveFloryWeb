import React, { useState, useEffect } from "react";
import {DataGrid} from "@mui/x-data-grid";
import { width } from "@mui/system";
import axios from "axios"

const API = process.env.REACT_APP_API_KEY

function Booking() {
   

    const [data, setData] = useState([]);

    const columns = [
       { field: "User_Name", headerName: "Name", width: 90,  },
       { field: "User_Number", headerName: "Number", width: 150 },
       { field: "User_Email", headerName: "Email", width: 150 },
       { field: "Car_Company", headerName: "Car Company", width: 150 },
       { field: "Model", headerName: "Model", width: 150 },
       { field: "Model_Year", headerName: "Model Year", width: 150 },
       { field: "Booking_Date", headerName: "Booking Date", width: 150 },
       { field: "Requested_Date", headerName: "Requested Date", width: 150 },

    ];

    let url = `${API}booking`

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
        User_Email: row.User_Email,
        Car_Company: row.Car_Company,
        Model: row.Model,
        Model_Year: row.Model_Year,
        Booking_Date: row.Booking_Date,
        Requested_Date: row.Requested_Date,


    }))

  

    return (
        //    <h3>BOOKINGS</h3>
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

export default Booking;