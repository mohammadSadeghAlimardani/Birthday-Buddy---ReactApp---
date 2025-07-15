import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import person_img1 from './images/person-1.jpg';
import person_img2 from './images/person-2.jpg';
import person_img3 from './images/person-3.jpg';
import person_img4 from './images/person-4.jpg';
import person_img5 from './images/person-5.jpg';

const data = [
    {
        id : 1,
        fullname : "bertie yates",
        age : 29,
        img : person_img1
    },
    {
        id : 2,
        fullname : "hester hogan",
        age : 32,
        img : person_img2
    },
    {
        id : 3,
        fullname : "larry little",
        age : 36,
        img : person_img3
    },
    {
        id : 4,
        fullname : "sean walsh",
        age : 34,
        img : person_img4
    },
    {
        id : 5,
        fullname : "lola gradner",
        age : 29,
        img : person_img5
    }
]


const App = () => {
    const [people, setPeople] = useState(data);
    const clearAll = () => {
        setPeople([]);
    }
    return (
        <div className='app'>
            <section>
                <h2 className='title'>5 birthdays today</h2>
                <div className='birthday-container'>
                    {
                        people.map((person) => {
                            const {id, fullname, age, img} = person;
                            return (
                                <article key={id}>
                                    <img src={img} alt={fullname} />
                                    <div>
                                        <h2>{fullname}</h2>
                                        <h4>{age} years</h4>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
                <button 
                    className='btn btn-info'
                    onClick={clearAll}
                >
                    clear all
                </button>
            </section>
        </div>
    )
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
