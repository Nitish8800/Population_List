import {Routes as ROUTES,Route} from "react-router-dom";
import React from 'react'
import { Home } from "../Home/Home";
import { City } from "../City/City";
import { Country } from "../Country/Country";
import { NotFound } from "../NotFound/NotFound";
import ResponsiveAppBar from "../Navbar/Navbar";
import { EditCity } from "../City/EditCity";

export const Routes = () => {
  return (
    <>
      <ResponsiveAppBar />
      <ROUTES>
        <Route exact path="/" element={<Home />} />
        <Route path="/add-city" element={<City />} />
        <Route path="/add-country" element={<Country />} />
        <Route path="/add-city/:id" element={<EditCity/>} />
        <Route path="*" element={<NotFound />} />
      </ROUTES>
    </>
  );
}
