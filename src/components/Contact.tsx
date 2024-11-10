import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl text-black font-semibold italic'  data-aos="zoom-in-up">Get in touch</h2>
            <p className='text-gray-600 text-[18px] pt-2'  data-aos="zoom-in-up">
                Drop me a line, give me a call, or send me a message by submitting the form.
            </p>

            {/* e-mail */}
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <BiLogoGmail size={30}/> kinzanaseer321321@gmail.com
            </div>

            {/* telephone */}
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <BsTelephoneFill size={30}/> (92) 000-0000
            </div>
        </div>

        {/* name */}
        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text" 
                className='h-[40px] bg-transparent border border-accent'
                id='name'/>
            </div>

            {/* email */}
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input type="text" 
                className='h-[40px] bg-transparent border border-accent'
                id='email'/>
            </div>

            {/* message */}
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="msg">Message</label>
                <textarea 
                className='bg-transparent border border-accent'
                id='msg' rows={5}>
                    </textarea>
            </div>

            <button className='bg-accent p-2 px-6 hover:bg-red-600 hover:text-white' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
    
  )
}

export default Contact
