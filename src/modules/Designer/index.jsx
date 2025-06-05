import React from 'react';
import StudioEditor from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';
import ruLocale from '../Designer/locale';
import axios from 'axios';

const Designer = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('access_token');
    // const userId = user.id;
    const userId = user.id;

    console.log(ruLocale);

    const uploadFileToServer = async (file) => {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post("http://localhost:8000/api/upload-image/designer", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data.link)
            return response.data.link; // Предполагаем, что сервер возвращает {filename: 'имя_файла'}
        } catch (error) {
            console.error('Upload failed:', error);
            throw error;
        }
    };


    return (
        <StudioEditor
            options={{
                onReady(editor) {
                    console.log('Редактор готов!', editor);
                },
                pages: false,
                // ...
                project: {
                    type: 'web',
                    // The default project to use for new projects
                    id: `${userId}`
                },
                identity: {
                    id: `${userId}`
                },
                i18n: {
                    locale: 'ru',
                    messages: ruLocale,
                },
                storage: {
                    type: 'self',
                    autosaveChanges: 5, // save after every 5 changes

                    onSave: async ({ project, editor }) => {
                        try {
                            const html = editor.getHtml();
                            const css = editor.getCss();
                            console.log(css);
                            const response = await fetch(`http://localhost:8000/api/projects/store/${userId}`, {  // укажите свой URL API Laravel
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json',
                                    'Authorization': 'Bearer ' + token,
                                },
                                body: JSON.stringify({ project, html, css }),
                            });

                            if (!response.ok) {
                                throw new Error('Ошибка при сохранении проекта');
                            }

                            const data = await response.json();
                            console.log('Project saved on server', data);
                        } catch (error) {
                            console.error('Failed to save project', error);
                        }
                    },

                    onLoad: async () => {
                        try {
                            const response = await fetch(`http://localhost:8000/api/projects/load/${userId}`, {
                                method: 'GET',
                                headers: {
                                    'Accept': 'application/json',
                                },
                            });


                            if (!response.ok) throw new Error('Failed to load project');

                            let data = await response.json();
                            data = JSON.parse(data.data);

                            return {
                                project: data || {
                                    pages: [
                                        { name: 'Home', component: '<h1>New project</h1>' },
                                    ],
                                },
                            };
                        } catch (error) {
                            console.error(error);

                            return {
                                project: {
                                    pages: [
                                        { name: 'Home', component: '<h1>New project</h1>' },
                                    ],
                                },
                            };
                        }
                    },
                },
                assets: {
                    storageType: 'self',
                    onUpload: async ({ files }) => {
                        const uploadedAssets = [];
                        for (const file of files) {
                            try {
                                const filename = await uploadFileToServer(file);
                                uploadedAssets.push({
                                    id: filename,
                                    src: `${"http://localhost:8000/storage"}/${filename}`,
                                    name: file.name,
                                    mimeType: file.type,
                                    size: file.size
                                });
                            } catch (error) {
                                console.error(`Failed to upload ${file.name}:`, error);
                            }
                        }
                        return uploadedAssets;
                    },
                },

            }}
        />
    );
};

export default Designer;