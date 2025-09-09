import type { ComponentProps } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import ThemeToggle from '@/modules/Navbar/ThemeToggle/ThemeToggle.tsx'
import { cn } from '@/utils/classNames'

interface NavbarProps extends ComponentProps<'div'> {}
function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation('common')
  return (
    <div className={cn(className, 'bg-surface p-sm border-[1px] border-border flex justify-around items-center')}>
      <div className={cn('gap-2 flex')}>
        <Link className="text-primary " to="/">
          {t('navigation.main')}
        </Link>
        <Link to="/about">{t('navigation.about')}</Link>
      </div>
      <ThemeToggle />

    </div>
  )
}
export default Navbar
