import { Outlet } from "react-router-dom"

function App() {


  return (
    <>
      <main className=" pt-16 flex flex-col items-center justify-center gap-6 text-white h-screen w-screen mb-10 mt-6">
        <h1 className=" text-6xl">GitHub Finder</h1>
        <Outlet/>
      </main>
    </>
  )
}

export default App
