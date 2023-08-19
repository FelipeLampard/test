import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import {Card} from 'react-bootstrap';



const Tags = ({colored, texto}) => {
    return (
        <>
        <Stack direction="horizontal" className='just'>
        <Badge > {texto}  </Badge> 
    </Stack>
        </>
    );
};

export default Card
      
      
      
    