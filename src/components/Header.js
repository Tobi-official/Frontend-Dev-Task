import React from 'react'

function Header({ onClick, personal, billing, payment }) {
  return (
    <div className='heading'>
        <h3>Complete Your Purchase</h3>
        <div className='links-slide'>
          <h4 className={personal ? 'personal-info active' : 'personal-info'} 
                  onClick={() => onClick(1)}
               >Personal Info 
                {personal && <hr style={{ display: 'block' }} />}
            </h4>
            <h4 className={billing ? 'billing-info active' : 'billing-info' } 
              onClick={() => onClick(2)}> Billing Info
              {billing && <hr style={{ display: 'block' }} />}
              {payment && <hr style={{ display: 'block' }} />}
            </h4>
            <h4 className='confirm-payment'>Confirm Payment
              <hr />
            </h4> 
        </div>
    </div>
  )
}

export default Header