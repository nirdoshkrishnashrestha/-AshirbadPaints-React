import React, { useState } from 'react'

function Form() {
    const initialvalues = {username:'',fname:'',lname:''}
    const [fieldvalue,fielddata] = useState(initialvalues);

    const handlefield=(e)=>
    {
       const name = e.target.name; 
       const value = e.target.value; 
       fielddata({ ...fieldvalue, [name]:value}); //// Takes initial values from ...fieldvalue and set name and values
       console.log(fieldvalue);
    }
 
    const handlesubmit=(e)=>
    {
        e.preventDefault();
        
    }

  return (<div className='text-center mt-5'>
   
    <form>
        <input type="text" name='username' onChange={handlefield} value={fieldvalue.username} /><br/>
        <input type="text" name='fname' onChange={handlefield} value={fieldvalue.fname} /><br/>
        <input type="text" name='lname' onChange={handlefield} value={fieldvalue.lname} /><br/><br/>
        <button type='submit' onClick={handlesubmit}>Submit</button>
    </form>
    
   </div>)
}

export default Form