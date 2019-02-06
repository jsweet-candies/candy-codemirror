package def.codemirror.codemirror;
@jsweet.lang.Interface
public abstract class EditorChangeCancellable extends def.codemirror.codemirror.EditorChange {
    /** may be used to modify the change. All three arguments to update are optional, and can be left off to leave the existing value for that field intact.
        If the change came from undo/redo, `update` is undefined and the change cannot be modified. */
    native public void update(def.codemirror.codemirror.Position from, def.codemirror.codemirror.Position to, String[] text);
    native public void cancel();
    /** may be used to modify the change. All three arguments to update are optional, and can be left off to leave the existing value for that field intact.
        If the change came from undo/redo, `update` is undefined and the change cannot be modified. */
    native public void update(def.codemirror.codemirror.Position from, def.codemirror.codemirror.Position to);
    /** may be used to modify the change. All three arguments to update are optional, and can be left off to leave the existing value for that field intact.
        If the change came from undo/redo, `update` is undefined and the change cannot be modified. */
    native public void update(def.codemirror.codemirror.Position from);
    /** may be used to modify the change. All three arguments to update are optional, and can be left off to leave the existing value for that field intact.
        If the change came from undo/redo, `update` is undefined and the change cannot be modified. */
    native public void update();
}

