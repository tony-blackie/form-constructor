import React, { Component } from 'react';

const ExampleJSON = () => {
//Such ugly JSX formatting is required for correct code display "as is".
    return (
<pre>
{`
Each form element should be
represented as a separate
object:

[
    {
        "type": "checkbox",
        "value": "This is my checkbox"
    },
    {
        "type": "label",
        "value": "This is a new label"
    }
]
`}
</pre>
    );
};

export default ExampleJSON;