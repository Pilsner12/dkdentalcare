import  { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';

function Editor({ contentType, initialData, onSave }) {
  const editorRef = useRef(null);

  useEffect(() => {
    console.log("Inicializace EditorJS...");

    async function initializeEditor() {
      let editorData = initialData || { blocks: [] };

      editorRef.current = new EditorJS({
        holder: 'editorjs',
        data: editorData,
        placeholder: "Začněte psát zde...",
        onChange: async () => {
          const savedData = await editorRef.current.save();
          onSave(savedData);
        },
      });
    }

    initializeEditor();

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [initialData, onSave]);

  return <div id="editorjs" style={{ border: '1px solid #ddd', padding: '10px', width: '100%', minHeight: '300px' }}></div>;
}

export default Editor;
