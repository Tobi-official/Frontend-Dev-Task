import React from 'react'

function Billing({ billForm, handleBill, onBillSubmit, cancel }) {
  return (
    <div className='form-container'>
        <form onSubmit={onBillSubmit}>
            <div className='form-input bill'>
                <label htmlFor='cardname'>Name on Card<span>*</span></label>
                <input type="text" onChange={handleBill} value={billForm.cardname}  className='input-control' name='cardname' />
            </div>
            <div className='form-input bill'>
                <label htmlFor='cardtype'>Card Type<span>*</span></label>
                <select onChange={handleBill} value={billForm.cardtype} type="select" name="cardtype" className='input-control'>
                    <option onChange={handleBill}>---select---</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Verve">Verve</option>
                  </select>
            </div>
            <div className='location'>
              <div className='form-input-bill-flex1'>
                  <label htmlFor='details'>Card details <span>*</span></label>
                  <input type="text" className='input-control' name='details' onChange={handleBill} value={billForm.details} placeholder='4456 9876 6890 4657' />
              </div>
              <div className='form-input-bill-flex2 first'>
                  <label htmlFor='exp'>Expiry date <span>*</span></label>
                  <input type="text" onChange={handleBill} value={billForm.exp} className='input-control' name='exp' placeholder='MM/YY' maxLength={5} />
              </div>
              <div className='form-input-bill-flex2'>
                  <label htmlFor='cvv'>CVV <span>*</span></label>
                  <input type="password" onChange={handleBill} value={billForm.cvv} className='input-control' name='cvv' placeholder='cvv' maxLength={3} />
              </div>
            </div>

            <button>Next</button>  <span className='cancel-span' onClick={cancel}>Cancel Payment</span>
        </form>
    </div>
  )
}

export default Billing