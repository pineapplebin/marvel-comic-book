import { FC, useCallback, useState } from 'react'
import CanvasImage from 'src/components/CanvasImage'
import { Common } from 'src/typings/global'
import { calculateContainSize, calculateTranslate } from 'src/utils/calculate'
import styles from './styles.module.css'

export interface MagicPageProps {
  containerSize: Common.Size
  src?: string
}

interface TransformSetting {
  scale?: number
  translate?: number[]
}

function turnTransformSetting(setting: TransformSetting): string {
  const { scale, translate } = setting
  return [
    scale && `scale3d(${scale}, ${scale}, 1)`,
    translate && `translate(${translate[0]}px, ${translate[1]}px)`,
  ]
    .filter((s) => !!s)
    .join(' ')
}

const MagicPage: FC<MagicPageProps> = ({ containerSize, src }) => {
  const [transform, setTransform] = useState<string>('')

  const handleImgSize = useCallback(
    (img: HTMLImageElement) => {
      const containResult = calculateContainSize(containerSize, img)
      const scale = containResult.width / img.width
      const translate = calculateTranslate(containerSize, containResult, scale)
      setTransform(turnTransformSetting({ scale, translate }))
    },
    [containerSize],
  )

  return (
    <div className={styles.container}>
      <div className={styles.scaleZone} style={{ transform }}>
        <CanvasImage src={src} onLoad={handleImgSize} />
      </div>
    </div>
  )
}

export default MagicPage
