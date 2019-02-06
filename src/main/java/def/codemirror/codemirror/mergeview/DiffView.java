package def.codemirror.codemirror.mergeview;
@jsweet.lang.Interface
public abstract class DiffView extends def.js.Object {
    /**
           * Forces the view to reload.
           */
    native public java.util.function.Consumer<String> forceUpdate();
    /**
           * Sets whether or not the merge view should show the differences between the editor views.
           */
    native public void setShowDifferences(Boolean showDifferences);
}

