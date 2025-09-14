import type { Meta, StoryObj } from '@storybook/react-vite'

import { fn } from 'storybook/test'

import Button from './Button'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn(), variant: 'default', children: 'Button' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'default',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
}
export const Link: Story = {
  args: {
    variant: 'link',
  },
}
export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',

  },
}
export const Icon: Story = {
  args: {
    size: 'icon',
  },
}
