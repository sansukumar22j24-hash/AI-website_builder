'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const cursorX = useRef(0)
  const cursorY = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const animate = () => {
      cursorX.current += (mouseX.current - cursorX.current) * 0.1
      cursorY.current += (mouseY.current - cursorY.current) * 0.1

      if (cursorRef.current) {
        cursorRef.current.style.left = cursorX.current - 16 + 'px'
        cursorRef.current.style.top = cursorY.current - 16 + 'px'
      }

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = mouseX.current + 'px'
        cursorDotRef.current.style.top = mouseY.current + 'px'
      }

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed w-8 h-8 rounded-full border-2 border-primary/60 z-50 hidden lg:block"
      />
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed w-1 h-1 rounded-full bg-primary z-50 hidden lg:block -translate-x-1/2 -translate-y-1/2"
      />
    </>
  )
}
