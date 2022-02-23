import React,{useState,useEffect} from 'react';
import style from './Users.module.css';
import axios from 'axios'
export default function Users() {
  
    
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=200').then((result) => {
            setUsers(result.data.results)
        })
    }, [])

    return (
        <div className={style.container}>
            {users.map((user, index) => {
                return <div key={index} className={style.item}>
                    <img className={style.img} src={user.picture.large} />
                    <span>
                        <span>{user.name.first}</span>
                        &nbsp;
                        <span>{user.name.last}</span>
                    </span>
                </div>
            })}
        </div>
    
  )
}
