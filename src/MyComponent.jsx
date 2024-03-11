// import React, {useState} from 'react'
// import { unstable_batchedUpdates } from 'react-dom'

// export default function MyComponent() {

//   const [name, setName] = useState("Guest")
//   const [age, setAge] = useState(0)
//   const [isEmployed, setIsEmployed] = useState(false)

//   const updateName = () => {
//     setName('Sofiia')
//   }
//   const updateAge = () => {
//     setAge(age + 2)
//   }
//   const toggleEmployedState = () => {
//     setIsEmployed(!isEmployed)
//   }
//   return(
//     <>
//       <div>
//         <p>Name: {name}</p>
//         <button onClick={updateName}>Set Name</button>

//         <p>Age: {age}</p>
//         <button onClick={updateAge}>Increase Age</button>

//         <p>Is employed : {isEmployed ? "Yes" : "No"}</p>
//         <button onClick={toggleEmployedState}>Employed?</button>
//       </div>
//     </>
//   )
// }


import React, {useState} from 'react'

export default function MyComponent() {

  const [name, setName] = useState("Guest")
  const [quantity, setQuantity] = useState(0)
  const [comment, setComment] = useState("")
  const [payment, setPayment] = useState("")
  const [shipping, setShipping] = useState("Pick up")

  function handleNameChange(event){
    setName(event.target.value)
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value)
  }

  function handleCommentChange(event) {
    setComment(event.target.value)
  }

  function handlePaymentChange(event){
    setPayment(event.target.value)
  }

  function handleShippingChange(event) {
    setShipping(event.target.value)
  }

  return(
    <>
      <div>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input type="number" value={quantity} onChange={handleQuantityChange}/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
          <input type="radio" value="Pick up"
                              checked={shipping === "Pick up"} // if checked => value = "pick up"
                              onChange={handleShippingChange}/>
                              Pick up
          </label>
          <br />
          <label>
          <input type="radio" value="Delivery"
                              checked={shipping === "Delivery"}
                              onChange={handleShippingChange}/>
          
          Delivery
        </label>
        <p>Shipping: {shipping}</p>
      </div>
    </>
  )
}