import React, { useEffect, useState } from 'react';

const Testpages = () => {
  
    const [html, setHtml] = useState('<h1>Загрузка...</h1>');
    const [css, setCss] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = localStorage.getItem('access_token');
        const userId = user.id;

        fetch(`http://localhost:8000/api/projects/load/${userId}`, {
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
        });
    }, []);
    console.log(html);
    console.log(css);
  
    return (
        <html>
            <head>
                <title>Home</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="robots" content="index,follow" />
                <meta name="generator" content="GrapesJS Studio" />
                <style>{css}</style>
            </head>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </html>
  )
};
export default Testpages;
