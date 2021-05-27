import { CSSProperties, FC } from 'react'
import { Common } from 'src/typings/global'
import cx from 'classnames'
import styles from './styles.module.css'

export type PositionSize = Common.Position & Common.Size

export interface RectMarqueeProps {
  value?: PositionSize
  onChange?: (val: PositionSize) => void
}

const RectMarquee: FC<RectMarqueeProps> = ({ value }) => {
  const computedStyle: CSSProperties = {
    top: value?.y,
    left: value?.x,
    width: `${value?.width ?? 0}px`,
    height: `${value?.height ?? 0}px`,
  }

  return (
    <div className={styles.block} style={computedStyle}>
      <div className={cx(styles.controlDot)} />
    </div>
  )
}

export default RectMarquee
