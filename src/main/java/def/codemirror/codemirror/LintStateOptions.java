package def.codemirror.codemirror;
/**
     * async specifies that the lint process runs asynchronously. hasGutters specifies that lint errors should be displayed in the CodeMirror
     * gutter, note that you must use this in conjunction with [ "CodeMirror-lint-markers" ] as an element in the gutters argument on
     * initialization of the CodeMirror instance.
     */
@jsweet.lang.Interface
public abstract class LintStateOptions extends def.js.Object {
    public Boolean async;
    public Boolean hasGutters;
    @jsweet.lang.Optional
    public jsweet.util.function.TriConsumer<Annotation[],Annotation[],Editor> onUpdateLinting;
}

