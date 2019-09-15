import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => (
    <div className="counterOutput">
        Current Value: {props.value}
    </div>
);

export default counterOutput;