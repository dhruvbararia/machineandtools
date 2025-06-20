// src/components/ui/TouchOptimized.tsx
import { ReactNode } from 'react'

interface TouchOptimizedProps {
  children: ReactNode
  className?: string
  onTap?: () => void
  disabled?: boolean
}

export default function TouchOptimized({ 
  children, 
  className = '',
  onTap,
  disabled = false
}: TouchOptimizedProps) {
  return (
    <div
      className={`
        touch-target
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      onClick={disabled ? undefined : onTap}
      role={onTap ? 'button' : undefined}
      tabIndex={onTap && !disabled ? 0 : undefined}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onTap && !disabled) {
          e.preventDefault()
          onTap()
        }
      }}
    >
      {children}
    </div>
  )
}