// src/components/ui/ResponsiveText.tsx
import { ReactNode } from 'react'

interface ResponsiveTextProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'p'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  align?: 'left' | 'center' | 'right'
}

export default function ResponsiveText({ 
  children,
  as: Component = 'p',
  size = 'md',
  className = '',
  align = 'left'
}: ResponsiveTextProps) {
  const sizeClasses = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl lg:text-2xl',
    xl: 'text-xl sm:text-2xl lg:text-3xl xl:text-4xl'
  }

  const alignClasses = {
    left: 'text-left',
    center: 'text-center lg:text-left',
    right: 'text-right'
  }

  return (
    <Component className={`${sizeClasses[size]} ${alignClasses[align]} ${className}`}>
      {children}
    </Component>
  )
}