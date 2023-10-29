import axios from "axios";
import { useState } from "react";


const Create = () => {

    const [values, setValues] = useState({
        name:'',
        email:''
    })

    const handelSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:4000/users", values)
        .then(res => console.log(res))
        .then(err => console.log(err))
    }

  return (
    <div className="d-flex w-100 mx-5 bg-primary">
      <div className="rounded w-100 text-white p-3">
        <h2>Add Admin</h2>
     <form onSubmit={handelSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="form-control" 
            onChange={e => setValues({...values, name: e.target.value})}      
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="form-control"
            onChange={e => setValues({...values, email: e.target.value})}      

          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
     </div>
    </div>
  );
};

export default Create;
