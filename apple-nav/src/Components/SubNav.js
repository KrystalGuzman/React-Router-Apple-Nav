
import appleNavData from '../AppleNavData.js' ;
import React from 'react';
import {Link} from "react-router-dom";




function SubNav(props) {
    
    console.log(props.match.params.banana)
    let bananaId = props.match.params.banana;
    let copy = appleNavData[bananaId].sub;
    console.log(copy);
    return (
        <div className="another">
            {copy.map(item => (
                <div >
                    <Link 
                        className="sub-list-items"
                        key={item.id}
                        to={`/${props.match.params.banana}/${item.name}`}>
                        <img src={item.img} alt=" " />
                        {item.name}
                    </Link>
                </div>
                
                )
            )}
        </div>
    )}

    

export default SubNav;
