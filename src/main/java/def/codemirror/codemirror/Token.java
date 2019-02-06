package def.codemirror.codemirror;
@jsweet.lang.Interface
public abstract class Token extends def.js.Object {
    /** The character(on the given line) at which the token starts. */
    public double start;
    /** The character at which the token ends. */
    public double end;
    /** The token's string. */
    public String string;
    /** The token type the mode assigned to the token, such as "keyword" or "comment" (may also be null). */
    public String type;
    /** The mode's state at the end of this token. */
    public Object state;
}

