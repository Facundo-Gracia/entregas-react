import './ItemListContainer.css';
import Item from '../Item/Item';
function ItemListContainer( {greetings}) {
    return (
      <>
        <h1> {greetings} </h1>
        <div className='container-cards'>
          <Item producto={"Torta oreo"} precio={15000}/>
          <Item producto={"Torta grido"} precio={30000}/>
          <Item />
      </div>
      </>
    );
};

export default ItemListContainer;