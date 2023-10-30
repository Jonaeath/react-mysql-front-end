import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Read = () => {
   
    const {id} = useParams();
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/read/'+id)
        .then(res => {
            console.log(res);
            setUsers(res.data[0]);
        })
        .catch(err => console.log(err));
    }, [])

    return (
        <div className="d-flex mx-5 bg-primary">
      <div className="rounded text-white p-3">
        <h2 className="bg-white text-black">Users Details</h2>
        <h2>{users.id}</h2>
        <h2>{users.username}</h2>
        <h2>{users.email}</h2>
        <Link to="/"><button className="btn btn-sm btn-success">Back</button></Link>
        <Link to={`/edit/${users.id}`}><button className="btn btn-sm btn-info mx-2">Edit</button></Link>
      </div>
      </div>
    );
};

export default Read;