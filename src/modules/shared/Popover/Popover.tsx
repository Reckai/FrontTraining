import type { ComponentProps } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/utils/classNames.ts'

interface PopoverProps extends ComponentProps<'div'> {
  isOpen: boolean

}

function Popover({ children, isOpen, className }: PopoverProps) {
  if (!isOpen)
    return null
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className={cn(className, 'absolute top-full mt-2 right-0 w-fit h-fit  translate-1/3 left-0 border-border border-2 rounded-md p-sm overflow-hidden')}>
      {children}
    </motion.div>
  )
}

export default Popover
