
import React from 'react';
import { wInfo, withInfoStyles } from './utils';
import { withInfo } from '@storybook/addon-info'
import { addDecorator } from '@storybook/react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

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
    <Button bg="green">Hello world2</Button>
  ));

  
 

  // .addWithJSX(
  //   'with background',
  //   () => (<Button bg="palegoldenrod">Hello world</Button>),
  //   { info: { inline: withInfoStyles.inline, source: withInfoStyles.source, styles: withInfoStyles.styles, 
  //     text: `
  //       description
        
  //       ~~~js
  //       <Button>slkdjslkdj</Button>
  //       ~~~
  //     `} 
  //   }
  // )
  