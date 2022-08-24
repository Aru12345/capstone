


import Map, {Marker} from 'react-map-gl';


import {useState} from 'react';

import "./Mapstyle.css";

import * as React from 'react';

import mpi from '../mediafiles/mpi.png'
/* eslint import/no-webpack-loader-syntax: off */
const MAPBOX_TOKEN = '';



function MyMap(){
const[viewport,setViewport]=useState({
  latitude:-73.9739,
  longitude:40.7549,
  zoom:11.88,
  width:'100vw',
  height:'100vh'

})


      return (
      <>
   

;

     <Map mapboxAccessToken={MAPBOX_TOKEN}  initialViewState={{
        latitude: 40.758896,
        longitude: -73.985130,
        zoom: 11.88
      }}
      style={{width: 500, height: 700}}
      mapStyle="mapbox://styles/mapbox/streets-v9">


          <Marker longitude={-73.968152} latitude={40.766968} color="blue" >
           
   
           </Marker> 
          <Marker longitude={-73.9914328} latitude={40.7410352} color="blue" />
          <Marker longitude={-74.0045343} latitude={40.731742} color="blue" />
           <Marker longitude={-73.9867126} latitude={40.7575108} color="blue" />

          <Marker longitude={-73.9951833} latitude={40.7203599} color="blue" />
          <Marker longitude={-73.9831434} latitude={40.7449202} color="blue" />
          <Marker longitude={-73.9989224} latitude={40.7522678} color="blue" />
          <Marker longitude={-73.987965} latitude={40.737745} color="blue" />

          <Marker longitude={-73.99808502197266} latitude={40.71440505981445} color="blue" />
          <Marker longitude={-73.9838903} latitude={40.7438908} color="blue" />
          
    </Map>

      </>
      );

}
export default MyMap;


