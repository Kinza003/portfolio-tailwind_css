// import React from 'react'
// import Navbar from './Navbar'


// const Hero = () => {
//   return (
//     <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/profile.png)] bg-cover' style={{backgroundSize: "35%", backgroundPosition: "left 100px top 100px"}}>
//       <Navbar/>
//       <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'   >
//         <div className='hidden lg:block'></div>
//         <div className='text-[80px] sm-text-[100px] font-bold leading-tight flex justify-center items-center'>
//           <div className='text-black font-mono'>
//             <p data-aos="zoom-in-up">I'm</p>
//             <p data-aos="zoom-in-up">Kinza</p>
//           </div>
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default Hero






// import React from 'react';
// import Navbar from './Navbar';

// const Hero = () => {
//   return (
//     <div 
//       id='hero' 
//       className='min-h-screen bg-no-repeat bg-[url(/profile.png)] bg-cover'
//       style={{
//         backgroundSize: "30%",
//         backgroundPosition: "left center",
//       }}
//     >
//       <Navbar/>
//       <div className='container grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-60px)] px-4'>
//         {/* Empty div to push text on the right on desktop */}
//         <div className='hidden lg:block'></div>

//         {/* Text container */}
//         <div className='flex justify-center items-center lg:ml-20 xl:ml-32'>
//           <div className='text-center lg:text-left'>
//             <p className='text-[40px] sm:text-[60px] lg:text-[80px] xl:text-[90px] font-bold leading-tight text-black font-mono' data-aos="zoom-in-up">
//               I'm
//             </p>
//             <p className='text-[40px] sm:text-[60px] lg:text-[80px] xl:text-[90px] font-bold leading-tight text-black font-mono' data-aos="zoom-in-up">
//               Kinza
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;











import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-cover"
      style={{ backgroundSize: "35%", backgroundPosition: "left 100px top 100px" }}
    >
      <Navbar />
      <div className="container flex flex-col lg:flex-row items-center justify-center h-[calc(113vh-60px)] space-y-5 lg:space-y-0#D lg:space-x-24 px-4 sm:px-0">
        {/* Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/profile.png"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full w-48 h-48 sm:w-72 sm:h-72 object-cover"
          />
        </div>
        {/* Text */}
        <div className="text-[40px] sm:text-[55px] font-bold leading-tight flex justify-center items-center relative top-[-20px] sm:top-[-40px]">
          <div>
            <p data-aos="zoom-in">I'm</p>
            <p data-aos="zoom-in">Kinza</p>
            <p data-aos="zoom-in" className="text-[16px] sm:text-[20px] mt-2 sm:mt-4 text-center">A Front-end Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
