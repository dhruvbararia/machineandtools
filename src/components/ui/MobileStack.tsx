// src/components/ui/MobileStack.tsx
import { ReactNode } from 'react'

interface MobileStackProps {
  children: ReactNode
  className?: string
  spacing?: 'sm' | 'md' | 'lg'
}

export default function MobileStack({ 
  children, 
  className = '',
  spacing = 'md' 
}: MobileStackProps) {
  const spacingClasses = {
    sm: 'space-y-4',
    md: 'space-y-6 lg:space-y-8', 
    lg: 'space-y-8 lg:space-y-12'
  }

  return (
    <div className={`${spacingClasses[spacing]} ${className}`}>
      {children}
    </div>
  )
}
