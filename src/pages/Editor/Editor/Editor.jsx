
import { useEffect, useState } from 'react';
import tinymce from 'tinymce/tinymce.min.js';

const Editor = ({ value, onChange }) => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    tinymce.init({
      selector: '#editor',
      plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
      tinycomments_mode: 'embedded',
      tinycomments_author: 'Author name',
      mergetags_list: [
        { value: 'First.Name', title: 'First Name' },
        { value: 'Email', title: 'Email' },
      ],
      ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant"))
    });

    setEditor(tinymce.get('#editor'));
  }, []);

  return (
    <div>
      <textarea id="editor" value={value} onChange={onChange} />
    </div>
  );
};

export default Editor