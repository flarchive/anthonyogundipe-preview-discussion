import { extend } from 'flarum/extend';
import TextEditor from 'flarum/components/TextEditor';
import Button from 'flarum/components/Button';

app.initializers.add('anthonyogundipe-preview-discussion', () => {
    extend(TextEditor.prototype, 'controlItems', function(items) {
        items.add('preview', 
            Button.component({
                icon: 'fas fa-eye',
                onclick: () => {
                    const markdown = this.value();
                    // Render the markdown to HTML (you can use a library like marked.js)
                    const previewHTML = marked(markdown);
                    // Display the preview (you might want to open a modal or a new section)
                    alert(previewHTML);
                },
                className: 'Button Button--preview',
            }, 'Preview')
        );
    });
});
