import React from 'react'

export const FindUrl = (props) => {
     const params = props.match.params;
console.log(params);
    return (
        <div>
            <h1>FindUrl</h1>
        </div>
    )
}
