import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./MovieCard.css";



function MovieItem({ title, imgURL, price, type ,addToCart, removeMovie }) {

  return (
    <Card style={{ maxWidth: 300 }}>
      <Card.Img variant="top" src={imgURL} />
      <Card.Body className='card-content'>
        <Card.Title className='card-title'>{title}</Card.Title>
        <Card.Text className='card-text'>
           <div className='card-type'> 
            <p>type</p>
            <p>{type}</p>
           </div>
           <div className='card-type'>
            <p>price</p>
            <p>{price}</p>
           </div>
           <div className='card-type'>
           <p>stock</p>
           <p>3</p>
           </div> 
        </Card.Text>
        <Button variant="primary" onClick={() => addToCart({ title, price, type })}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieItem;