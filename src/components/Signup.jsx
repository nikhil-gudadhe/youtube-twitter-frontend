import React from 'react'
import { Logo, Button, Input } from "./index";

function Signup() {
  return (
    <div className="h-screen overflow-y-auto bg-[#121212] text-white">
    <div className="mx-auto my-8 flex w-full max-w-sm flex-col px-4">
      <Logo/>
      <Input/>
      <Button/>    

      {/* https://docs.google.com/spreadsheets/d/1JG-gKgIFoaW6jqK_Fo-jr4XFvzUHGa5YqnHDmkucR2E/edit?pli=1#gid=732937325
           */}
    </div>
    </div>
  )
}

export default Signup