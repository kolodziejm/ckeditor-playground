import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import theme from "@ckeditor/ckeditor5-theme-lark";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>CKEditor 5 using a custom build - DecoupledEditor</h2>
        <CKEditor
          onInit={editor => {
            console.log("Editor is ready to use!", editor);
            // Insert the toolbar before the editable area.
            editor.ui.view.editable.element.parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.view.editable.element
            );
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log(data);
          }}
          editor={DecoupledEditor}
          config={{
            theme: theme
          }}
        />
      </div>
    );
  }
}

export default App;
