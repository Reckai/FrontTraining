import type { CSSProperties, ReactNode } from 'react'

export type PopoverPlacement
    = | 'top'
      | 'top-start'
      | 'top-end'
      | 'bottom'
      | 'bottom-start'
      | 'bottom-end'
      | 'left'
      | 'right'

// Тип для функции контента с параметрами
export type PopoverContentFunction = (params: { close: () => void }) => ReactNode

// Основной тип для пропсов компонента
export interface PopoverProps {
  /** Элемент-триггер для отображения popover */
  children: ReactNode

  /** Контент popover - может быть JSX или функцией */
  content: ReactNode | PopoverContentFunction

  /** Позиция popover относительно триггера */
  placement?: PopoverPlacement

  /** Показывать ли стрелку */
  showArrow?: boolean

  /** CSS класс для wrapper элемента */
  className?: string

  /** CSS класс для контента popover */
  contentClassName?: string

  /** Отступ от триггера в пикселях */
  offset?: number

  /** Отключить popover */
  disabled?: boolean

  /** Коллбек при изменении состояния открытия */
  onOpenChange?: (open: boolean) => void

  /** Открыт ли popover по умолчанию */
  defaultOpen?: boolean
}

// Тип для конфигурации позиционирования
export interface PlacementConfig {
  popover: string
}

// Тип для позиции стрелки
export interface ArrowPosition {
  style: CSSProperties
  classes: string
}

// Тип для размеров элемента
export interface ElementRect {
  width: number
  height: number
  top: number
  left: number
  bottom: number
  right: number
}
