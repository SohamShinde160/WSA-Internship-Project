import React from 'react'

const Restaurant = () => {
  return (
    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
        <div className='card p-3 rounded'>
            <img src='https://b.zmtcdn.com/data/pictures/chains/3/1600033/93776f3249312397e2c2ba274b4812ec.jpg?fit=around|750:500&crop=750:500;*,*' alt='kfc'></img>
            <div className="card-body d-flex flex-column">
                <h5 className='card-title'>KFC Chicken Lollipop</h5>
                <p className='rest_address'>1123 street, Dubai , India</p>
                <div className='rating-outer'>
                    <div className='rating-inner'></div>
                    <span id="no_of_reviews">(140 reviews)</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Restaurant