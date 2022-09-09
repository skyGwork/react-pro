import { Link } from 'react-router-dom';
import products from '../model/product';

const Products = () => {
  return (
    <section className='section'>
      <div className='products'>
        {products.map((e) => {
          return (
            <article key={e.id}>
              <h5>{e.name}</h5>
              <Link to={`/products/${e.id}`}>more info</Link>
            </article>
          );
        })}
      </div> 
    </section>
  );
};

export default Products;
