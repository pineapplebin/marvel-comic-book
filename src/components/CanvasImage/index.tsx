import { FC, useEffect, useRef, useState } from 'react'
import { Common } from 'src/typings/global'

export interface CanvasImageProps {
  src?: string
  onLoad?: (img: HTMLImageElement) => void
}

/**
 * 加载图片并在 canvas 中显示
 */
const CanvasImage: FC<CanvasImageProps> = ({ src, onLoad }) => {
  const ref = useRef<HTMLCanvasElement>(null)
  const [size, setSize] = useState<Common.Size>({ width: 0, height: 0 })

  useEffect(() => {
    if (!src) {
      return
    }

    const img = new Image()
    img.src = src

    img.onload = function () {
      setSize({ width: img.width, height: img.height })

      const ctx = ref.current?.getContext('2d')
      ctx?.clearRect(0, 0, ref.current?.width ?? img.width, ref.current?.height ?? img.height)
      ctx?.drawImage(img, 0, 0)

      onLoad?.(img)
    }
  }, [src, onLoad])

  return <canvas ref={ref} width={size.width} height={size.height}></canvas>
}

export default CanvasImage
