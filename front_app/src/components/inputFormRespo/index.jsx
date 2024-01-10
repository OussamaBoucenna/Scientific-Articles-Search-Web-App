
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";

const InputFormRespo = ({type,label,icon,valInput,onChange}) => {
  const handleChangeCode =(e) => {
    onChange(e.target.value); 
  }
    return ( 
        <div className="space-x-2 md:space-x-6 items-center px-2 py-3 md:px-0 md:py-4 relative flex border-2 rounded-2xl border-darkBlue text-darkBlue">
            <label className="font-semibold absolute bg-white px-3 top-[-12px] left-10">
              {label}
            </label>
            {icon === 'email' && <TfiEmail className="text-darkBlue w-5 h-5 md:w-7 md:h-7" />}
            {icon === 'password' && <RiLockPasswordLine className=" w-5 h-5 md:w-7 md:h-7"/>}
           
            <input className="outline-0 border-0 w-full bg-none" type={type} value={valInput} onChange={(e) => handleChangeCode(e)} /> 
        </div>
     );
}
export default InputFormRespo;