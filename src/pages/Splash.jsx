import { useNavigate } from 'react-router-dom'
import logo from '../assets/icons/Logo-removebg-preview.png'

export default function Splash() {
  const navigate = useNavigate()
  return (
    <div
      role="button"
      tabIndex={0}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-violet-200 to-sky-200 cursor-pointer"
      onClick={() => navigate('/home')}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/home') }}
      title="Click anywhere to continue"
    >
      <div className="grid-overlay absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div className="relative z-10 text-center px-6">
        <img src={logo} alt="Company Logo" className="mx-auto w-40 sm:w-56 md:w-64 drop-shadow-xl" />
        <p className="mt-6 text-gray-700">Datenstrom 3AGsolution</p>
        <p className="mt-2 text-sm text-gray-600">Click anywhere to continue</p>
      </div>
    </div>
  )
}
