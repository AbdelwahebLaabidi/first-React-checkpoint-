import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import keinemusik from '../keinemusik Tag.jpeg'
import adamport from '../adam port.jpeg'
import '../style.css'
const Heading=()=> {
    return (
<>
<div className='image'>
    <div className='cards'>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <img style={{width:"250px"}} src={keinemusik} alt='Not found'/>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    </div>
    <div className='cards'>
        <Card style={{ width: '18rem' }}>
        
            <Card.Body>
            <img style={{width:"250px"}} src="/keinemusik.jpeg" alt='Not found'/>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    </div>
    <div className='cards'>
        <Card style={{ width: '18rem' }}>
           
            <Card.Body>
            <img style={{width:"250px"}} src={adamport} alt='Not found'/>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
    </div>  
</>

)
}
export default Heading