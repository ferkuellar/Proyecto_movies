import {db} from '../firebase/firebase'
import { 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    updateDoc,
    deleteDoc
  }
from "firebase/firestore";

const CrudPage = () => {
  const crearPelicula = async () => {
    const pelicula = {
      id: 101,
      title: 'Ironman 2',
      image: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/02/pIoxmlNcTCYLuJ3nmsXft351FJkwbH-scaled.jpg?fit=2560%2C1348&quality=50&strip=all&ssl=1",
    };

    const collectionPeliculas = collection(db, "peliculas");
    await addDoc(collectionPeliculas, pelicula);
    await obtenerPeliculas();
  };

  const obtenerPeliculas = async () => {
    const collectionPeliculas = collection(db, "peliculas");
    const resp = await getDocs(collectionPeliculas);
    const peliculas = resp.docs.map((pelicula) => ({
      id: pelicula.id,
      ...pelicula.data(),
    }));
    console.log(peliculas);
    const autor = import.meta.env.VITE_NAME;

    console.log(autor);
  };

  const actualizarPelicula = async () =>{
    const pelicula = {
      id: 102,
      title: 'Ironman 3',
      image: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/02/pIoxmlNcTCYLuJ3nmsXft351FJkwbH-scaled.jpg?fit=2560%2C1348&quality=50&strip=all&ssl=1",
    };

    const registro = doc(db, "peliculas", "vwSLlKxtcvzCBIF48idy"); // es el registro de la pelicula
    await updateDoc(registro, pelicula);
    await obtenerPeliculas();
  };

  const eliminarPelicula = async () =>{
    const registro = doc(db, "peliculas", "VEYrYcpTW6XCokxHy5Jo");
    await deleteDoc(registro);
    await obtenerPeliculas();
  };

  return ( 
      <>
        <main className="row">
          <article className='col'>
            <h1>Crud Page</h1>
          </article>
        </main>

        <section className="row">
          <article className="col">
            <button type='button' 
                    className='btn btn-success'
                    onClick={crearPelicula}>
                Agregar
            </button>
            
            <button type="button" 
                    className="btn btn-info"
                    onClick={obtenerPeliculas}>
                    
                Obtener
            </button>

            <button type="button" 
                    className="btn btn-danger"
                    onClick={eliminarPelicula}>
                Borrar
            </button>
            
            <button type="button" 
                    className="btn btn-warning"
                    onClick={actualizarPelicula}>
                Actualizar
            </button>
            
          </article>
        </section>
      </>
  );
};

export default CrudPage;
