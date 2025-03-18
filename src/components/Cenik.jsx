import React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from '../supabase/supabase-client';
import Editor from './Editor';

function Cenik() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    async function loadContent() {
      const { data, error } = await supabase
        .from('obsah')
        .select('obsah')
        .eq('typ', 'cenik')
        .single();

      if (error) {
        console.error("Chyba při načítání obsahu:", error);
        return;
      }

      setContent(data ? JSON.parse(data.obsah) : { blocks: [] });
    }

    loadContent();
  }, []);

  const saveContent = async (content) => {
    const { data, error } = await supabase
      .from('obsah')
      .update({ obsah: JSON.stringify(content) })
      .eq('typ', 'cenik');

    if (error) {
      console.error("Chyba při ukládání obsahu:", error);
    } else {
      console.log("Obsah úspěšně uložen:", data);
    }
  };

  return (
    <div className="cenik-container" style={{ padding: '10px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Editor Ceníku</h2>
      {content && (
        <Editor contentType="cenik" initialData={content} onSave={saveContent} />
      )}
    </div>
  );
}

export default Cenik;
