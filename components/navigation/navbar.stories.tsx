import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Navbar from './navbar';

const meta = {
  title: 'Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-100">
        <Story />
        <div className="pt-20 p-8">
          <p className="text-gray-600">Scroll down to see navbar background change</p>
          <div className="h-[200vh]" />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
