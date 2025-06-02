import React from 'react';
import StudioEditor from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';

const Designer = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('access_token');
  const userId = user.id;
  

  return (
    <StudioEditor
      options={{
        // ...
        project: {
          type: 'web',
          // The default project to use for new projects
          id: `${userId}`
        },
        identity: {
          id: `${userId}`
        },
        storage: {
          type: 'self',
          autosaveChanges: 5, // save after every 5 changes
        
          onSave: async ({ project }) => {
          try {
            const response = await fetch(`http://localhost:8000/api/projects/store/${userId}`, {  // укажите свой URL API Laravel
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
              },
              body: JSON.stringify({ project }),
            });
            console.log(response);

            if (!response.ok) {
              throw new Error('Ошибка при сохранении проекта');
            }

            const data = await response.json();
            console.log('Project saved on server', data);
            console.log(typeof project);
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

            console.log(response);

            if (!response.ok) throw new Error('Failed to load project');

            let data = await response.json();
            data = JSON.parse(data);

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
        }
      }}
    />
  );
};

export default Designer;