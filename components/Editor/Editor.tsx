import React, { FC, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';

import scss from './Editor.module.scss';

interface EditorProps {
    placeholder?: string
    className?: string
}

const Editor: FC<EditorProps> = ({placeholder, className=''}) => {
    useEffect(() => {
        const editor = new EditorJS({
            holder: 'editor',
            placeholder
        })
    }, []);

    return (
        <div id="editor" className={`${scss.editor} ${className}`} />
    )
}

export default Editor
