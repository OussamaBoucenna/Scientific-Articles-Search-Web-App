import './StyleUnpute.css'
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";

const InputForm = ({type,label,icon,onChange}) => {
  const handleChangeCode =(e) => {
    onChange(e.target.value); 
  }
    return ( 
        <div className='container'>
            <label className='lexen-bold'>
              {label}
            </label>
            {icon === 'email' && <TfiEmail className='ico' />}
            {icon === 'password' && <RiLockPasswordLine className='ico'/>}
           
            <input className='our-inpute' type={type} onChange={(e) => handleChangeCode(e)} /> 
        </div>
     );
}
 
export default InputForm;