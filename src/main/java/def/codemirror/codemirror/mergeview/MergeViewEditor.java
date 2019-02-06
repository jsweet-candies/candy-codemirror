package def.codemirror.codemirror.mergeview;
import def.codemirror.codemirror.Editor;
@jsweet.lang.Interface
public abstract class MergeViewEditor extends Editor {
    /**
           * Returns the editor instance.
           */
    native public Editor editor();
    /**
           * Left side of the merge view.
           */
    public DiffView left;
    native public MergeViewDiffChunk[] leftChunks();
    native public Editor leftOriginal();
    /**
           * Right side of the merge view.
           */
    public DiffView right;
    native public MergeViewDiffChunk[] rightChunks();
    native public Editor rightOriginal();
    /**
           * Sets whether or not the merge view should show the differences between the editor views.
           */
    native public void setShowDifferences(Boolean showDifferences);
}

