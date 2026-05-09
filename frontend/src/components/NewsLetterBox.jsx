import React from 'react'



function NewsLetterBox() {

    const onSubmitHandler = (event)=>{
        event.preventDefault()
    }


  return (
    <div className='text-center'>
      <p className='text-2xl text-gray-700 font-medium'>Subscribe Now & Get 20% Off</p>
      <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, illum.
      </p>

      <form className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none'  type='email' placeholder='enter you Email' required />
        <button onSubmit={onSubmitHandler} className="bg-black text-white text-xs px-10 py-4" type='submit'>Subscribe</button>
      </form>
    
    </div>
  )
}

export default NewsLetterBox
