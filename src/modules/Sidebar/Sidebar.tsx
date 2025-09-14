import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { BiHome } from 'react-icons/bi'
import { CiCircleInfo } from 'react-icons/ci'
import LanguageToggle from '@/modules/Navbar/LanguageToggle/LanguageToggle.tsx'
import Button from '@/modules/shared/Button/Button.tsx'
import { useToggle } from '@/modules/shared/hooks/useToggle/useToggle.tsx'
import NavigationLink from '@/modules/Sidebar/components/NavigationLink.tsx'
import { RoutesPaths } from '@/providers/router/config'
import { cn } from '@/utils/classNames.ts'

interface SidebarProps extends React.ComponentProps<'div'> {}

function Sidebar({ className }: SidebarProps) {
  const [open, toggle] = useToggle()
  const { t } = useTranslation('common')

  return (
    <motion.div
      initial={{ flexBasis: '80px' }}
      animate={{ flexBasis: open ? '300px' : '80px' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        'flex border-border border-[1px] flex-col justify-between rounded-r-xl items-start p-sm bg-surface min-w-min',
        className,
      )}
    >
      <div>
        <NavigationLink
          isCollapsed={!open}
          label={t('navigation.main')}
          icon={<BiHome className="w-lg h-lg" />}
          to={RoutesPaths.MAIN}
        />
        <NavigationLink
          isCollapsed={!open}
          label={t('navigation.about')}
          icon={<CiCircleInfo className="w-lg h-lg" />}
          to={RoutesPaths.ABOUT}
        />
      </div>

      <div className="gap-2 w-full flex flex-col justify-items-center">
        <AnimatePresence>
          {open && (
            <motion.div
              key="language-toggle"
              className="w-fit"
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

        <Button className="w-fit" onClick={() => toggle()}>
          {open ? 'Close' : 'Open'}
        </Button>
      </div>
    </motion.div>
  )
}

export default Sidebar
