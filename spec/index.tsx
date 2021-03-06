import App from '../src/App';
import React from 'react';
import ReactDOM from 'react-dom';

describe('scaffolding', function () {
    it('should display hi in the body of the document', function () {
        let root = document.createElement('div');
        document.body.appendChild(root);

        ReactDOM.render(<App/>, root);

        expect(document.body.innerText).toContain("hi!")
    });
});
