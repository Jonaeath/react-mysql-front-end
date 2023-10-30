import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    
    useEffect(()=>{
        axios.get('http://localhost:4000/read/'+id)
        .then(res => {
            console.log(res);
            setValues({...values, username: res.data[0].username, email: res.data[0].email});
        })
        .catch(err => console.log(err));
    }, [])

    const [values, setValues] = useState({
        username:'',
        email:'',
    })

    const handelUpdate = (event) =>{
        event.preventDefault();
        axios.put('http://localhost:4000/update/' + id, values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }


    
    return (
        <div className="d-flex w-100 mx-5 bg-primary">
      <div className="rounded w-100 text-white p-3">
        <h2>Update User</h2>
     <form onSubmit={handelUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="username"
            type="text"
            placeholder="Name"
            className="form-control" 
            value={values.username}
            onChange={e => setValues({...values, username: e.target.value})}      
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="form-control"
            value={values.email}
            onChange={e => setValues({...values, email: e.target.value})}      

          />
        </div>
        <button type="submit" className="btn btn-success">
          Update
        </button>
      </form>
     </div>
    </div>
    );
};

export default Edit;