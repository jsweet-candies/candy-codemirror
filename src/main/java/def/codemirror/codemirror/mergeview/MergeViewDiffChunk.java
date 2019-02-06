package def.codemirror.codemirror.mergeview;
/**
       * Tracks changes in chunks from oroginal to new.
       */
@jsweet.lang.Interface
public abstract class MergeViewDiffChunk extends def.js.Object {
    public double editFrom;
    public double editTo;
    public double origFrom;
    public double origTo;
}

