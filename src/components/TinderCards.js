import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import '../styles/TinderCards.css'


function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://c.ndtvimg.com/2021-12/sff5udrg_elon-musk-reuters-650_625x300_20_December_21.jpg'
        },
        {
            name: 'Jef Bezos',
            url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg'
        },
        {
            name: 'Taylor Swift',
            url: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-12/211217-taylor-swift-mb-1155-4f4e96.jpg'
        },
        {
            name: 'Ed Sheeron',
            url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTM5ODkxNzYyODU1NDIwOTM4/ed-sheeran-gettyimages-494227430_1600jpg.jpg'
        },
        {
            name: 'Backstreet Boys',
            url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Backstreet_Boys_2019_by_Glenn_Francis.jpg'
        },

    ])

    const outOfFrame = (name)=>{

    }

    const swiped = (dir,name)=>{

    }

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
                            <div className="card" style={{backgroundImage: `url(${person.url})`}}>
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
