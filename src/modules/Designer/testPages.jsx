import React, { useEffect, useState } from 'react';
import loadableModel from '../../core/UIKit/loadable/Loadable';
import Example from '../admin/metodisti/components/LottieAnimation';
import { useParams } from 'react-router-dom';

const Testpages = () => {

    const [html, setHtml] = useState('<h1>Загрузка...</h1>');
    const [css, setCss] = useState('');

    const { id } = useParams();

    const { isLoading, setLoadable } = loadableModel;


    useEffect(() => {
        const token = localStorage.getItem('access_token');

        fetch(`http://localhost:8000/api/projects/load/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        })
            .then(async (res) => {
                if (!res.ok) throw new Error('Ошибка при загрузке');

                let data = await res.json();
                data = typeof data === 'string' ? JSON.parse(data) : data;
                console.log(data);
                setHtml(data.html || '<h1>Нет HTML</h1>');
                setCss(data.css || '');
            })
            .catch((err) => {
                console.error(err);
                setHtml('<h1>Ошибка загрузки</h1>');
            })
            .finally(() => {
                setLoadable(false);
            })
    }, []);

    return (
        isLoading ? (
            <Example />
        ) : (
            <div>
                <style>{css}</style>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        )
    )
};
export default Testpages;
