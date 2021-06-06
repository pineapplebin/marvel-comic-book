import { useState, useRef, useLayoutEffect } from 'react'
import { Common } from 'src/typings/global'

export interface UseCountDownShowOptions {
  noCountdown?: boolean
  duration?: number
}

/**
 * 自动设置回 false 的 boolean 值
 */
export function useCountDownShow(options: UseCountDownShowOptions = {}) {
  const [timer, setTimer] = useState<number | null>(null)
  const [show, setShow] = useState<boolean>(false)

  const handleShow = () => {
    if (timer) {
      clearTimeout(timer)
    }
    setShow(true)
    if (options.noCountdown) {
      return
    }
    const newTimer = window.setTimeout(() => {
      setShow(false)
    }, options.duration ?? 3000)
    setTimer(newTimer)
  }

  const handleHide = () => {
    if (timer) {
      clearTimeout(timer)
    }
    setShow(false)
  }

  return { show, handleShow, handleHide }
}

/**
 * 获取元素尺寸
 */
export function useElementSize<E extends HTMLElement = any>() {
  const ref = useRef<E>(null)
  const [size, setSize] = useState<Common.Size>({ width: 0, height: 0 })

  useLayoutEffect(() => {
    function resize() {
      const rect = ref.current?.getBoundingClientRect()
      setSize({ width: rect?.width ?? 0, height: rect?.height ?? 0 })
    }
    window.addEventListener('resize', resize)
    // bug?
    setTimeout(() => {
      resize()
    }, 100)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return { ref, size }
}
