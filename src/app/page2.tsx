'use server'

import Image from "next/image";

import { Bruno, Instagram } from '../assets/export'
import Link from "next/link";
import React from 'react'




const Speed = ({}: any) => {

  return (
    <>
      <>
        <div className='bg-blue-500 w-screen max-h-fit min-h-screen'>

          <header className="fixed bg-blue-500   text-4xl pt-5 w-screen pb-5 sm:text-7xl lg:text-4xl md:text-3xl font-sans flex flex-col sm:flex-row items-center sm:justify-between ">
            <h1 className='mb-7 sm:ml-20 text-white'>Bruno Pedraca</h1>

            <ul className='flex flex-row  sm:mr-40'>

              <li>
                <Link href="https://www.instagram.com/brunobfp4/" target='_blank'>
                  <Image className='w-10 sm:w-20 lg:w-12 md:w-9 mr-4' src={Instagram} alt='instagram' />
                </Link>
              </li>
            </ul>
          </header>
          <main className="flex justify-center ">
            <div className='mt-40 bg-white p-5 rounded-lg'>

              <Image src={Bruno} className='bg-cover max-h-screen w-96 rounded-lg' priority alt='bruno' />

            </div>

          </main>
          <div className='flex justify-center'>
            <section className=' md:w-2/5 mx-4 '>
              <h2 className='text-white text-7xl'>Bio</h2>




              <div className='bg-white rounded-lg p-10 mb-5'>


                <p className=' text-black text-justify '>Bruno Ferreira Pedraça Biography:
                </p><br/>
                <p  className=' text-black text-justify '>

                  Bruno Ferreira Pedraça is a talented musician and songwriter in the Rap-Hip-hop genre, with influences from R&B and Pop. Inspired by artists like Money Lola Young and Die for a Night Arizona, Bruno brings a unique and captivating approach to the current music scene.
                </p><br/>
                <p  className=' text-black text-justify '>

                  His musical journey began as a passionate listener, but soon the transcendent passion led him to want to share his own voice with the world. Bruno initially pursued studies in technical singing, but quickly realized that his true talent lay in expressing his creativity intuitively.
                </p><br/>
                <p  className=' text-black text-justify '>

                  Bruno&apos;s music is driven by his experience with mediumship, bringing lyrics that explore deep and emotional themes. His connection with the transcendental is reflected in compositions that touch the soul of listeners.
                </p><br/>
                <p  className=' text-black text-justify '>

                  In addition to his vocal ability, Bruno also demonstrates talent in playing instruments, particularly in creating unique sounds amidst other instruments through his intuition. His search for sonic references that inspire him leads him to experiment with new arrangements and musical textures, resulting in an innovative and distinctive sound.
                </p><br/>
                <p  className=' text-black text-justify '>

                  Although he has no previous live performance experience, Bruno is determined to connect with his audience and take his music to the stage. His captivating presence and emotional delivery promise to create memorable moments during his future performances.
                </p><br/>
                <p  className=' text-black text-justify '>

                  Currently, Bruno is focused on releasing singles in order to gauge the reception of his work and carefully plan his next steps in his music career. His close connection to technology, combined with his background in the technological field, gives him a unique advantage in positioning himself as an independent musician and programmer.
                </p><br/>
                <p  className=' text-black text-justify '>

                  Get ready to engage with the immersive musicality and reflective lyrics of Bruno Ferreira Pedraça. Follow him on social media to stay up to date with the latest news on his music releases and to explore the connections between music and technology on his artistic journey.
                </p><br/>
                <p  className=' text-black text-justify '>

                  For more information and press inquiries, please contact Bruno Ferreira Pedraça&apos;s management team at xxx-xxx.
                </p><br/>
                <p  className=' text-black text-justify '>

                  Welcome an innovative artist who is ready to make his mark in the music industry - Bruno Ferreira Pedraça!
                </p>

              </div>
            </section>

          </div>
        </div>
      </>
    </>
  )
}

export default Speed