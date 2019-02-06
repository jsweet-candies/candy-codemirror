package def.codemirror.codemirror;
/**
     * A function that calls the updateLintingCallback with any errors found during the linting process.
     */
public interface AsyncLinter {
    public void apply(String content, UpdateLintingCallback updateLintingCallback, LintStateOptions options, Editor codeMirror);
}

