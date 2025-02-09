import ModeTiggle from './ModeTiggle'
import NavItem from './NavItem'

export default function Header() {
    console.log('Header');
  return (
    <header className='w-full h-[70px] bg-secondary flex justify-between items-center px-4'>
        <img src='logo.png' alt='Logo' className=' h-[70px] w-auto' />
        <nav className=' flex justify-between items-center'>
            <ul className=' list-none flex items-center'>
                <NavItem txt='home' path='/' />
                <NavItem txt='profile' path='/profile' />
            </ul>
            <ModeTiggle />
        </nav>
    </header>
  )
}
