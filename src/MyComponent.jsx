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


// import React, {useState} from 'react'

// export default function MyComponent() {

//   const [name, setName] = useState("Guest")
//   const [quantity, setQuantity] = useState(0)
//   const [comment, setComment] = useState("")
//   const [payment, setPayment] = useState("")
//   const [shipping, setShipping] = useState("Pick up")

//   function handleNameChange(event){
//     setName(event.target.value)
//   }

//   function handleQuantityChange(event) {
//     setQuantity(event.target.value)
//   }

//   function handleCommentChange(event) {
//     setComment(event.target.value)
//   }

//   function handlePaymentChange(event){
//     setPayment(event.target.value)
//   }

//   function handleShippingChange(event) {
//     setShipping(event.target.value)
//   }

//   return(
//     <>
//       <div>
//         <input value={name} onChange={handleNameChange} />
//         <p>Name: {name}</p>

//         <input type="number" value={quantity} onChange={handleQuantityChange}/>
//         <p>Quantity: {quantity}</p>

//         <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
//         <p>Comment: {comment}</p>

//         <select value={payment} onChange={handlePaymentChange}>
//           <option value="">Select an option</option>
//           <option value="Visa">Visa</option>
//           <option value="MasterCard">MasterCard</option>
//           <option value="Giftcard">Giftcard</option>
//         </select>
//         <p>Payment: {payment}</p>

//         <label>
//           <input type="radio" value="Pick up"
//                               checked={shipping === "Pick up"} // if checked => value = "pick up"
//                               onChange={handleShippingChange}/>
//                               Pick up
//           </label>
//           <br />
//           <label>
//           <input type="radio" value="Delivery"
//                               checked={shipping === "Delivery"}
//                               onChange={handleShippingChange}/>
          
//           Delivery
//         </label>
//         <p>Shipping: {shipping}</p>
//       </div>
//     </>
//   )
// }

// import React, {useState} from 'react'


// export default function MyComponent(){

//   const [car, setCar] = useState({year: 2023,
//                                   make: "Audi",
//                                   model: "RSQ8"})


//   function handleYearChange(e) {
//     setCar(c => ({...c, year: e.target.value}))
//   }

//   function handleMakeChange(e) {
//     setCar(c => ({...c, make: e.target.value}))
//   }

//   function handleModelChange(e) {
//     setCar(c => ({...c, model: e.target.value}))
//   }

//   return(
//     <>
//       <div>
//         <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

//         <input type="number" value={car.year} onChange={handleYearChange}/> <br />
//         <input type="text" value={car.make} onChange={handleMakeChange}/> <br />
//         <input type="text" value={car.model} onChange={handleModelChange}/> <br />
//       </div>
//     </>
//   )
// }

import React, {useState} from "react";

export default function MyComponent() {
  const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana'])

  function handleAddClick() {

    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = ""

    setFoods(f => [...f, newFood])
  }

  function handleRemoveClick(index) {

    setFoods(foods.filter((_, i) => i !== index)) 
  }

  return(
    <>
      <div>
        <h2>List of Food</h2>
        <ul>
          {foods.map((food, index) =>
          <li key={index} onClick={() => handleRemoveClick(index)}>
            {food}
          </li>)}
        </ul>

        <input type="text" id="foodInput" placeholder="Enter food name" />
        <button onClick={handleAddClick}>Add food</button>
      </div>
    </>
  )

}