package def.codemirror.codemirror;
import def.dom.HTMLElement;
@jsweet.lang.Interface
public abstract class TextMarkerOptions extends def.js.Object {
    /** Assigns a CSS class to the marked stretch of text. */
    @jsweet.lang.Optional
    public String className;
    /** Determines whether text inserted on the left of the marker will end up inside or outside of it. */
    @jsweet.lang.Optional
    public Boolean inclusiveLeft;
    /** Like inclusiveLeft , but for the right side. */
    @jsweet.lang.Optional
    public Boolean inclusiveRight;
    /** Atomic ranges act as a single unit when cursor movement is concerned — i.e. it is impossible to place the cursor inside of them.
        In atomic ranges, inclusiveLeft and inclusiveRight have a different meaning — they will prevent the cursor from being placed
        respectively directly before and directly after the range. */
    @jsweet.lang.Optional
    public Boolean atomic;
    /** Collapsed ranges do not show up in the display.Setting a range to be collapsed will automatically make it atomic. */
    @jsweet.lang.Optional
    public Boolean collapsed;
    /** When enabled, will cause the mark to clear itself whenever the cursor enters its range.
        This is mostly useful for text - replacement widgets that need to 'snap open' when the user tries to edit them.
        The "clear" event fired on the range handle can be used to be notified when this happens. */
    @jsweet.lang.Optional
    public Boolean clearOnEnter;
    /** Determines whether the mark is automatically cleared when it becomes empty. Default is true. */
    @jsweet.lang.Optional
    public Boolean clearWhenEmpty;
    /** Use a given node to display this range.Implies both collapsed and atomic.
        The given DOM node must be an inline element(as opposed to a block element). */
    @jsweet.lang.Optional
    public HTMLElement replacedWith;
    /** When replacedWith is given, this determines whether the editor will
         * capture mouse and drag events occurring in this widget. Default is
         * false—the events will be left alone for the default browser handler,
         * or specific handlers on the widget, to capture. */
    @jsweet.lang.Optional
    public Boolean handleMouseEvents;
    /** A read - only span can, as long as it is not cleared, not be modified except by calling setValue to reset the whole document.
        Note: adding a read - only span currently clears the undo history of the editor,
        because existing undo events being partially nullified by read - only spans would corrupt the history (in the current implementation). */
    @jsweet.lang.Optional
    public Boolean readOnly;
    /** When set to true (default is false), adding this marker will create an event in the undo history that can be individually undone(clearing the marker). */
    @jsweet.lang.Optional
    public Boolean addToHistory;
    /** Can be used to specify an extra CSS class to be applied to the leftmost span that is part of the marker. */
    @jsweet.lang.Optional
    public String startStyle;
    /** Equivalent to startStyle, but for the rightmost span. */
    @jsweet.lang.Optional
    public String endStyle;
    /** A string of CSS to be applied to the covered text. For example "color: #fe3". */
    @jsweet.lang.Optional
    public String css;
    /** When given, will give the nodes created for this span a HTML title attribute with the given value. */
    @jsweet.lang.Optional
    public String title;
    /** When the target document is linked to other documents, you can set shared to true to make the marker appear in all documents.
        By default, a marker appears only in its target document. */
    @jsweet.lang.Optional
    public Boolean shared;
}

