import type { Meta, StoryObj } from '@storybook/react'

import ComponentTemplate from '.'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/ComponentTemplate',
    component: ComponentTemplate,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        title: { control: 'text' },
        sub: { control: 'text' },
        showSub: { options: [true, false], control: { type: 'radio' } },
        imgUrl: { control: 'text' },
        background: { control: 'color' },
        children: { control: 'text' },
        onClick: { interaction: 'click' },
    },
} satisfies Meta<typeof ComponentTemplate>

export default meta
type Story = StoryObj<typeof ComponentTemplate>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    render: () => (
        <ComponentTemplate
            title="Hello World"
            showSub={false}
            background="yellow-600"
            imgUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            sub="Sub"
            onClick={() => console.log('Hello')}
        >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, soluta?
        </ComponentTemplate>
    ),
}

export const Secondary: Story = {
    render: () => (
        <ComponentTemplate
            title="Hello World"
            showSub={false}
            background="yellow-600"
            imgUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            sub="Sub"
            onClick={() => console.log('Hello')}
        >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, soluta?
        </ComponentTemplate>
    ),
}
