package def.codemirror.codemirror;
@jsweet.lang.Interface
public abstract class Range extends def.js.Object {
    public def.codemirror.codemirror.Position anchor;
    public def.codemirror.codemirror.Position head;
    native public def.codemirror.codemirror.Position from();
    native public def.codemirror.codemirror.Position to();
}

