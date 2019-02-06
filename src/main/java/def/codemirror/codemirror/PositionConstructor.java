package def.codemirror.codemirror;
@jsweet.lang.Interface
public abstract class PositionConstructor extends def.js.Object {
    public PositionConstructor(double line, double ch){}
    native public Position apply(double line, double ch);
    public PositionConstructor(double line){}
    native public Position apply(double line);
    protected PositionConstructor(){}
}

