import React from 'react'


const DisplayCart = (props)=>{
const {cart} = props
return (
    cart.map(items=> {
        return <div>
            <h4>{items.book_title}</h4>
            <button>add</button>
            {items.length}
            <button>minus</button>
        </div>
    })
)

}


export default DisplayCart