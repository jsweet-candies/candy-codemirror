package def.codemirror.codemirror;
/**
     * Adds the getAnnotations callback to LintStateOptions which may be overridden by the user if they choose use their own
     * linter.
     */
@jsweet.lang.Interface
public abstract class LintOptions extends LintStateOptions {
    public jsweet.util.union.Union<Linter,AsyncLinter> getAnnotations;
}

