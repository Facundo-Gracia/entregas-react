import './ItemListContainer.css';
import Item from '../Item/Item';
function ItemListContainer() {
    return (
        <div className='container-cards'>
          <Item producto={"Torta oreo"} precio={15000}/>
          <Item producto={"Torta grido"} precio={30000}/>
          <Item />
      </div>
    );
};

export default ItemListContainer;