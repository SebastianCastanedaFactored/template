import * as React from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    AlertTitle,
    Avatar,
    Box,
    Button,
    ButtonBase,
    Checkbox,
    CircularProgress,
    Collapse,
    Container,
    CssBaseline,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Menu,
    MenuItem,
    Paper,
    Select,
    Slider,
    Snackbar,
    Stack,
    Step,
    StepLabel,
    Stepper,
    TextField,
    Tab,
    Tabs,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material'
import Icon from '@mui/material/Icon'
import { Editor } from '@tinymce/tinymce-react';

import MasterPage from './../components/masterpage'
import {Title, Subtitle} from './../components/texts'

export default function RichTextEditor(){

    const editorRef = React.useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    }

    const example = `
        <p>Formula written using latex:</p>
        <p><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mi>&#x3C8;</mi><mo>=</mo><mo>-</mo><mfrac><mn>1</mn><mi>&#x3C6;</mi></mfrac><mo>+</mo><mi>&#x3C0;</mi><mo>-</mo><mo>$</mo><mn>50</mn><annotation encoding="LaTeX"> \\psi=-\\frac1\\varphi+\\pi-\\$50 </annotation></semantics></math></p>
        <p>Formula written using latex must to be wrapped into double dollar sign ($$). You can modify it using visual equation editor, just select the formula and click in equation icon.</p>
        <p>&nbsp;</p>
        <p>Formula written using equation editor</p>
        <p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#968;</mi><mo>=</mo><mo>-</mo><mfrac><mn>1</mn><mi>&#966;</mi></mfrac></math></p>
    `

    return(
        <MasterPage>
            <Title value="WYSIWYG Editor" />
            <Subtitle value="Rich text editor with support for math formulas using TinyMCE5 and Wiris MathType" />
            <br />
            <Editor
                //Use this API Key just for development, for deployment please register in https://www.tiny.cloud/auth/signup/
                apiKey='w1k34busthh4a60w5fkxhdhi5ub8al3goisv35qg5ogskm87'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={example}
                init={{
                    external_plugins: {
                        'tiny_mce_wiris': 'https://www.wiris.net/demo/plugins/tiny_mce/plugin.js',
                    },
                    height: 500,
                    menubar: true,
                    plugins: [
                        'advlist autolink lists link image imagetools charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount codesample'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'image tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry codesample |' +
                    'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    htmlAllowedTags: ['.*'],
                    htmlAllowedAttrs: ['.*'],
                    draggable_modal: true,
                    image_title: true,
                    automatic_uploads: true,
                    file_picker_types: 'image',
                    file_picker_callback: function (cb, value, meta) {
                        var input = document.createElement('input');
                        input.setAttribute('type', 'file');
                        input.setAttribute('accept', 'image/*');

                        /*
                          Note: In modern browsers input[type="file"] is functional without
                          even adding it to the DOM, but that might not be the case in some older
                          or quirky browsers like IE, so you might want to add it to the DOM
                          just in case, and visually hide it. And do not forget do remove it
                          once you do not need it anymore.
                        */

                        input.onchange = function () {
                            var file = this.files[0];

                            var reader = new FileReader();
                            reader.onload = function () {
                                /*
                                  Note: Now we need to register the blob in TinyMCEs image blob
                                  registry. In the next release this part hopefully won't be
                                  necessary, as we are looking to handle it internally.
                                */
                                var id = 'blobid' + (new Date()).getTime();
                                var blobCache =  editorRef.current.editorUpload.blobCache;
                                var base64 = reader.result.split(',')[1];
                                var blobInfo = blobCache.create(id, file, base64);
                                blobCache.add(blobInfo);

                                /* call the callback and populate the Title field with the file name */
                                cb(blobInfo.blobUri(), { title: file.name });
                            };
                            reader.readAsDataURL(file);
                        };
                        input.click();
                    },
                }}
            />
        </MasterPage>
    )
}
