import { CSSProperties, FC, useCallback, useLayoutEffect, useRef, useState } from 'react'
import { Common } from 'src/typings/global'
import Hammer from 'hammerjs'
import cx from 'classnames'
import styles from './styles.module.css'

export type PositionSize = Common.Position & Common.Size

export interface RectMarqueeProps {
  value?: PositionSize
  onMove?: (delta: Common.Position) => void
}

const RectMarquee: FC<RectMarqueeProps> = ({ value, onMove }) => {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    console.log('init RectMarquee')
    const hm = new Hammer(ref.current!)

    hm.add(new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 50 }))
    if (onMove) {
      hm.on('pan', ({ deltaX, deltaY }) => onMove({ x: deltaX, y: deltaY }))
    }

    return () => {
      hm.destroy()
    }
  }, [onMove])

  const computedStyle: CSSProperties = {
    top: value?.y,
    left: value?.x,
    width: value?.width,
    height: value?.height,
  }
  console.log(computedStyle)

  return (
    <div ref={ref} className={styles.block} style={computedStyle}>
      <div className={cx(styles.controlDot)} />
    </div>
  )
}

export function useRectMarquee() {
  const [data, setData] = useState<PositionSize>({ x: 0, y: 0, width: 100, height: 100 })

  const handleMove = useCallback((delta: Common.Position) => {
    setData((prev) => ({ ...prev, x: prev.x + delta.x, y: prev.y + delta.y }))
  }, [])

  const marquee = <RectMarquee value={data} onMove={handleMove} />

  return { marquee }
}

export default RectMarquee
