import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Order.css';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const {user} = useAuth();
    const history = useHistory();
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user.email}`,{
            headers:{
                'authorization' : `Bearer ${localStorage.getItem('idToken')}`
            }
        })
        .then(res => {
            if(res.status ===200){
                return res.json();
            }
            else if (res.status === 401){
                history.push('/login')
            }
        })
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            {
                orders.map(order => <li key={order._id}>{order.name} : {order.email}</li>)
            }
        </div>
    );
};

export default Orders;