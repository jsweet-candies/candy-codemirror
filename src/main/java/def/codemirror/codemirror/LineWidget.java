package def.codemirror.codemirror;
@jsweet.lang.Interface
public abstract class LineWidget extends def.js.Object {
    /** Removes the widget. */
    native public void clear();
    /** Call this if you made some change to the widget's DOM node that might affect its height.
        It'll force CodeMirror to update the height of the line that contains the widget. */
    native public void changed();
}

