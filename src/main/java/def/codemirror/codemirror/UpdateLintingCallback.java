package def.codemirror.codemirror;
/**
     * A function that, given an array of annotations, updates the CodeMirror linting GUI with those annotations
     */
public interface UpdateLintingCallback {
    public void apply(Editor codeMirror, Annotation[] annotations);
}

