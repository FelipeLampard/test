import Card from 'react-bootstrap/Card'
import Tags from './Tags';


const Cards = ({ image, name, information, text, color }) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {information}
                        
                    </Card.Text>
                    <Tags> {text}</Tags>
                </Card.Body>
            </Card>
        </>




    );
}

export default Cards