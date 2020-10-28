import React from 'react';
import Card from './Card';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

it('TEST CODE #1: It renders w/o crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
});

it('SNAPSHOT: renders the UI as expected', () => {
    const tree = renderer
      .create(<Card name="Messages" unread={4}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });