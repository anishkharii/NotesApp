
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <div className='bg-primary text-text-light p-3 mb-5 flex justify-center items-center'>
        <h1 className=' text-2xl cursor-pointer' onClick={() => navigate('/')}>Notes App</h1>
    </div>
  )
}

export default Header