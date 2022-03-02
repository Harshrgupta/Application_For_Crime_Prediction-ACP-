import React from 'react';
import { useRouteMatch } from 'react-router-dom'
import './menu-container.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import MenuItem from '../menu-Item/menu-item.component';

const MenuContainer =  function(props) {

    const match = useRouteMatch();
    console.log(props);
    return (
        <div className="menu-container">
            <div className ="heading">
                {props.title}
            </div>
            <div className="menu-items">
                {props.items.map((item)=>{
                    return(<MenuItem key={item.id} {...item} link={props.link}/>)
                })}
            </div>
            <div className="button">
            <a href='https://www.indiacode.nic.in/handle/123456789/2263?sam_handle=123456789/1362' target="_blank"><CustomButton>View More</CustomButton></a>
            </div>
        </div>
    )
}

export default MenuContainer;