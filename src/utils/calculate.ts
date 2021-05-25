import { Common } from 'src/typings/global'

/**
 * 计算 contain 形式的尺寸
 */
export function calculateContainSize(container: Common.Size, element: Common.Size): Common.Size {
  if (container.height === 0 || element.height === 0) {
    return { width: container.width, height: 0 }
  }
  const rContainer = container.width / container.height
  const rElement = element.width / element.height

  if (rElement <= rContainer) {
    return { width: container.height * rElement, height: container.height }
  } else {
    return { width: container.width, height: container.width / rElement }
  }
}

export function calculateTranslate(
  container: Common.Size,
  element: Common.Size,
  scale: number = 1,
): [number, number] {
  return [
    (container.width - element.width) / 2 / scale,
    (container.height - element.height) / 2 / scale,
  ]
}
