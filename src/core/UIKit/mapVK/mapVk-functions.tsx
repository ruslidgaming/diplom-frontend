// import React, { useEffect, useRef, useState } from 'react';
// import mmrgl, { Map, MapLibreGL } from 'mmr-gl';
import mapVKModel from './model/mapVK-model';

const _token = mapVKModel.modelMap.token;

function getAdressList(address: string, setSuggestions?: any,) {
    if (address.length > 2) {
        const response = fetch(
            `https://maps.vk.com/api/suggest?api_key=${_token}&q=${address}&lang=ru&fields=address_details,address`
        );

        response
            .then((res) => res.json())
            .then((data) => {
                setSuggestions && setSuggestions(data.results);
            }).catch((error) => {
                console.error('Ошибка при получении данных:', error);
            });
    } else {
        setSuggestions && setSuggestions([])
    }
}

async function getSuggestionClick(address: string): Promise<any> {
    try {
        const response = await fetch(
            `https://maps.vk.com/api/search?api_key=${_token}&q=${encodeURIComponent(address)}&lang=ru&limit=1&fields=address_details,address,pin`
        );

        if (!response.ok) {
            throw new Error(`Ошибка запроса: ${response.statusText}`);
        }

        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            throw new Error('Адрес не найден');
        }

        return data.results[0]; // Возвращаем первый результат
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        throw error; // Пробрасываем ошибку для обработки в вызывающем коде
    }
}


async function getAdressCoordinates(lngLat: { lat: number, lng: number }, getResultMap?: (data: any) => void) {
    try {

        const response = await fetch(
            `https://maps.vk.com/api/search?api_key=${_token}&q=${lngLat.lat},${lngLat.lng}&lang=ru&limit=1&fields=address_details,address,pin`
        );

        const data: any = await response.json();

        if (data.results?.length > 0 && getResultMap) {
            getResultMap(data.results[0])
        }

    } catch (error) {
        console.error('Ошибка получения данных:', error);
    }
}

async function getAdressText(address: string, getResultMap?: (data: any) => void) {
    try {

        const response = await fetch(
            `https://maps.vk.com/api/search?api_key=${_token}&q=${address}&lang=ru&limit=1&fields=address_details,address,pin`
        );

        const data: any = await response.json();

        if (data.results?.length > 0 && getResultMap) {
            getResultMap(data.results[0])
            return data.results[0];
        }

    } catch (error) {
        console.error('Ошибка получения данных:', error);
    }
}

export { getAdressList, getSuggestionClick, getAdressCoordinates, getAdressText };