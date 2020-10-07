import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import './collection-previw.styles.scss';

const CollectionPreview = ({...props}) => {

    return (
       <div className="collection-preview">
            <h1 className="title">
                {props.title.toUpperCase()}
            </h1>
            <div className="preview">
                {
                    props.items.filter((item, id) => id < 4)
                    .map(({id, ...otherProps}) => (
                        <CollectionItem key={id} {...otherProps} />
                    ))
                }
            </div>
       </div>
      );
}
 
export default CollectionPreview;