import React from 'react'
function Page ({params}) {
    console.log(params)

  return (
    <div>Sayfa id: {params.Page}
    </div>
   
  )
}

export default Page