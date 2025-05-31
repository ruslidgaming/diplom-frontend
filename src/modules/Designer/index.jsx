import React from 'react';
import StudioEditor from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';

const Designer = () => {
  // Реализация логики загрузки файлов
  const handleUpload = async (files) => {
    const formData = new FormData();
    for (const file of files) {
        formData.append('files[]', file);
    }

    const res = await fetch('http://localhost:8000/api/assets/upload', {
        method: 'POST',
        body: formData,
    });


    if (!res.ok) throw new Error('Upload failed');

        const data = await res.json();
        return data; // массив ассетов с id, src и т.д.
    };

  // Реализация логики удаления файлов
  const handleDelete = async (assets) => {
    const res = await fetch('http://localhost:8000/api/assets/delete', {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ assets }),
    });

    if (!res.ok) throw new Error('Delete failed');
    };

  return (
    <StudioEditor
      options={{
        pages: false,
        assets: {
          storageType: 'self', // Режим самостоятельного управления ассетами
          async assets() {
                const res = await fetch('http://localhost:8000/api/assets');
                const data = await res.json();
                return data; // массив ассетов
            },
          
          // Обработчик загрузки
          onUpload: async ({ files }) => {
            try {
              const uploadedAssets = await handleUpload(files);
              console.log('Успешно загружено:', uploadedAssets);
              return uploadedAssets;
            } catch (error) {
              console.error('Ошибка загрузки:', error);
              return [];
            }
          },
          
          // Обработчик удаления
          onDelete: async ({ assets }) => {
            try {
              await handleDelete(assets);
              console.log('Ассеты успешно удалены');
            } catch (error) {
              console.error('Ошибка удаления:', error);
              throw error; // Покажет ошибку в интерфейсе
            }
          },
          
          // Настройки интерфейса
          uploadText: 'Перетащите файлы сюда',
          dropzone: {
            acceptedExtensions: ['image/*', 'video/*'],
            maxFiles: 10,
            maxSize: 10 * 1024 * 1024 // 10MB
          }
        },
        
        // Начальные данные проекта
        project: {
          type: 'web',
          id: 'my-project',
          default: {
            assets: [
              {
                src: 'https://picsum.photos/300/200',
                name: 'Пример изображения',
                type: 'image/jpeg'
              }
            ],
            pages: [
              {
                name: 'Главная',
                component: `
                  <div>
                    <h1>Добро пожаловать!</h1>
                    <img src="https://picsum.photos/300/200"/>
                    <p>Используйте Asset Manager для загрузки своих файлов</p>
                  </div>
                `
              }
            ]
          }
        },
        
        // Другие настройки
        storage: {
          type: 'local',
          autosave: true
        }
      }}
    />
  );
};

export default Designer;