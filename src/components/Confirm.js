import React from 'react'

function Confirm({ home }) {
  return (
    <div className='confirm-container'>
        <div className='container-confirm'>
          <div className='confirm-heading'>
            <div className='confirm-tick'><img src={require ('../images/tick.png')} /></div>
            <h2>Purchase Completed</h2>
          </div>
          <div><small className='confirm-small'>Please check your email for details concerning <br/> the transaction</small></div>
          <span className='confirm-span' onClick={home}>Return Home</span>
        </div>
    </div>
  )
}

export default Confirm