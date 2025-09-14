import type { ComponentProps } from 'react'
import ThemeToggle from '@/modules/Navbar/ThemeToggle/ThemeToggle.tsx'
import { cn } from '@/utils/classNames'

interface NavbarProps extends ComponentProps<'div'> {}
function Navbar({ className }: NavbarProps) {
  return (
    <div className={cn(className, 'bg-surface p-sm border-[1px] border-border flex justify-around items-center')}>

      <ThemeToggle />

    </div>
  )
}
export default Navbar
