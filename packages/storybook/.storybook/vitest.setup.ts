import * as a11yAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/react-vite';
import { beforeAll } from 'vitest';
import * as previewAnnotations from './preview';

const annotations = setProjectAnnotations([a11yAnnotations, previewAnnotations]);

beforeAll(annotations.beforeAll);
