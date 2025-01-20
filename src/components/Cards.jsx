import React, { useRef, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { SiJsonwebtokens } from "react-icons/si";
import { useForm } from "react-hook-form";

const Cards = (props) => {
    let { name, email, phone, web } = props;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let onSubmit = (data)=>{
        console.log(data.formName);
        name = data.formName
        console.log(name);
        
        toggleForm()
    }
  
  
  let card = useRef();
  let form = useRef();
  let [formVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div ref={card} className="w-[300px] border-2 border-gray-400 flex flex-col rounded-lg shadow-lg overflow-hidden">
      {/* Card Image */}
      <div>
        <img
          src="https://images.pexels.com/photos/1649652/pexels-photo-1649652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Card Image"
          className="w-full h-48 object-cover rounded-t-lg shadow-md"
        />
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1">
        <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
        <p className="text-sm text-gray-600 flex items-center space-x-2">
          <MdEmail />
          <span>{email}</span>
        </p>
        <p className="text-sm text-gray-600 flex items-center space-x-2">
          <IoCall />
          <span>{phone}</span>
        </p>
        <p className="text-sm text-gray-600 flex items-center space-x-2">
          <SiJsonwebtokens />
          <span>https://{web}</span>
        </p>
      </div>

      {/* Card Actions */}
      <div className="p-3 flex justify-between bg-gray-200">
        <IoIosHeartEmpty
          onClick={(e) => {
            e.target.style.background = e.target.style.background === "red" ? "none" : "red";
          }}
          className="text-red-500 hover:text-red-700 cursor-pointer text-2xl"
        />
        <CiEdit
          onClick={toggleForm}
          className="text-blue-500 hover:text-blue-700 cursor-pointer text-2xl"
        />
        <MdDelete
          onClick={(e) => {
            e.target.parentNode.style.display = "none";
            card.current.style.display = "none";
          }}
          className="text-gray-500 hover:text-gray-700 cursor-pointer text-2xl"
        />
      </div>

      {/* Modal/Modal Form (Hidden by default) */}
      {formVisible && (
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div ref={form} className="bg-white rounded-lg shadow-lg w-[400px] p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-semibold text-gray-800">Basic Model</h1>
              <FaDeleteLeft
                onClick={toggleForm}
                className="text-red-500 hover:text-red-700 cursor-pointer"
              />
            </div>

            <div className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  defaultValue={name}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                 {...register("formName")}
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue={email}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  {...register("formEmail")}
               />
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                    defaultValue={phone}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  {...register("formPhone")}
                />
              </div>

              {/* Website Input */}
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                  Website
                </label>
                <input
                  type="text"
                  defaultValue={web}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  {...register("formWeb")}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mt-6">
              <button
                onClick={toggleForm}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                OK
              </button>
            </div>
          </div>
        </div>
      </form>
               )}
    </div>
            
  );
};

export default Cards;
