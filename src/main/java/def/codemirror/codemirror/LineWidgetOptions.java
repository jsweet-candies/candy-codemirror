package def.codemirror.codemirror;
@jsweet.lang.Interface
public abstract class LineWidgetOptions extends def.js.Object {
    /** Whether the widget should cover the gutter. */
    @jsweet.lang.Optional
    public Boolean coverGutter;
    /** Whether the widget should stay fixed in the face of horizontal scrolling. */
    @jsweet.lang.Optional
    public Boolean noHScroll;
    /** Causes the widget to be placed above instead of below the text of the line. */
    @jsweet.lang.Optional
    public Boolean above;
    /** When true, will cause the widget to be rendered even if the line it is associated with is hidden. */
    @jsweet.lang.Optional
    public Boolean showIfHidden;
}

