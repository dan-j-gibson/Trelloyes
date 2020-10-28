import React from 'react';
import List from './List';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';


it('2nd TEST FOR LIST EXECUTED',() => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
});