import { useRef, useEffect } from 'react';
import { Icon, Marker, LayerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { Offer } from '../../types/offers';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks';

type MapProps = {
    offers: Offer[];
    selectedOffer: Offer | undefined;
  }

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({ offers, selectedOffer}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0]);
  const selectedCity = useAppSelector((state) => state.city);

  useEffect(() => {
    const newLayer: LayerGroup = new LayerGroup();
    if (map) {
      offers && offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude,
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(newLayer);
      });

      newLayer.addTo(map);
    }

    return () => {
      map?.removeLayer(newLayer);
    };

  }, [map, offers, selectedOffer, selectedCity]);

  return (<div style={{height: '100%'}} ref={mapRef}></div>);
}

export default Map;

