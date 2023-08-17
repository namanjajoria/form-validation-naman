import React from 'react'
function Comp2({data}) {
  return (
    <>
        <div className='pt-4 pb-4'>
      <h2 className='text-primary'>Submisson Details:-</h2>
      <hr className='hr'></hr>
      {data.map((e)=>{
        return <ol type='number' key={e.id}>
        <li  className='fs-4 mb-2'>First Name: {e.FirstName}</li>
        <li className='fs-4 mb-2'>Last Name: {e.LastName}</li>
        <li className='fs-4 mb-2'>Email Address: {e.Email}</li>
        <li className='fs-4 mb-2'>Gender: {e.Gender}</li>
        <li className='fs-4 mb-2'>Date of Birth: {e.Dob}</li>
        <li className='fs-4 mb-2'>Phone: {e.Phone}</li>
        <li className='fs-4 mb-2'>Password: {e.Password}</li>
      </ol>
      })}
     
    </div>
    </>
  )
}

export default Comp2
