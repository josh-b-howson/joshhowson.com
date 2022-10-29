
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Articles from '../pages/articles'

export default {
  title: 'Page',
  component: Articles
} as ComponentMeta<typeof Articles>;

const Base: ComponentStory<typeof Articles> = (args) => <Articles {...args}></Articles>