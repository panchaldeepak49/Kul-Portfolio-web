import React from 'react'

const About = () => {
    //animate-pulse
  return (
    <>
    <div className=''>
    <div className='flex  justify-center mt-10'>
    <div className='flex flex-col items-center    sm:w-[80%] rounded-xl  py-6 px-4 sm:px-10 shadow-xl
     bg-cover' data-aos="zoom-in" >
        <p className='font-semibold  text-green-600 text-xl   sm:text-[2rem]'>Roles :</p>
        <p className='mt-4 text-blue-500  font-semibold sm:text-[1.75rem]'>1. Senior Embedded Software Engineer</p>
        <p className='mt-4 text-blue-500 font-Serif  font-semibold sm:text-[1.75rem]'>2. Lead Embedded Software Engineer  </p> 
         <p className='mt-4 text-blue-500 font-Serif font-semibold sm:text-[1.75rem]'>3. Software Design/Architect Engineer</p>
        </div>    
    </div>

    <div className='flex  justify-center mt-10'>
    <div className='flex flex-col items-center  bg-gradient-to-r from-green-400 to-orange-300 via-green-200  sm:w-[80%] rounded-xl  py-6 px-4 sm:px-10 shadow-xl
     bg-cover' data-aos="zoom-in" >
        <p className='font-semibold   text-orange-500 text-xl sm:text-[2rem]'>About Me</p>
        <p className='mt-4  '>I am having total of 11 year of experience in embedded software industry , worked on different technology and system. Major experience in C 
        language and Network domain.Worked on different processor platform from monolithic kernel to uClinux kernel. Worked of different level of firmware like low level firmware, 
        medium level firmware to kernel based firmware.</p>
        <p className='mt-4  '>Experience in multiple network protocols and drivers, worked in Linux kernel driver and porting and board bring up. Worked on kernel config 
        for ARM platform and device root file system.  </p> 
         <p className='mt-4  '>Initial 3.5 year worked on firmware for voice device over Ethernet, here contribute to Voice module for I2S interface, memory interface with I2C 
         and uClinux networking stack, VoIP stack and PPP stack.</p>
        </div>    
    </div>

    <div className='flex  justify-center mt-10' >
    <div className='flex flex-col items-center bg-gradient-to-r from-blue-300 to-yellow-300 via-green-200  sm:w-[80%] rounded-xl  py-6 px-4 sm:px-10 shadow-xl
     bg-cover' data-aos="zoom-in" >
        <p className='font-semibold  text-green-600 text-xl sm:text-[2rem]'>...</p>
        <p className='mt-4  '>Worked for Cisco cat3k device for PoE(Power over Ethernet) Interface firmware, new feature development, enhancement, and critical bug fixes 
        and design/code improvement .</p>
        <p className='mt-4  '>Worked on Smart NIC for intel cloud server, SR-IOV, Virtual drivers and Open virtual switch and flow control management of forwarding plans 
         in Smart NIC firmware.</p> 
         <p className='mt-4  '>Worked on full build environment support for Infinera ThanOS using Cmake build environment for cross platform support, contribute to USB 
        stack to notify User space for USB hot plugin/plugout. Design and development of feature and critical bug fixes.</p>
        </div>    
    </div>

    <div className='flex  justify-center mt-10' >
    <div className='flex flex-col items-center bg-gradient-to-r from-purple-400 to-gray-400 via-green-200  sm:w-[80%] rounded-xl  py-6 px-4 sm:px-10 shadow-xl
     bg-cover' data-aos="zoom-in" >
        <p className='font-semibold  text-green-600 text-xl sm:text-[2rem]'>...</p>
        <p className='mt-4  '>Worked on RDK-B Broadband open-source community for RdkWanManager team to contribute to Design and development and bug fixes in 
        Wan Manager eco system. Understanding requirement based on EPIC and User story and understanding User story and design software and 
        developing code based on product and feature requirement.</p>
         <p className='mt-4  '>Contribute in yocto based build environment support for cross platform and different meta OEM layers. Proposed design and improvement for 
         yocoto build layer and system architecture improvement and application layer design and architecture improvement and design.
         </p>
         <p className='mt-4  '>Always Focusing on to improve my skills in software architecture and software design knowledge and update myself with new technology and 
         ready to take new challenges.</p> 
        </div>    
    </div>

    </div>
    </>
  )
}

export default About