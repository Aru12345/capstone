


import mapboxgl from '!mapbox-gl';
import {Marker} from 'react-map-gl';

import React, { useRef, useEffect, useState } from 'react';
import "./Mapstyle.css";
import { createRef } from 'react';
import mpi from '../mediafiles/mpi.png'
/* eslint import/no-webpack-loader-syntax: off */
mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ1bmRoYXRpcjEyIiwiYSI6ImNsNmhqZXFqbDBoc2szY296NmdjYXh3NWgifQ.Nw1KVmbHbDNXOuwoAKDhvw';

function Map(){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-73.9739 );
    const [lat, setLat] = useState(40.7549);
    const [zoom, setZoom] = useState(11.88);
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });
      });
      useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
          setLng(map.current.getCenter().lng.toFixed(4));
          setLat(map.current.getCenter().lat.toFixed(4));
          setZoom(map.current.getZoom().toFixed(2));
        });
      });
     
     
      return (
        <div>
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
          <div ref={mapContainer} className="map-container"
          
          
          />
          
        </div>
      );

}
export default Map;