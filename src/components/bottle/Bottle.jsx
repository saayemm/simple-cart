

export default function Bottle({bottle, hundleAddToCart}) {
    const {category, name, price, img} = bottle
    
  return (
    <div className="bg-white flex flex-col border-2 border-red-100 p-4 items-center gap-2">
        <h2>Name: {name}</h2>
        <img className="max-w-48" src={img} alt="" />
        <h2>Price: ${price}</h2>
        <h2>Category: {category}</h2>
        <button 
            onClick={()=>hundleAddToCart(bottle)}
            className="bg-slate-700 text-white px-4 py-1 rounded-lg">Buy Now</button>
    </div>
  )
}
