package def.codemirror.codemirror;
@jsweet.lang.Interface
public abstract class EditorChange extends def.js.Object {
    /** Position (in the pre-change coordinate system) where the change started. */
    public def.codemirror.codemirror.Position from;
    /** Position (in the pre-change coordinate system) where the change ended. */
    public def.codemirror.codemirror.Position to;
    /** Array of strings representing the text that replaced the changed range (split by line). */
    public String[] text;
    /**  Text that used to be between from and to, which is overwritten by this change. */
    @jsweet.lang.Optional
    public String[] removed;
    /**  String representing the origin of the change event and wether it can be merged with history */
    @jsweet.lang.Optional
    public String origin;
}

