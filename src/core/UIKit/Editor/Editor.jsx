import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/markdown.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/fullscreen.min.js';
import 'froala-editor/js/plugins/inline_style.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/quote.min.js';
import 'froala-editor/js/plugins/video.min.js';
import 'froala-editor/js/plugins/inline_class.min.js';

import 'froala-editor/js/languages/ru.js';


import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';


function Editor({ model, setModel, show }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    if (!isMounted) {
        return <div>Загрузка редактора...</div>;
    }


    return (
        show ?
            <FroalaEditorComponent
                model={model}
                onModelChange={setModel}
                config={{
                    language: 'ru',
                    imageUploadParam: 'image',
                    imageUploadURL: 'http://127.0.0.1:8000/api/upload-image',
                    imageUploadMethod: 'POST',
                    imageMaxSize: 1024 * 1024 * 15,


                    videoUploadParam: 'video',
                    videoUploadURL: 'http://127.0.0.1:8000/api/upload-video',
                    videoUploadMethod: 'POST',
                    videoMaxSize: 1024 * 1024 * 100,


                    events: {
                        'image.uploaded': function (response) {
                            const data = JSON.parse(response);
                        },
                        'image.error': function (error, response) {
                            console.log('Ошибка загрузки:', error, response);
                            this.markers.remove();
                        },

                        'video.uploaded': function (response) {
                            const data = JSON.parse(response);
                        },

                        'video.error': function (error, response) {
                            console.error('Ошибка загрузки видео:', error, response);
                        }

                    }
                }}
                tag='textarea'
                placeholder='Контент урока'
            />
            :
            <FroalaEditorView model={model} />
    );
}


export default observer(Editor);
