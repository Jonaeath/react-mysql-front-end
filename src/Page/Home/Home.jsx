import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/users")
    .then((res) => {
        setData(res.data);
    })
    .catch((err) => console.err(err));
  }, []);

  return (
    <div>
<h1>mm: {data.length}</h1>

      <table>
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
                        <td></td>
                    </tr>);
                })
            }
          
        </tbody>
      </table>
    </div>
  );
};

export default Home;
