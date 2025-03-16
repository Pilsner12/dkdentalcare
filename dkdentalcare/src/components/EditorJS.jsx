import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EditorJS from '@editorjs/editorjs';

function EditorComponent({ initialContent, onSave }) {
  const editorRef = useRef(null);

  useEffect(() => {
    // Inicializace EditorJS s kontrolou předchozí instance
    if (!editorRef.current) {
      editorRef.current = new EditorJS({
        holder: 'editorjs',
        data: initialContent,
        placeholder: "Začněte psát zde...",
        onChange: async () => {
          const savedData = await editorRef.current.save();
          onSave(savedData);
        },
      });
    }

    return () => {
      // Zničení instance EditorJS při odpojení komponenty
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [initialContent, onSave]);

  return (
    <div id="editorjs" style={{ border: '1px solid #ddd', padding: '10px', width: '100%', minHeight: '300px' }}></div>
  );
}

function DemoPageContent({ pathname }) {
  const initialContent = { blocks: [] }; // Výchozí data - lze nahradit dynamickým načítáním

  async function saveContent(content) {
    console.log('Saving content:', content);
    // Zde implementujte logiku ukládání dat do databáze nebo API
  }

  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Typography variant="h5">{`Editace ${pathname}`}</Typography>
      <EditorComponent initialContent={initialContent} onSave={saveContent} />
    </Box>
  );
}

export default DemoPageContent;
