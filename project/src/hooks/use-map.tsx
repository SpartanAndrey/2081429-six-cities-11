import { Offer} from '../types/offers';
import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useState, useEffect, useRef } from 'react';

const LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const ATTRIBUTE = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  offer: Offer)
  : Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude
        },
        zoom: 10,
      });

      const layer = new TileLayer(
        LAYER,
        { attribution: ATTRIBUTE }
      );

      instance.addLayer(layer);

      setMap(instance);

      isRenderedRef.current = true;
    }
  },[mapRef, map, offer]);

  return map;
}

export default useMap;
