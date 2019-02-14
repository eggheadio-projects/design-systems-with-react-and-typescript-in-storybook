
import React from 'react';
import { wInfo } from './utils';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { color } from '@storybook/addon-knobs/react';

storiesOf('Button', module)
  .addWithJSX(
    'with background',
    wInfo(`
      description
      
      ~~~js
      <Button>slkdjslkdj</Button>
      ~~~
      `)(() => <Button bg="palegoldenrod">Hello world</Button>),
  )
  .addWithJSX('with background 2', () => (
    <Button bg={color('bg', 'green', 'group1')}>Hello world2</Button>
  ));