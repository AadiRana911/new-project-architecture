import type { StorybookConfig } from '@storybook/nextjs'
import type { Configuration } from 'webpack'
const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    staticDirs: ['../public'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-actions',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async (confi: Configuration) => {
        confi.resolve!.alias!['next/image'] = require.resolve('./NextImage.js')
        confi.module!.rules!.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        })
        return confi
    },
    docs: {
        autodocs: 'tag',
    },
}
export default config
