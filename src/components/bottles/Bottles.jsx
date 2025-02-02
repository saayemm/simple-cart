import { useEffect } from "react"
import { useState } from "react"
import Bottle from "../bottle/Bottle"
import { AddToLs, getStoredCart } from "../../utilities/localstroage"

export default function Bottles() {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    }, [])

    useEffect(()=>{
       const storedCart = getStoredCart()
       console.log(storedCart);
       
    }, [])

    const hundleAddToCart = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        AddToLs(bottle.id)
        
    }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <h3>Cart: {cart.length}</h3>
        {
            bottles.map(bottle=><Bottle hundleAddToCart={hundleAddToCart} bottle={bottle} key={bottle.id}></Bottle>)
        }
    </div>
  )
}
