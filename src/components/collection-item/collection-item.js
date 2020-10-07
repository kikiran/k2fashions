import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({ ...props}) => {
    return ( 
        <div className="collection-item">
            <div className="image" 
                style={{backgroundImage: `url(${props.imageUrl})`}}

            />
            <div className="collection-footer">
                <div className="name">{props.name}</div>
                <div className="price">{props.price}</div>
            </div>
        </div>

     );
}
 
export default CollectionItem;