// import Login from '@/components/Login'
// import NavImage from '@/components/NavImage'
// import Delivery from '@/components/ourDelivery'
// import Register from '@/components/Register'
// import React from 'react'

// const Account = () => {
//   return (
//     <section className='w-full'>
//         <NavImage heading={"My Account"} path={"Home"} currentPage={"My account"}/>
//     <div className='w-fit bg-yellow-700 md:mx-auto flex flex-col md:flex-row gap-y-24 md:gap-y-20 py-16'>
// <div>
//     <Login/>
// </div>
// <div>
//     <Register/>
// </div>
//     </div>
// <div>
//     <Delivery/>
// </div>
//     </section>
//   )
// }

// export default Account




import Login from '@/components/Login'
import NavImage from '@/components/NavImage'
import Delivery from '@/components/ourDelivery'
import Register from '@/components/Register'
import React from 'react'

const Account = () => {
  return (
    <section className='w-full'>
        <NavImage heading={"My Account"} path={"Home"} currentPage={"My account"}/>
    <div className='w-fit mx-auto flex flex-col md:flex-row gap-y-24 md:gap-y-20 py-16'>
<div>
    <Login/>
</div>
<div>
    <Register/>
</div>
    </div>
<div>
    <Delivery/>
</div>
    </section>
  )
}

export default Account