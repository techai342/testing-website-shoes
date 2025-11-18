import React, { useState, useEffect } from 'react'

const ThemeManager = () => {
  const [currentTheme, setCurrentTheme] = useState(0)
  
  const themes = [
    'from-slate-900 via-purple-900 to-slate-900',
    'from-gray-900 via-blue-900 to-gray-900',
    'from-zinc-900 via-rose-900 to-zinc-900',
    'from-neutral-900 via-orange-900 to-neutral-900'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTheme((prev) => (prev + 1) % themes.length)
    }, 10000) // Change every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      className={`fixed inset-0 bg-gradient-to-br ${themes[currentTheme]} transition-all duration-1000 ease-in-out -z-10`}
      aria-hidden="true"
    />
  )
}

export default ThemeManager
