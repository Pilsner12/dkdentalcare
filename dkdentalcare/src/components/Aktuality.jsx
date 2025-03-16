import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import { supabase } from '../supabase/supabase-client';

function Aktuality() {
  const editorRef = useRef(null);

  useEffect(() => {
    console.log("Inicializace EditorJS...");

    async function initializeEditor() {
      const { data, error } = await supabase
        .from('obsah')
        .select('obsah')
        .eq('typ', 'aktuality')
        .single();

      if (error) {
        console.error("Chyba při načítání obsahu:", error);
        return;
      }

      console.log("Načtená data z Supabase:", data);

      let editorData = { blocks: [] }; // Výchozí hodnota
      try {
        if (data?.obsah) {
          editorData = JSON.parse(data.obsah);
        }
      } catch (e) {
        console.warn("Data nejsou platný JSON. Inicializují se prázdné bloky.", e);
        editorData = { blocks: [] };
      }

      editorRef.current = new EditorJS({
        holder: 'editorjs',
        data: editorData,
        placeholder: "Začněte psát zde...",
        onChange: async () => {
          const savedData = await editorRef.current.save();
          saveContent(savedData);
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
  }, []);

  async function saveContent(content) {
    const { data, error } = await supabase
      .from('obsah')
      .update({ obsah: JSON.stringify(content) })
      .eq('typ', 'aktuality');

    if (error) {
      console.error("Chyba při ukládání obsahu:", error);
    } else {
      console.log("Obsah úspěšně uložen:", data);
    }
  }

  return (
    <div className="aktuality-container" style={{ padding: '10px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Editor Aktualit</h2>
      <div id="editorjs" style={{ border: '1px solid #ddd', padding: '10px', minHeight: '300px', width: '100%' }}></div>
    </div>
  );
}

export default Aktuality;
