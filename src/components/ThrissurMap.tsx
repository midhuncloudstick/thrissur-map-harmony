
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const ThrissurMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN'; // Replace with your Mapbox token
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [76.2144, 10.5276], // Thrissur coordinates
      zoom: 10,
      pitch: 0,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-md">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default ThrissurMap;
