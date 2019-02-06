package def.codemirror.codemirror;
/**
     * An annotation contains a description of a lint error, detailing the location of the error within the code, the severity of the error,
     * and an explaination as to why the error was thrown.
     */
@jsweet.lang.Interface
public abstract class Annotation extends def.js.Object {
    public Position from;
    @jsweet.lang.Optional
    public String message;
    @jsweet.lang.Optional
    public String severity;
    @jsweet.lang.Optional
    public Position to;
}

