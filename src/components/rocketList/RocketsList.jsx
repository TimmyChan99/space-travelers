import React from 'react';
import Rocket from '../rocket/Rocket';
import { useEffect } from 'react';
import fetchRocketsAPI from '../../api/spacexdata';
import { useSelector, useDispatch } from 'react-redux';

const RokectsList = () => {

    const dispatch = useDispatch();
    
  useEffect(()=> {
    dispatch(fetchRocketsAPI());
  }, []);

    const keys = [
        { id: 1},
        { id: 2},
        { id: 3},
        { id: 4},
    ]
    const rockets = keys.map((rocket) => ( 
        <li key={rocket.id}>
            <Rocket />
        </li>
    ))

    return (
        <ul>
            {rockets}
        </ul>
    );
}

export default RokectsList;
