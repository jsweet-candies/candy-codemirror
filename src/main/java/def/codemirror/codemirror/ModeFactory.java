package def.codemirror.codemirror;
/**
     * A function that, given a CodeMirror configuration object and an optional mode configuration object, returns a mode object.
     */
public interface ModeFactory<T> {
    public Mode<T> apply(def.codemirror.codemirror.EditorConfiguration config, Object modeOptions);
    public Mode<T> apply(def.codemirror.codemirror.EditorConfiguration config);
}

