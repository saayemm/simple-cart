const getStoredCart = () => {
   const storedCartString =  localStorage.getItem("cart")
   if(storedCartString){
    return JSON.parse(storedCartString)
   }
   return []
}

const saveCartToLs = cart => {
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem("cart", cartStringify)
}

const AddToLs = id => {
    const cart = getStoredCart();
    cart.push(id)
    saveCartToLs(cart)
}

export {AddToLs, getStoredCart}