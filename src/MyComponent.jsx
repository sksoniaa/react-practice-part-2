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

  const [cars, setCars] = useState([])
  const [year, setYear] = useState(new Date().getFullYear())
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")


  function handleAddCar() {
    const newCar = {year: year, make: make, model: model}

    setCars(c => [...c, newCar])

    setYear(new Date().getFullYear())
    setMake("")
    setModel("")
  }

  function handleRemoveCar(index) {
    setCars(c => c.filter((_, i) => i !== index))
  }

  function handleYearChange(e) {
    setYear(e.target.value)
  }

  function handleMakeChange(e) {
    setMake(e.target.value)

  }

  function handleModelChange(e) {
    setModel(e.target.value)

  }



  return(
    <>
      <div>
        <h2>List of Car Objects</h2>
        <input type="number" value={year} onChange={handleYearChange} placeholder="Enter car year"/>
        <input type="text" value={make} onChange={handleMakeChange} placeholder="Enter car make"/>
        <input type="text" value={model} onChange={handleModelChange} placeholder="Enter car model"/>

        <button onClick={handleAddCar}>Add car</button>
        <ul>
          {cars.map((car, index) =>
          <li key={index}>{car.year} {car.make} {car.model}
          <button onClick={() => handleRemoveCar(index)}>DELETE</button>
          </li>)}
        </ul>
      </div>
    </>
  )

}