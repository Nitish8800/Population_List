import React, { useState } from 'react'

export const Country = () => {


const [Country, setCountry] = useState({
    name:"",
})

const handleChange = e => {
    setCountry({
        ...Country,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = e => {
    e.preventDefault()
    console.log(Country)
}

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Country</label>
        <input type="text" onChange={handleChange} name="name" value={Country.name} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
