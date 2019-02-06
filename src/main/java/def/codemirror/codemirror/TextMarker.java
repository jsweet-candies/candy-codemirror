package def.codemirror.codemirror;
@jsweet.lang.Interface
public abstract class TextMarker extends def.js.Object {
    /** Remove the mark. */
    native public void clear();
    /** Returns a {from, to} object (both holding document positions), indicating the current position of the marked range,
        or undefined if the marker is no longer in the document. */
    native public Find find();
    /**  Called when you've done something that might change the size of the marker and want to cheaply update the display*/
    native public void changed();
    /**  Returns an object representing the options for the marker. If copyWidget is given true, it will clone the value of the replacedWith option, if any. */
    native public def.codemirror.codemirror.TextMarkerOptions getOptions(Boolean copyWidget);
    /** Fired when the cursor enters the marked range */
    native public void on(def.codemirror.StringTypes.beforeCursorEnter eventName, java.lang.Runnable handler);
    native public void off(def.codemirror.StringTypes.beforeCursorEnter eventName, java.lang.Runnable handler);
    /** Fired when the range is cleared, either through cursor movement in combination with clearOnEnter or through a call to its clear() method */
    native public void on(def.codemirror.StringTypes.clear eventName, java.util.function.BiConsumer<Position,Position> handler);
    native public void off(def.codemirror.StringTypes.clear eventName, java.lang.Runnable handler);
    /** Fired when the last part of the marker is removed from the document by editing operations */
    native public void on(def.codemirror.StringTypes.hide eventName, java.lang.Runnable handler);
    native public void off(def.codemirror.StringTypes.hide eventname, java.lang.Runnable handler);
    /** Fired when, after the marker was removed by editing, a undo operation brough the marker back */
    native public void on(def.codemirror.StringTypes.unhide eventName, java.lang.Runnable handler);
    native public void off(def.codemirror.StringTypes.unhide eventname, java.lang.Runnable handler);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Find extends def.js.Object {
        public def.codemirror.codemirror.Position from;
        public def.codemirror.codemirror.Position to;
    }
}

