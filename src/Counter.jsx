import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { INCREMENT,DECREMENT,RESET,incrementByAmount } from './redux/counterSlice'


const Counter = () => {
 const{count}= useSelector(state=>state.counterReducer)
 const [amount,setAmount]=useState(0)
 const dispatch=useDispatch()

 const handleIncrementAmount=()=>{
  if(amount){
    dispatch(incrementByAmount(+amount))
  }else{
    alert("Please Enter an Amount!!!")
  }
 }
  return (
   <div className='container text-center  p-5' style={{color:'white'}}>
    <h1 className='mb-4'>Counter App</h1>
    <div style={{border:'solid ',padding:'40px',width:'800px',marginLeft:'200px',borderRadius:"20px"}}>
      <div className='display-1 my-3'>{count}</div>
      <div className='row justify-content-center mb-4'>
        <div className='col-auto'>
          <button onClick={()=>{dispatch(DECREMENT())}} className='btn btn-warning'>DECREMENT</button>
        </div>
        <div className='col-auto'>
          <button onClick={()=>{dispatch(RESET())}} className='btn btn-danger'>RESET</button>
        </div>
        <div className='col-auto'>
          <button onClick={()=>{dispatch(INCREMENT())}} className='btn btn-success'>INCREMENT</button>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-auto'>
          <div className='input-group'>
            <input onChange={e=>setAmount(e.target.value)} type="number" className='form-control' style={{width:'400px',height:'40px',marginRight:'10px',borderRadius:'10px',marginTop:'10px'}} placeholder='Enter the amount!!'/>
            <div className='input-group-append'>
              <button onClick={handleIncrementAmount} className='btn btn-primary' style={{width:'150px',marginBottom:'10px'}}>INCREMENT BY AMOUNT</button></div>
          </div>
        </div>
      </div>
    </div>

   </div>
  )
}

export default Counter