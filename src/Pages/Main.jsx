import React from 'react';
import Home from "./Home"
import How_It_Works from './How_It_Works';
import Pricing from './Pricing';
import { Routes, Route } from 'react-router-dom'

export default function Main() {
    return (
        <>
           
            <Routes>
                <Route path="/" element={<Home />}  ></Route>
                <Route path="/how_it_work" element={<How_It_Works />}></Route>
                <Route path="/princing" element={<Pricing />}></Route>
            </Routes>
          

        </>
    )
}
