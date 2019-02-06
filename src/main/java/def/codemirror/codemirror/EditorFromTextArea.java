package def.codemirror.codemirror;
import def.dom.HTMLTextAreaElement;
@jsweet.lang.Interface
public abstract class EditorFromTextArea extends Editor {
    /** Copy the content of the editor into the textarea. */
    native public void save();
    /** Remove the editor, and restore the original textarea (with the editor's current content). */
    native public void toTextArea();
    /** Returns the textarea that the instance was based on. */
    native public HTMLTextAreaElement getTextArea();
}

