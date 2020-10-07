import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import SHOP_DATA from './shop-data';
import './shop-data.styles.scss';

class ShopPage extends React.Component {
   constructor(props){
       super(props);

      this.state = {
        shopData: SHOP_DATA
      }
   }
    render() { 
        const {shopData} = this.state;
        console.log("dadtaaaaaaaaaaa", shopData);
        return ( 
            <div className="shop-container">
                {
                    shopData.map(({id, ...otherProps}) => (
                        <CollectionPreview id={id} {...otherProps}  />
                    ))
                }
            </div>
         );
    }
}
 
export default ShopPage;