import React,{useRef} from 'react'

function IncomeForm({income,setIncome}) {
  const desc = useRef(null)
  const price = useRef(null)
  const date = useRef(null)
  const AddIncome = (e) =>{
    e.preventDefault()
    console.log(income.length)
    let d = date.current.value.split("-")
    console.log(d)
    let newD = new Date(d[0],d[1],d[2])
    console.log(newD)
    setIncome([...income, {
      "desc":desc.current.value,
      "price":price.current.value,
      "date":newD.getTime()

    }])
    desc.current.value = "";
    price.current.value=null;
    date.current.value=null;
  }
  return (
    <form className='income-form' onSubmit={AddIncome}>
      <div className='form-inner'>
        <input type="text" name="desc" id="desc" placeholder='Income Description' ref={desc}/>
        &nbsp;&nbsp;
        <input type="number" name="num" id="price" placeholder='Price' ref={price}/>
        &nbsp;&nbsp;
        <input type="date" name="date" id="date" ref={date}/>
        &nbsp;&nbsp;
        <input type="submit" value="ADD INCOME"/>
      </div>
    </form>
  )
}

export default IncomeForm
