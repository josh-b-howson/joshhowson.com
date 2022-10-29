import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Layout from '../components/Layout/Layout'

export default {
  title: 'Layout',
  component: Layout
} as ComponentMeta<typeof Layout>;

export const Base: ComponentStory<typeof Layout> = (args) => <Layout {...args}></Layout>