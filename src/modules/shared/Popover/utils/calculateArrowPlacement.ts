// import type { CSSProperties } from 'react'
// import type { ArrowPosition, ElementRect, PopoverPlacement } from '@/modules/shared/Popover/types.ts'
//
// function calculateArrowPosition(triggerRect: ElementRect, popoverRect: ElementRect, placement: PopoverPlacement): ArrowPosition {
//   const triggerCenter = {
//     x: triggerRect.width / 2,
//     y: triggerRect.height / 2,
//   }
//
//   // Минимальные отступы от краев popover для стрелки
//   const arrowPadding = 12
//
//   const arrowStyle: CSSProperties = {}
//   let arrowClasses = 'absolute w-0 h-0 border-4 border-white'
//
//   if (placement.includes('top')) {
//     arrowStyle.top = '100%'
//     arrowClasses += ' border-l-transparent border-r-transparent border-b-transparent'
//
//     if (placement === 'top') {
//       // Стрелка указывает на центр триггера
//       arrowStyle.left = `${Math.min(Math.max(triggerCenter.x, arrowPadding), popoverRect.width - arrowPadding)}px`
//       arrowStyle.transform = 'translateX(-50%)'
//     }
//     else if (placement === 'top-start') {
//       arrowStyle.left = `${Math.min(triggerCenter.x, popoverRect.width - arrowPadding)}px`
//       arrowStyle.transform = 'translateX(-50%)'
//     }
//     else if (placement === 'top-end') {
//       arrowStyle.right = `${Math.min(triggerCenter.x, popoverRect.width - arrowPadding)}px`
//       arrowStyle.transform = 'translateX(50%)'
//     }
//   }
//
//   else if (placement.includes('bottom')) {
//     arrowStyle.bottom = '100%'
//     arrowClasses += ' border-l-transparent border-r-transparent border-t-transparent'
//
//     if (placement === 'bottom') {
//       arrowStyle.left = `${Math.min(Math.max(triggerCenter.x, arrowPadding), popoverRect.width - arrowPadding)}px`
//       arrowStyle.transform = 'translateX(-50%)'
//     }
//     else if (placement === 'bottom-start') {
//       arrowStyle.left = `${Math.min(triggerCenter.x, popoverRect.width - arrowPadding)}px`
//       arrowStyle.transform = 'translateX(-50%)'
//     }
//     else if (placement === 'bottom-end') {
//       arrowStyle.right = `${Math.min(triggerCenter.x, popoverRect.width - arrowPadding)}px`
//       arrowStyle.transform = 'translateX(50%)'
//     }
//   }
//
//   else if (placement === 'left') {
//     arrowStyle.left = '100%'
//     arrowStyle.top = `${Math.min(Math.max(triggerCenter.y, arrowPadding), popoverRect.height - arrowPadding)}px`
//     arrowStyle.transform = 'translateY(-50%)'
//     arrowClasses += ' border-t-transparent border-b-transparent border-r-transparent'
//   }
//
//   else if (placement === 'right') {
//     arrowStyle.right = '100%'
//     arrowStyle.top = `${Math.min(Math.max(triggerCenter.y, arrowPadding), popoverRect.height - arrowPadding)}px`
//     arrowStyle.transform = 'translateY(-50%)'
//     arrowClasses += ' border-t-transparent border-b-transparent border-l-transparent'
//   }
//
//   return { style: arrowStyle, classes: arrowClasses }
// }
//
// function calculateArrowPosition(triggerRect: ElementRect, popoverRect: ElementRect, placement: PopoverPlacement): ArrowPosition {
//   const triggerCenter = {
//     x: triggerRect.width / 2,
//     y: triggerRect.height / 2,
//   }
//   const arrowPadding = 12
//   const arrowStyle: CSSProperties = {}
//   const arrowClasses = 'absolute w-0 h-0 border-4 border-border'
// }
