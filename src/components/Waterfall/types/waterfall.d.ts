export interface ViewCard {
  src: any
  id?: string
  backgroundColor?: string
  ref?: Ref<HTMLElement>
  dom?: HTMLImageElement
  width?: number
  height?: number
  curWidth?: number
  curHeight?: number
  style?: CssStyleObject
  cls?: string
  [attr: string]: any
}

interface Point {
  rowPerView: number
}

export type Breakpoints = Record<number, Point>

export interface WaterfallProps {
  breakpoints: Breakpoints
  width: number
  animationDuration: number
  animationDelay: number
  animationEffect: string
  hasAroundGutter: boolean
  gutter: number
  list: ViewCard[]
  animationPrefix: string
}

export interface ItemWidthProps {
  breakpoints: Breakpoints
  wrapperWidth: number
  gutter: number
  hasAroundGutter: boolean
  initWidth: number
}

export interface ItemWidthByBreakpointProps extends ItemWidthProps {
  size: number
}
