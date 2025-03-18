import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import pro stylování editoru
import { supabase } from '../supabaseClient'; // Napojení na Supabase klienta
import React from 'react';
import PropTypes from 'prop-types'; // Import pro validaci props

const RichTextEditor = ({ dataId }) => {
  const [editorContent, setEditorContent] = useState('');

  // Načítání existujícího obsahu z databáze při načtení komponenty
  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from('your_table') // Nahraďte názvem vaší tabulky
        .select('content')
        .eq('id', dataId)
        .single();

      if (error) {
        console.error('Chyba při načítání dat:', error);
      } else {
        setEditorContent(data.content); // Uložení načteného obsahu do stavu
      }
    };

    if (dataId) {
      fetchContent();
    }
  }, [dataId]);

  // Uložení změn do databáze
  const saveContent = async () => {
    const { error } = await supabase
      .from('your_table') // Nahraďte názvem vaší tabulky
      .upsert({ id: dataId, content: editorContent });

    if (error) {
      console.error('Chyba při ukládání dat:', error);
    } else {
      console.log('Data úspěšně uložena.');
    }
  };

  return (
    <div>
      <ReactQuill 
        value={editorContent}
        onChange={setEditorContent}
        theme="snow"
      />
      <button onClick={saveContent}>Uložit</button>
    </div>
  );
};

// Přidání validace pro dataId
RichTextEditor.propTypes = {
  dataId: PropTypes.string.isRequired, // dataId by měl být string a je povinný
};

export default RichTextEditor;
