// src/components/ThemeProvider.tsx - Theme Management Component
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'default' | 'green' | 'industrial' | 'tech' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  themes: { value: Theme; label: string; colors: string[] }[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const availableThemes = [
  {
    value: 'default' as Theme,
    label: 'Default Blue',
    colors: ['#3b82f6', '#fbbf24', '#1e40af']
  },
  {
    value: 'green' as Theme,
    label: 'Green Manufacturing',
    colors: ['#059669', '#fbbf24', '#064e3b']
  },
  {
    value: 'industrial' as Theme,
    label: 'Industrial Red',
    colors: ['#dc2626', '#f97316', '#7f1d1d']
  },
  {
    value: 'tech' as Theme,
    label: 'Tech Purple',
    colors: ['#7c3aed', '#06b6d4', '#4c1d95']
  },
  {
    value: 'dark' as Theme,
    label: 'Dark Mode',
    colors: ['#374151', '#fbbf24', '#111827']
  }
]

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('default')

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme && availableThemes.find(t => t.value === savedTheme)) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    document.documentElement.className = theme === 'default' ? '' : `theme-${theme}`
    
    // Save theme to localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: availableThemes }}>
      {children}
    </ThemeContext.Provider>
  )
}

