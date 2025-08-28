import { motion } from 'framer-motion'
import React from 'react'
import { useToggle } from '@/modules/shared/hooks/useToggle/useToggle.tsx'
import { useTheme } from '@/theme/hooks/useTheme.ts'
import { cn } from '@/utils/classNames.ts'

interface SidebarProps extends React.ComponentProps<'div'> {}

function Sidebar({ className }: SidebarProps) {
  const [open, toggle] = useToggle(false)
  const { theme } = useTheme()
  return (
    <motion.div
      initial={{ flexBasis: '80px' }} // 1/6
      animate={{ flexBasis: open ? '300px' : '80px' }} // 2/6 vs 1/6
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        'flex border-border border-[1px] rounded-r-xl items-start p-sm bg-surface min-w-min',
        className,
      )}
    >
      <button
        className={cn('cursor-pointer bg-primary  rounded-md p-sm', theme === 'dark' ? 'text-background' : 'text-white')}
        onClick={toggle}
      >
        {open ? 'Open' : 'Closed'}
      </button>

    </motion.div>
  )
}

export default Sidebar
