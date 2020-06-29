import React, { useState, useEffect } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { requestCovid19Data } from '../../store/ducks/infoWorld'

const Home = () => {

    const stateData = useSelector(state => state);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(requestCovid19Data())
    }, [])
    
    !!!stateData.covid19_World.Global ? console.log('Loading...') : console.log(stateData.covid19_World);


    return (
        <>
        <h1>Home</h1>
        </>
    )
}

export default Home;