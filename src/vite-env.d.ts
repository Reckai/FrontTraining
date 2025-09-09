/// <reference types="vite/client" />

declare module '*.svg' {
  import type * as React from 'react'

  const ReactComponent: React.FC<React.SVGProps>
  export = ReactComponent
}
