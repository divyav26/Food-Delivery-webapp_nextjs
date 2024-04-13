'use client'
import { useState } from "react"
import RestaurantLogin from "../_components/restaurantLogin"
import RestaurantSignUp from "../_components/restaurantSignUp"


const Restaurant = () => {
    const [login, setLogin]  =useState(true)
  return (
    <>
      <h1>Restaurant</h1>
      <RestaurantLogin />
      <RestaurantSignUp />
      <button>Already have Account ? SignUp</button>
    </>
  )
}

export default Restaurant
