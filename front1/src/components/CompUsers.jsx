import React, {useState, useEffect} from 'react'
import { getFetchData } from '../util/fetchDatas.js';

export default function CompUsers() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            // const url = 'http://localhost:9000/users';
            // const response = await fetch(url, {method: 'GET'});
            const jsonData = await getFetchData('/users');
            console.log(jsonData);
            setUsers(jsonData.users);
        };
        fetchData();  
    }, []);


    return (
            
        // {/* http://localhost:9000/users */}

        <div style={{width:"1000px", margin:"auto"}}>
            <h1>GET :: Users</h1>
            <table border="1" style={{width:"50%"}}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>ID</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, idx) => (
                        <tr key={idx}>
                            <td>{idx + 1}</td>    
                            <td>{user.id}</td>
                            <td>{user.pwd}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}