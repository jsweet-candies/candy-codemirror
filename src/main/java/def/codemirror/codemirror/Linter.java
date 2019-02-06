package def.codemirror.codemirror;
import def.js.PromiseLike;
/**
     * A function that return errors found during the linting process.
     */
public interface Linter {
    public jsweet.util.union.Union<Annotation[],PromiseLike<Annotation[]>> apply(String content, LintStateOptions options, Editor codeMirror);
}

