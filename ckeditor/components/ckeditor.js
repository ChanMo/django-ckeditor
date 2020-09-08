import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Image from '@ckeditor/ckeditor5-image/src/image'
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import { getCookie } from './cookies.js'

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ Heading, Image, ImageUpload, ImageToolbar, ImageCaption, ImageStyle, ImageResize, Essentials, Paragraph, Bold, Italic, SimpleUploadAdapter ],
      toolbar: ['heading', 'bold', 'italic', '|', 'imageUpload', '|', 'undo', 'redo'],
      image: {
        toolbar: [
                'imageStyle:full',
                'imageStyle:side',
                '|',
                'imageTextAlternative',
        ]
      },
      simpleUpload: {
        uploadUrl: '/ckeditor/upload/',
        withCredentials: true,
        headers: {
          //'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken'),
        }
      },
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
      console.log(Array.from(editor.ui.componentFactory.names()))
    } )
    .catch( error => {
        console.error( error.stack );
    } );
