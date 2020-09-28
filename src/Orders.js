import React, { useEffect, useState } from 'react'
import { db } from "./firebase";
import "./Orders.css"
import { useStateValue } from "./StateProvider";
import Order from "./Order"

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    console.log("Llega al If");
    useEffect(() => {
        if (user) {
            db.collection("users")
                .doc(user?.uid)
                .collection("orders")
                .orderBy("created", "desc")
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ));
            console.log("Orders >>> ", orders,
                "\nuserId >>> ", user?.uid);
        } else {
            setOrders([]);
        }
    }, [user]);
    return (
        <div className="orders">
            <h1>Your orders</h1>
            {console.log("Entra AL FINAL")}
            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
