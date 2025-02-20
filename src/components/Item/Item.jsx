import './Item.css';

function Item({producto,precio}) {

    function encargar(){
        console.log("Encargaste: ",producto)
    }

    return (
          <div className='cards'>
            <h2>{producto || "Sin stock"}</h2>
            <p>Precio ${precio || "Sin stock" } </p>
            <button disabled={!producto} className='boton' onClick={() => encargar()}> Encargar</button>
          </div>
    );
};

export default Item;    