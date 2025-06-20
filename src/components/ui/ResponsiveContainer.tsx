// src/components/ui/ResponsiveContainer.tsx
'use client'

import { ReactNode } from 'react'

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export default function ResponsiveContainer({ 
  children, 
  className = '', 
  size = 'lg' 
}: ResponsiveContainerProps) {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl', 
    lg: 'max-w-7xl',
    xl: 'max-w-8xl',
    full: 'max-w-none'
  }

  return (
    <div className={`${sizeClasses[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}