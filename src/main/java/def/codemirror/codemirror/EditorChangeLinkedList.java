package def.codemirror.codemirror;
@jsweet.lang.Interface
public abstract class EditorChangeLinkedList extends def.codemirror.codemirror.EditorChange {
    /** Points to another change object (which may point to another, etc). */
    @jsweet.lang.Optional
    public def.codemirror.codemirror.EditorChangeLinkedList next;
}

