// import React from 'react'

const Card = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
        <h1
        className="text-4xl underline font-extrabold text-white">Contact Form</h1>
        <form 
    className="border-4 border-black w-full m-5 p-10 flex flex-col items-start justify-start bg-slate-950 text-white md:w-1/3"
    action="https://api.web3forms.com/submit"
    method="POST"
    >
        <input 
        type="hidden" 
        name="access_key" 
        value="bba4e540-a073-44b0-9800-38ce017387c5"
        />
        <div 
        className="w-full p-5">
            <label 
            htmlFor="name"
            className="text-xl "
            >Name: </label>
            <input type="text" 
                id="name"
                name="name"
                className="w-full h-10 bg-slate-400 rounded-md p-1 text-xl"
                required
            />
        </div>
        <div
         className="w-full p-5">
            <label htmlFor="email"
            className="text-xl ">Email: </label>
            <input type="email" 

                id="email"
                name="email"
                className="w-full h-10 bg-slate-400 rounded-md p-1 text-xl"
                required
            />
        </div>
        <div
         className="w-full p-5">
            <label htmlFor="number"
            className="text-xl ">Contact No: </label>
            <input type="number" 
                id="number"
                name="number"
                className="w-full h-10 bg-slate-400 rounded-md p-1 text-xl"
                required
            />
        </div>
        <input 
            type="checkbox" 
            name="botcheck" 
            style={{display: "none"}}
        />
        <div
         className="w-full p-5">
            <label htmlFor="message"
            className="text-xl ">Message: </label>
            <textarea 
            name="message" 
            id="message"
            className="w-full h-10 bg-slate-400 rounded-md p-1 text-xl"
            ></textarea>
        </div>
        <button
        className="bg-gray-600 w-full h-10 m-2 text-white font-bold"
        type="submit"
        >
            Submit Form
        </button>
    </form>
    </div>
  )
}

export default Card
