import React from "react";

function App() {
  

  return (
    <div className=" h-screen w-screen">
      <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
        <a className=" py-3 px-5 border rounded border-blue-300 text-blue-400"href="/create">Add New Product</a>
        <hr className=" my-3 w-[80%]"></hr>
        <h1 className=" text-2xl mb-3 w-[80%]">Category</h1>
        <ul className="w-[80%]">
        <hr className=" my-2 w-[70%]"></hr>
          <li className=" bg-red-100 mb-3">Catgory1</li>
          <li className=" bg-red-100 mb-3">Catgory2</li>
          <li className=" bg-red-100 mb-3">Catgory3</li>
          <li className=" bg-red-100 mb-3">Catgory4</li>
        </ul>
      </nav>
    </div>
  )
}
export default App;
