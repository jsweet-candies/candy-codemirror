package def.codemirror.codemirror.mergeview;
import def.codemirror.codemirror.EditorConfiguration;
import def.codemirror.codemirror.TextMarker;
/**
       * Options available to MergeView.
       */
@jsweet.lang.Interface
public abstract class MergeViewEditorConfiguration extends EditorConfiguration {
    /**
           * Determines whether the original editor allows editing. Defaults to false.
           */
    @jsweet.lang.Optional
    public Boolean allowEditingOriginals;
    /**
           * When true stretches of unchanged text will be collapsed. When a number is given, this indicates the amount
           * of lines to leave visible around such stretches (which defaults to 2). Defaults to false.
           */
    @jsweet.lang.Optional
    public jsweet.util.union.Union<Boolean,Double> collapseIdentical;
    /**
           * Sets the style used to connect changed chunks of code. By default, connectors are drawn. When this is set to "align",
           * the smaller chunk is padded to align with the bigger chunk instead.
           */
    @jsweet.lang.Optional
    public String connect;
    /**
           * Callback for when stretches of unchanged text are collapsed.
           */
    native public void onCollapse(MergeViewEditor mergeView, double line, double size, TextMarker mark);
    /**
           * Provides original version of the document to be shown on the right of the editor.
           */
    public Object orig;
    /**
           * Provides original version of the document to be shown on the left of the editor.
           * To create a 2-way (as opposed to 3-way) merge view, provide only one of origLeft and origRight.
           */
    @jsweet.lang.Optional
    public Object origLeft;
    /**
           * Provides original version of document to be shown on the right of the editor.
           * To create a 2-way (as opposed to 3-way) merge view, provide only one of origLeft and origRight.
           */
    @jsweet.lang.Optional
    public Object origRight;
    /**
           * Determines whether buttons that allow the user to revert changes are shown. Defaults to true.
           */
    @jsweet.lang.Optional
    public Boolean revertButtons;
    /**
           * When true, changed pieces of text are highlighted. Defaults to true.
           */
    @jsweet.lang.Optional
    public Boolean showDifferences;
}

