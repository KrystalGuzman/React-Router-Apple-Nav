import appleNavData from '../AppleNavData.js' ;
import React from 'react';

function Page(props) {
    
    console.log(props.match.params.banana)
    let bananaId = props.match.params.banana;
    let copy = appleNavData[bananaId].sub;
    console.log(copy);
    return (
        <div className="page-div">
            {props.match.params.apple}
        </div>
    )}

    

export default Page;