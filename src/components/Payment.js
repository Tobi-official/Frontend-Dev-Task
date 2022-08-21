import React from 'react'

function Payment({ cancel, pay }) {
  return (
    <div className='form-container'>
        <div className='payment-container'>
          <div className='payment-top-container'>
            <div>Item Name</div> <div><span>N</span>Price</div>
          </div>
          <div className='payment-bottom-container'>
            <div className='first-data'>
              <div>Data and usability</div>
              <div>50,000.00</div>
            </div>
            <div className='second-data'>
              <div>Shipping</div>
              <div><span>0.00</span></div>
            </div>
          </div>
          <div className='carting'>
              <div className='total'>Total</div>
              <div className='value'>50,000.00</div>
            </div>
        </div>
        <button onClick={pay}>Pay</button>  <span className='cancel-span' onClick={cancel}>Cancel Payment</span>
    </div>
  )
}

export default Payment