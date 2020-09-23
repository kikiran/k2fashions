import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';

class Directory extends React.Component {
    state = { 
        sections: [
            {
              title: 'hats',
              imageUrl: 'https://images.unsplash.com/photo-1458546450666-ebb1e605853f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80',
              id: 1,
              linkUrl: 'hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/dgcsLhT/photo-1483985988355-763728e1935b.jpg',
              size: 'large',
              id: 4,
              linkUrl: 'womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://images.unsplash.com/photo-1446214814726-e6074845b4ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=461&q=80',
              size: 'large',
              id: 5,
              linkUrl: 'mens'
            }
          ]
    };
     
    render() { 
        
        return ( 
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...props}) => (
                        <MenuItem key={id} {...props}    />
                    ))
                }
            </div>
         );
    }
}
 

export default Directory;