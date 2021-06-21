import React from 'react';

export default function Course(props) {
    let { title, score } = props;
    return (
        <div>
            {title}:{score}
        </div>
    )
}