// src/components/ui/ColorPreview.tsx - Show current theme colors
'use client'

export default function ColorPreview() {
  return (
    <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 z-50 hidden lg:block">
      <div className="text-sm font-medium text-gray-700 mb-2">Current Theme</div>
      <div className="grid grid-cols-3 gap-2">
        <div className="space-y-1">
          <div className="w-8 h-8 rounded bg-primary-600"></div>
          <div className="text-xs text-gray-600">Primary</div>
        </div>
        <div className="space-y-1">
          <div className="w-8 h-8 rounded" style={{backgroundColor: 'var(--color-secondary-400)'}}></div>
          <div className="text-xs text-gray-600">Secondary</div>
        </div>
        <div className="space-y-1">
          <div className="w-8 h-8 rounded" style={{backgroundColor: 'var(--color-primary-800)'}}></div>
          <div className="text-xs text-gray-600">Accent</div>
        </div>
      </div>
    </div>
  )
}