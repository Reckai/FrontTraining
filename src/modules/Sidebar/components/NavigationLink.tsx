import { motion } from 'motion/react'
import { Link } from 'react-router'

interface NavigationLinkProps {
  to: string
  label: string
  icon?: React.ReactNode
  isCollapsed?: boolean // новый проп для контроля состояния сайдбара
}

const NavigationLink = ({ to, label, icon, isCollapsed = false }: NavigationLinkProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{

        duration: 0.3,
        ease: 'easeOut',
      }}
    >
      <Link
        className="flex items-center  p-3 rounded-lg hover:border-border hover:border-[1px] border-[1px] border-transparent transition-colors duration-200 group"
        to={to}
        title={isCollapsed ? label : undefined}
      >

        {icon && (
          <div
            className={`flex-shrink-0 transition-all duration-300 ${
              isCollapsed ? 'text-xl' : 'text-base'
            }`}
          >
            {icon}
          </div>
        )}

        <motion.span
          initial={false}
          animate={{
            marginLeft: isCollapsed ? 0 : 12,
            opacity: isCollapsed ? 0 : 1,
            width: isCollapsed ? 0 : 'auto',
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className={`whitespace-nowrap overflow-hidden ${
            isCollapsed ? 'pointer-events-none' : ''
          }`}
        >
          {label}
        </motion.span>
      </Link>
    </motion.div>
  )
}

export default NavigationLink
