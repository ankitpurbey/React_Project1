import React from "react";

function App() {
  

  return (
    <div className=" h-screen w-screen flex">
      <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
        <a className=" py-3 px-5 border rounded border-blue-300 text-blue-400"href="/create">Add New Product</a>
        <hr className=" my-3 w-[80%]"></hr>
        <h1 className=" text-2xl mb-3 w-[80%]">Category</h1>

        <ul className=" w-[80%]">
        <hr className=" my-2 w-[70%]"></hr>
          <li className=" flex items-center mb-3">
          <span className=" rounded-full mr-2  w-[15px] h-[15px] bg-blue-200"></span>{" "}Cat1
          
          </li>
          
          
         
          <li className=" flex items-center mb-3">
          <span className=" rounded-full mr-2  w-[15px] h-[15px] bg-blue-200"></span>{" "}Cat2
          
          </li>
          <li className=" flex items-center mb-3">
          <span className=" rounded-full mr-2  w-[15px] h-[15px] bg-blue-200"></span>{" "}Cat3
          
          </li>
          <li className=" flex items-center mb-3">
          <span className=" rounded-full mr-2  w-[15px] h-[15px] bg-blue-200"></span>{" "}Cat4
          
          </li>
        </ul>
      </nav>

      <div className=" h-full w-[80%] bg-red-100"></div>
    </div>
  )
}
export default App;
