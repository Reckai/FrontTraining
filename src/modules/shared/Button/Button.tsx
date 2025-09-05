import { cn } from '@/utils/classNames.ts'

interface ButtonProps extends React.ComponentProps<'button'> {
  childrenClassNames?: 'string'
}

function Button({ children, className, childrenClassNames, onClick }: ButtonProps) {
  return (
    <div className={cn('w-fit flex items-center text-primary position-relative', className)}>
      <button onClick={onClick} className={cn('flex items-center border-border border-2 rounded-md p-sm', childrenClassNames)}>
        {children}
      </button>

    </div>
  )
}

export default Button
