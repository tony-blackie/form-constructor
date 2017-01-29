import React, { Component } from 'react';

const ExampleJSON = () => {
//Such ugly JSX formatting is required for correct code display "as is".
    return (
<pre>
{`
It should be an array of objects.
Each form element should be
represented as a separate
object with such fields:

[
    {
        "type": "checkbox",
        "value": "This is my checkbox"
    },
    {
        "type": "label",
        "value": "This is a new label"
    },
    {
        "type": "text",
        "value": "Input text here"
    }
]
`}
</pre>
    );
};

export default ExampleJSON;