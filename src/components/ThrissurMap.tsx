
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const ThrissurMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXN3aW5jbG91ZGhvdXNlIiwiYSI6ImNtNm9kbjBjdjB0ZGkya29pdW1iNnRtZjIifQ.Kajty1beKSWA3dSGqbC4RQ'; // Replace with your Mapbox token
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [76.2144, 10.5276], // Thrissur coordinates
      zoom: 10,
      pitch: 0,
      maxBounds: [
        [75.9144, 10.2276], // Southwest coordinates
        [76.5144, 10.8276]  // Northeast coordinates
      ]
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add Thrissur district boundary
    map.current.on('load', () => {
      map.current?.addSource('thrissur-boundary', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {}, // Added the required empty properties object
          geometry: {
            type: 'Polygon',
            coordinates: [[
              [76.0744, 10.3276],
         
              [76.0744, 10.3276]
            ]]
          }
        }
      });

      map.current?.addLayer({
        id: 'thrissur-fill',
        type: 'fill',
        source: 'thrissur-boundary',
        paint: {
          'fill-color': '#F2FCE2', // Soft green background
          'fill-opacity': 0.4
        }
      });

      map.current?.addLayer({
        id: 'thrissur-border',
        type: 'line',
        source: 'thrissur-boundary',
        paint: {
          'line-color': '#7E69AB',
          'line-width': 2
        }
      });
    });

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

