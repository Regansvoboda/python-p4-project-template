import React from 'react';
import {Card, CardGroup, Button} from "react-bootstrap";
import "./OrderCard.css"

const CardGrid = () => {
    return (
        <CardGroup>
            {Array.from({ length: 10 }).map((_, index) => (
                    <Card className={"card-grid"} key={index}>
                        <Card.Img className={"card-img"} variant="bottom" src={"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"}/>
                        <Card.Body>
                            <Card.Title><strong></strong></Card.Title>
                            <Card.Text>
                                <p></p>
                            </Card.Text>
                            <Button variant="primary"
                                    href="www.google.com"
                                    rel={"noopener noreferrer"}>
                                
                            </Button>
                        </Card.Body>
                    </Card>
            ))}
        </CardGroup>
    )

}

export default CardGrid


// const Front = ({order}) => {
//     return (
//         <div>
//             <h1>{order.id}</h1>
//         </div>
//     )
// }
// const Back = ({order}) => {
    
//     return (
//         <div>
//             <h1>{order.details}</h1>
//         </div>
//     )
// }


// const OrderCard = ({order}) => {

//     const [ showFront, setShowFront ] = useState( false )
//     const toggleFront = () => setShowFront( showFront => !showFront )

//     return (
//         <div onClick={ toggleFront } 
//             className="ui three wide column image pigTile">
//             { showFront ? 
//                 <Front id={order.id} /> : 
//                 <Back details={order.details} /> 
//             }
//         </div>
//     )
// }

// export default OrderCard
