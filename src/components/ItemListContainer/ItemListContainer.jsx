import './ItemListContainer.css';
import Item from '../Item/Item';
function ItemListContainer() {
    return (
        <div className='container-cards'>
          <Item />
          <Item />
          <Item />
      </div>
    );
};

export default ItemListContainer;