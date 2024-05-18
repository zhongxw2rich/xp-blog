import Link from 'next/link'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string}[] = [
    { label: 'Home', page: '/' },
    { label: 'Blog', page: '/blog' },
    { label: 'Data' , page: '/data' },
    { label: 'Chat', page: '/chat' },
    { label: 'About', page: '/about' }
]

const Header = () => {
  return (
    <header className={styles.header}>
        <ul>
        {navItems.map(({ label, page}) => (
            <li key={label}>
                {page ? (<Link href={page}>{label}</Link>) :  
                    (<Link href='/'>{label}</Link>)
                }
            </li>
        ))}
      </ul>
    </header>
  )
}

export default Header;