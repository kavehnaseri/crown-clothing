import React from 'react'
import ShopData from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component { 
    constructor(props){
        super(props);

        this.state = {
            collection:ShopData
        }
    }

    render(){
        return (
            <div>
                {this.state.collection.map(item => (
                    <CollectionPreview title={item.title} items={item.items}/>
                ))}
            </div>
        );
    }
}

export default ShopPage;