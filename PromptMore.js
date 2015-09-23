'use strict';

var prompt = require('prompt');
prompt.start();

function promptUser() {
    prompt.get(['input'], function(error, result) {
        console.log('input: ' + result['input']);
        if (result['input'] === 'exit') {
            return false;
        }
        promptUser();
    });
}

promptUser();