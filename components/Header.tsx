import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'
import ThemeSwitch from './ThemeSwitch'
import { HeaderNavLinks, useAppProvider } from 'provider/AppProvider'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const Header = () => {
  const appProviderContext = useAppProvider()
  const router = useRouter()
  const { headerNavLinks } = appProviderContext || { headerNavLinks: [] as HeaderNavLinks }

  return (
    <header className="flex items-center justify-between py-10">
      {/* {!isLoginPage && ( */}
      <>
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              {/* <div className="mr-3">
                <Logo />
              </div> */}
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => {
                  if (link.title == 'logout') {
                    Cookies.remove('auth_token')
                    router.push('/')
                    localStorage.removeItem('email')
                  }
                }}
                className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
              >
                {link.title}
              </Link>
            ))}
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </>
    </header>
  )
}

export default Header
