import React from 'react'
import CountRes from './CountRes'
import Restaurant from './Restaurant'

const Home = () => {
  return (
    <>
        <CountRes/>
        <section className=''>
            <div className='sort'>
                <button className='sort_veg p-3'>Pure Veg</button>
                <button className='sort_rev p-3'>Sort By Review</button>
                <button className='sort_rate p-3'>Sort By Rating</button>
            </div>
            <div className='row mt-4'>
                <Restaurant/>
            </div>
        </section>
    </>
  )
}

export default Home