import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import LanguageToggle from '@/modules/Navbar/LanguageToggle/LanguageToggle.tsx'
import Button from '@/modules/shared/Button/Button.tsx'
import { useToggle } from '@/modules/shared/hooks/useToggle/useToggle.tsx'
import { cn } from '@/utils/classNames.ts'

interface SidebarProps extends React.ComponentProps<'div'> {}

function Sidebar({ className }: SidebarProps) {
  const [open, toggle] = useToggle()

  return (
    <motion.div
      initial={{ flexBasis: '80px' }}
      animate={{ flexBasis: open ? '300px' : '80px' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        'flex border-border border-[1px] rounded-r-xl items-start p-sm bg-surface min-w-min',
        className,
      )}
    >
      <div className="self-end gap-2 flex flex-col justify-items-center">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
            >
              <LanguageToggle />
            </motion.div>
          )}
        </AnimatePresence>

        <Button onClick={() => toggle()}>
          {open ? 'Close' : 'Open'}
        </Button>
      </div>
    </motion.div>
  )
}

export default Sidebar
