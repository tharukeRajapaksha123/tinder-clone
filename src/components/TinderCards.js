import React, { useState ,useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import '../styles/TinderCards.css'
import axios from 'axios'

function TinderCards() {
    const [people, setPeople] = useState([])

    const outOfFrame = (name)=>{

    }

    const swiped = (dir,name)=>{

    }

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get('http://localhost:8001/tinder/cards')
            console.log(req.data)
            setPeople(req.data)
        }
        fetchData()
    },[])
    return (
        <div className="tinder-cards">
            <div className='tinder-cards-container'>
                {
                    people.map((person, index) =>
                    (
                        <TinderCard
                            key={index} c
                            lassName='swipe' 
                            preventSwipe={["up", "down"]} 
                            onSwipe={(dir) => swiped(dir, person.name)} 
                            onCardLeftScreen={() => { outOfFrame(person.name) }}

                            className='swipe'
                        >
                            <div className="card" style={{backgroundImage: `url(${person.imageUrl})`}}>
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default TinderCards
