import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/")
    .then((res) => {
        setData(res.data);
    })
    .catch((err) => console.err(err));
  }, []);

  return (
    <div className="d-flex mx-5 bg-primary">
      <div className="rounded text-white p-3">
        <h2>Admin Rule</h2>
        <div className="d-flex justify-content-end mb-3">
          <Link to="/create" className="btn btn-success">Create +</Link>
        </div>
      <table className="table">
        <thead>
          <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
                data.map((users,index)=>{
                    return (<tr key={index}>
                        <td>{users.id}</td>
                        <td>{users.username}</td>
                        <td>{users.email}</td>
                        <td>
                        <button className="btn btn-sm btn-info">Edit</button>
                          <button className="btn btn-sm btn-primary mx-2">Edit</button>
                          <button className="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>);
                })
            }
          
        </tbody>
      </table>
      </div>
      </div>
  );
};

export default Home;
