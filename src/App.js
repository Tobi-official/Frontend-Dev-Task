import React from 'react'
import Billing from './components/Billing'
import Header from './components/Header'
import Info from './components/Info'
import Payment from './components/Payment'
import Confirm from './components/Confirm'

export default function App() {

  // Return Home handler
  const home = () => {
    setPersonal(prev => prev = true)
    setPersonal(prev => prev = true)
    window.location.reload()
  }

  // Payment handle 
  const pay = () => {
    setPayment(prev => prev = setConfirm(true))
  }

  //Cancel Handle 
  const cancel = (e) => {
    e.preventDefault()
    alert("You are about to cancel your cart? click ok to proceed")
    if(alert) {
      setFormData('')
      setBillForm('')

      setPersonal(true)
      setBilling(false)
      setPayment(false)
    }
    window.location.reload()
    return
  }

  // Payment State
  var [payment, setPayment] = React.useState(false)

  //on Submit Payment
  const [billForm, setBillForm] = React.useState({
    cardname: "",
    cardtype: "",
    details: "",
    exp: "",
    cvv: ""
  })

  const handleBill = (e) => {
    const {name, value, type, checked} = e.target
    setBillForm(prev => {
      return {
        ...prev, [name]: type === "select" ? "selected" : value 
      }
    })
    
  }

  const onBillSubmit = (e) => {
    e.preventDefault()

    if(billForm.cardname == '') {
      alert("Please input ypur card name")
      return
    }else if(billForm.cardtype == ''){
      alert("Select your card type")
      return
    }else if(billForm.details == ''){
      alert("Enter your card number")
      return
    }else if(billForm.cvv == ''){
      alert("Enter your cvv")
      return
    }
    setBilling(prev => prev = setPayment(true))
  }



  // On submit info
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    lga: "",
    state: ""

  })

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target
    setFormData(prev => {
      return {
        ...prev, [name]: type === "select" ? "selected" : value 
      }
    })
  }

 const onSubmit = (e) => {
    e.preventDefault()

    if(formData.name == '') {
      alert("Please enter your name")
      return
    }else if(formData.email == ''){
      alert("Please enter email")
      return
    }else if(formData.state == ''){
      alert("Select your state")
      return
    }

    setPersonal(prev => prev = setBilling(true))
  }

  // Slides
  var [personal, setPersonal] = React.useState(true)
  var [billing, setBilling] = React.useState(false)
  var [confirm, setConfirm] = React.useState(false)

  const onClick = (id) => {
    if(id !== 1 ) {
      setPersonal((prev) => prev !== personal )
    } else if(id == 1) {
      setPersonal((prev) => prev == personal)
    } 

    if(id == 2) {
      setBilling((prev) => prev == billing)
    }else {
      setBilling(prev => prev !== billing)
    }
  }
  if(personal) {
    payment = false
  }

  return (
    <div className='main-container'>
        {!confirm ? <Header onClick={onClick} 
          personal={personal} 
          billing={billing} 
          payment={payment}
          confirm={confirm} 
        /> : ''}
        {personal && <Info handleChange={handleChange} cancel={cancel} onSubmit={onSubmit} formData={formData} />}

        {billing && <Billing handleBill={handleBill} cancel={cancel} billForm={billForm} onBillSubmit={onBillSubmit} />}
        
        {payment && <Payment pay={() => pay()} cancel={cancel} />}
        
        {confirm && <Confirm home={() => home()} />}
    </div>
  )
}



