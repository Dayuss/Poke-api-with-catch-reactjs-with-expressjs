import React from 'react'
import { NavLink } from "react-router-dom";

const Item = ({ id, captured, name, image }) => {
  return (
      <NavLink
          to={`/detail/${id}`}
          exact
          className="bg-white rounded-lg shadow hover:shadow-2xl w-full md:w-5/6 mb-2 md:mx-3 md:mb-4 py-3 md:flex md:px-4 lg:w-1/3 xl:w-1/4"
      >
        <div className="mx-auto w-5/6 self-center md:mx-4">
            <img src={image} alt={name} className="rounded-full block mx-auto" />
        </div>
        <div className="mt-3 mx-auto w-3/4 self-center">
            <p className="text-xl text-gray-800 tracking-wide leading-2 md:leading-6">#{id}</p>
            <p className="text-3xl text-purple-500 tracking-wide leading-2 md:leading-6">{name}</p>
            <p className="text-lg text-gray-500 leading-2 md:leading-6">Capture: <b>{captured}</b></p>
        </div>
      </NavLink>
  )
}

export default Item
