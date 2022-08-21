import React from 'react'

function Info({ handleChange, onSubmit, formData, cancel }) {

  return (
    <div className='form-container'>
        <form onSubmit={onSubmit}>
            <div className='form-input'>
                <label htmlFor='name'>Name</label>
                <input type="text" className='input-control' onChange={handleChange} name='name' value={formData.name} />
            </div>
            <div className='form-input'>
                <label htmlFor='email'>Email Address<span>*</span></label>
                <small>The purchase receipt would be sent to this address</small>
                <input type="text" className='input-control' onChange={handleChange} name='email' value={formData.email} />
            </div>
            <div className='form-input address'>
                <label htmlFor='address1'>Address 1</label>
                <input type="text" className='input-control' onChange={handleChange} name='address1' value={formData.address1} />
            </div>
            <div className='form-input'>
                <label htmlFor='address2'>Address 2</label>
                <input type="text" className='input-control' onChange={handleChange} name='address2' value={formData.address2} />
            </div>
            <div className='location'>
              <div className='form-input-flex1'>
                  <label htmlFor='lga'>Local Government</label>
                  <input type="text" className='input-control' onChange={handleChange} name='lga' value={formData.lga} />
              </div>
              <div className='form-input-flex2'>
                  <label htmlFor='state'>State</label>
                  <select type="select" name="state" className='input-control' onChange={handleChange}>
                    <option name="state" value={formData.state}>---select---</option>
                    <option value="Ekiti">Ekiti</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Kano">Kano</option>
                  </select>
              </div>
            </div>

            <button>Next</button>  <span className='cancel-span' onClick={cancel}>Cancel Payment</span>
        </form>
    </div>
  )
}

export default Info