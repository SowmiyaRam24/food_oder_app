import React from 'react'

 const Cartcentent=React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}

});

export default Cartcentent;