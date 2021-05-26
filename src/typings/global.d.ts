class LibFlexible {
  dpr: number
  rem: number

  px2rem(val: number): number
  px2rem(val: string): string

  rem2px(val: number): number
  rem2px(val: string): string

  refreshRem(): void
}

export declare global {
  interface Window {
    lib: {
      flexible: LibFlexible
    }
  }
}

export declare module Common {
  interface Size {
    width: number
    height: number
  }

  interface Position {
    x: number
    y: number
  }
}
