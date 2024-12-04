import React, { useEffect, useImperativeHandle, forwardRef, useState } from 'react';
import Quill from 'quill';

const TextEditor = forwardRef(({ readOnly, defaultValue, onSelectionChange, onTextChange, editorId }, ref) => {
  const [quillInstance, setQuillInstance] = useState(null);

  useEffect(() => {
    // Initialize Quill editor
    const quill = new Quill(`#quillEditor-${editorId}`, {
      theme: 'snow',
      readOnly: readOnly,
      modules: {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['link', 'image']
        ]
      }
    });

    // Set default value
    if (defaultValue) {
      quill.setContents(defaultValue);
    }

    // Listen to selection and text change events
    quill.on('selection-change', onSelectionChange);
    quill.on('text-change', onTextChange);

    // Store the instance in state
    setQuillInstance(quill);

    // Cleanup on unmount or when switching files
    return () => {
      quill.off('selection-change', onSelectionChange);
      quill.off('text-change', onTextChange);
    };
  }, [editorId, readOnly, defaultValue, onSelectionChange, onTextChange]);

  // Expose the Quill editor instance via the ref
  useImperativeHandle(ref, () => ({
    getEditor: () => {
      if (quillInstance) {
        return quillInstance;
      } else {
        console.error("Quill instance is not available yet.");
        return null;
      }
    }
  }));

  return <div id={`quillEditor-${editorId}`}></div>;
});

export default TextEditor;
