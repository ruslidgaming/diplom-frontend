import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useState } from 'react';

type Props = {
    center: {
        longitude: number,
        latitude: number,
    }
}

export const YMap = ({center}: Props) => {
    const [mapInstance, setMapInstance] = useState<any>(null);
    return (
        <YMaps query={{ apikey: '24928587-9095-4b8a-a99e-6eabfc05b2cd' }}>
            <div>
                <Map
                    defaultState={{ center: [center.latitude, center.longitude], zoom: 12 }}
                    width="100%"
                    height="400px"
                    instanceRef={(ref) => ref && setMapInstance(ref)}
                >
                    <Placemark geometry={[center.latitude, center.longitude]} />
                </Map>
            </div>
        </YMaps>
    )
}