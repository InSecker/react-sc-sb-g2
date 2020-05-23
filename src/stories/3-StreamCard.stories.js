import React from 'react';
import { action } from '@storybook/addon-actions';
import StreamCard, { colors } from '../ui/organisms/StreamCard';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: 'StreamCard',
    component: StreamCard,
    decorators: [withKnobs]
};



export const Online = () => <StreamCard live='true' viewers="1,7"/>;

export const Offline = () => <StreamCard/>;

export const Thumbnail = () => <StreamCard isThumbnail="true"/>;
