package def.codemirror.codemirror;
import def.dom.HTMLTextAreaElement;
import def.dom.HTMLElement;
import jsweet.util.function.Consumer4;
import def.dom.Event;
@jsweet.lang.Interface
public abstract class Editor extends def.js.Object {
    /** Tells you whether the editor currently has focus. */
    native public Boolean hasFocus();
    /** Used to find the target position for horizontal cursor motion.start is a { line , ch } object,
        amount an integer(may be negative), and unit one of the string "char", "column", or "word".
        Will return a position that is produced by moving amount times the distance specified by unit.
        When visually is true , motion in right - to - left text will be visual rather than logical.
        When the motion was clipped by hitting the end or start of the document, the returned value will have a hitSide property set to true. */
    native public FindPosH findPosH(def.codemirror.codemirror.Position start, double amount, String unit, Boolean visually);
    /** Similar to findPosH , but used for vertical motion.unit may be "line" or "page".
        The other arguments and the returned value have the same interpretation as they have in findPosH. */
    native public FindPosV findPosV(def.codemirror.codemirror.Position start, double amount, String unit);
    /** Returns the start and end of the 'word' (the stretch of letters, whitespace, or punctuation) at the given position. */
    native public def.codemirror.codemirror.Range findWordAt(def.codemirror.codemirror.Position pos);
    /** Change the configuration of the editor. option should the name of an option, and value should be a valid value for that option. */
    native public void setOption(String option, Object value);
    /** Retrieves the current value of the given option for this editor instance. */
    native public Object getOption(String option);
    /** Attach an additional keymap to the editor.
        This is mostly useful for add - ons that need to register some key handlers without trampling on the extraKeys option.
        Maps added in this way have a higher precedence than the extraKeys and keyMap options, and between them,
        the maps added earlier have a lower precedence than those added later, unless the bottom argument was passed,
        in which case they end up below other keymaps added with this method. */
    native public void addKeyMap(String map, Boolean bottom);
    /** Disable a keymap added with addKeyMap.Either pass in the keymap object itself , or a string,
        which will be compared against the name property of the active keymaps. */
    native public void removeKeyMap(String map);
    /** Enable a highlighting overlay.This is a stateless mini - mode that can be used to add extra highlighting.
        For example, the search add - on uses it to highlight the term that's currently being searched.
        mode can be a mode spec or a mode object (an object with a token method). The options parameter is optional. If given, it should be an object.
        Currently, only the opaque option is recognized. This defaults to off, but can be given to allow the overlay styling, when not null,
        to override the styling of the base mode entirely, instead of the two being applied together. */
    native public void addOverlay(Object mode, Object options);
    /** Pass this the exact argument passed for the mode parameter to addOverlay to remove an overlay again. */
    native public void removeOverlay(Object mode);
    /** Retrieve the currently active document from an editor. */
    native public def.codemirror.codemirror.Doc getDoc();
    /** Attach a new document to the editor. Returns the old document, which is now no longer associated with an editor. */
    native public def.codemirror.codemirror.Doc swapDoc(def.codemirror.codemirror.Doc doc);
    /** Get the content of the current editor document. You can pass it an optional argument to specify the string to be used to separate lines (defaults to "\n"). */
    native public String getValue(String seperator);
    /** Set the content of the current editor document. */
    native public void setValue(String content);
    /** Sets the gutter marker for the given gutter (identified by its CSS class, see the gutters option) to the given value.
        Value can be either null, to clear the marker, or a DOM element, to set it. The DOM element will be shown in the specified gutter next to the specified line. */
    native public def.codemirror.codemirror.LineHandle setGutterMarker(Object line, String gutterID, HTMLElement value);
    /** Remove all gutter markers in the gutter with the given ID. */
    native public void clearGutter(String gutterID);
    /** Set a CSS class name for the given line.line can be a number or a line handle.
        where determines to which element this class should be applied, can can be one of "text" (the text element, which lies in front of the selection),
        "background"(a background element that will be behind the selection),
        or "wrap" (the wrapper node that wraps all of the line's elements, including gutter elements).
        class should be the name of the class to apply. */
    native public def.codemirror.codemirror.LineHandle addLineClass(Object line, String where, String _class_);
    /** Remove a CSS class from a line.line can be a line handle or number.
        where should be one of "text", "background", or "wrap"(see addLineClass).
        class can be left off to remove all classes for the specified node, or be a string to remove only a specific class. */
    native public def.codemirror.codemirror.LineHandle removeLineClass(Object line, String where, String class_);
    /** Compute the line at the given pixel height. mode is the relative element
        to use to compute this line, it may be "window", "page" (the default), or "local" */
    native public double lineAtHeight(double height, def.codemirror.StringTypes.window mode);
    /** Computes the height of the top of a line, in the coordinate system specified by mode, it may be "window",
        "page" (the default), or "local". When a line below the bottom of the document is specified, the returned value
        is the bottom of the last line in the document. By default, the position of the actual text is returned.
        If includeWidgets is true and the line has line widgets, the position above the first line widget is returned. */
    native public double heightAtLine(Object line, def.codemirror.StringTypes.window mode, Boolean includeWidgets);
    /** Returns the line number, text content, and marker status of the given line, which can be either a number or a line handle. */
    native public LineInfo lineInfo(Object line);
    /** Puts node, which should be an absolutely positioned DOM node, into the editor, positioned right below the given { line , ch } position.
        When scrollIntoView is true, the editor will ensure that the entire node is visible (if possible).
        To remove the widget again, simply use DOM methods (move it somewhere else, or call removeChild on its parent). */
    native public void addWidget(def.codemirror.codemirror.Position pos, HTMLElement node, Boolean scrollIntoView);
    /** Adds a line widget, an element shown below a line, spanning the whole of the editor's width, and moving the lines below it downwards.
        line should be either an integer or a line handle, and node should be a DOM node, which will be displayed below the given line.
        options, when given, should be an object that configures the behavior of the widget.
        Note that the widget node will become a descendant of nodes with CodeMirror-specific CSS classes, and those classes might in some cases affect it. */
    native public def.codemirror.codemirror.LineWidget addLineWidget(Object line, HTMLElement node, def.codemirror.codemirror.LineWidgetOptions options);
    /** Programatically set the size of the editor (overriding the applicable CSS rules).
        width and height height can be either numbers(interpreted as pixels) or CSS units ("100%", for example).
        You can pass null for either of them to indicate that that dimension should not be changed. */
    native public void setSize(Object width, Object height);
    /** Scroll the editor to a given(pixel) position.Both arguments may be left as null or undefined to have no effect. */
    native public void scrollTo(double x, double y);
    /** Get an { left , top , width , height , clientWidth , clientHeight } object that represents the current scroll position, the size of the scrollable area,
        and the size of the visible area(minus scrollbars). */
    native public def.codemirror.codemirror.ScrollInfo getScrollInfo();
    /** Scrolls the given element into view. pos is a { line , ch } position, referring to a given character, null, to refer to the cursor.
        The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well. */
    native public void scrollIntoView(def.codemirror.codemirror.Position pos, double margin);
    /** Scrolls the given element into view. pos is a { left , top , right , bottom } object, in editor-local coordinates.
        The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well. */
    native public void scrollIntoView(Pos pos, double margin);
    /** Scrolls the given element into view. pos is a { line, ch } object, in editor-local coordinates.
        The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well. */
    native public void scrollIntoView(PosData pos, double margin);
    /** Scrolls the given element into view. pos is a { from, to } object, in editor-local coordinates.
        The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well. */
    native public void scrollIntoView(PosDto pos, double margin);
    /** Returns an { left , top , bottom } object containing the coordinates of the cursor position.
        If mode is "local", they will be relative to the top-left corner of the editable document.
        If it is "page" or not given, they are relative to the top-left corner of the page.
        where is a boolean indicating whether you want the start(true) or the end(false) of the selection. */
    native public CursorCoords cursorCoords(Boolean where, def.codemirror.StringTypes.window mode);
    /** Returns an { left , top , bottom } object containing the coordinates of the cursor position.
        If mode is "local", they will be relative to the top-left corner of the editable document.
        If it is "page" or not given, they are relative to the top-left corner of the page.
        where specifies the precise position at which you want to measure. */
    native public CursorCoords cursorCoords(def.codemirror.codemirror.Position where, def.codemirror.StringTypes.window mode);
    /** Returns the position and dimensions of an arbitrary character. pos should be a { line , ch } object.
        If mode is "local", they will be relative to the top-left corner of the editable document.
        If it is "page" or not given, they are relative to the top-left corner of the page.
        This differs from cursorCoords in that it'll give the size of the whole character,
        rather than just the position that the cursor would have when it would sit at that position. */
    native public CharCoords charCoords(def.codemirror.codemirror.Position pos, def.codemirror.StringTypes.window mode);
    /** Given an { left , top } object , returns the { line , ch } position that corresponds to it.
        The optional mode parameter determines relative to what the coordinates are interpreted.
        It may be "window", "page" (the default), or "local". */
    native public def.codemirror.codemirror.Position coordsChar(Object object, def.codemirror.StringTypes.window mode);
    /** Returns the line height of the default font for the editor. */
    native public double defaultTextHeight();
    /** Returns the pixel width of an 'x' in the default font for the editor.
        (Note that for non - monospace fonts , this is mostly useless, and even for monospace fonts, non - ascii characters might have a different width). */
    native public double defaultCharWidth();
    /** Returns a { from , to } object indicating the start (inclusive) and end (exclusive) of the currently rendered part of the document.
        In big documents, when most content is scrolled out of view, CodeMirror will only render the visible part, and a margin around it.
        See also the viewportChange event. */
    native public GetViewport getViewport();
    /** If your code does something to change the size of the editor element (window resizes are already listened for), or unhides it,
        you should probably follow up by calling this method to ensure CodeMirror is still looking as intended. */
    native public void refresh();
    /** Gets the inner mode at a given position. This will return the same as getMode for simple modes, but will return an inner mode for nesting modes (such as htmlmixed). */
    native public Object getModeAt(Position pos);
    /** Retrieves information about the token the current mode found before the given position (a {line, ch} object). */
    native public Token getTokenAt(def.codemirror.codemirror.Position pos, Boolean precise);
    /** This is a (much) cheaper version of getTokenAt useful for when you just need the type of the token at a given position,
        and no other information. Will return null for unstyled tokens, and a string, potentially containing multiple
        space-separated style names, otherwise. */
    native public String getTokenTypeAt(def.codemirror.codemirror.Position pos);
    /** This is similar to getTokenAt, but collects all tokens for a given line into an array. */
    native public Token[] getLineTokens(double line, Boolean precise);
    /** Returns the mode's parser state, if any, at the end of the given line number.
        If no line number is given, the state at the end of the document is returned.
        This can be useful for storing parsing errors in the state, or getting other kinds of contextual information for a line. */
    native public Object getStateAfter(double line);
    
    /** In normal circumstances, use the above operation method. But if you want to buffer operations happening asynchronously, or that can't all be wrapped in a callback
        function, you can call startOperation to tell CodeMirror to start buffering changes, and endOperation to actually render all the updates. Be careful: if you use this
        API and forget to call endOperation, the editor will just never update. */
    native public void startOperation();
    native public void endOperation();
    /** Adjust the indentation of the given line.
        The second argument (which defaults to "smart") may be one of:
        "prev" Base indentation on the indentation of the previous line.
        "smart" Use the mode's smart indentation if available, behave like "prev" otherwise.
        "add" Increase the indentation of the line by one indent unit.
        "subtract" Reduce the indentation of the line. */
    native public void indentLine(double line, String dir);
    /** Tells you whether the editor's content can be edited by the user. */
    native public Boolean isReadOnly();
    /** Runs the command with the given name on the editor. */
    native public void execCommand(String name);
    /** Give the editor focus. */
    native public void focus();
    /** Returns the hidden textarea used to read input. */
    native public HTMLTextAreaElement getInputField();
    /** Returns the DOM node that represents the editor, and controls its size. Remove this from your tree to delete an editor instance. */
    native public HTMLElement getWrapperElement();
    /** Returns the DOM node that is responsible for the scrolling of the editor. */
    native public HTMLElement getScrollerElement();
    /** Fetches the DOM node that contains the editor gutters. */
    native public HTMLElement getGutterElement();
    /** Events are registered with the on method (and removed with the off method).
        These are the events that fire on the instance object. The name of the event is followed by the arguments that will be passed to the handler.
        The instance argument always refers to the editor instance. */
    native public void on(String eventName, java.util.function.Consumer<def.codemirror.codemirror.Editor> handler);
    native public void off(String eventName, java.util.function.Consumer<def.codemirror.codemirror.Editor> handler);
    /** Fires every time the content of the editor is changed. */
    native public void on(def.codemirror.StringTypes.change eventName, java.util.function.BiConsumer<def.codemirror.codemirror.Editor,def.codemirror.codemirror.EditorChangeLinkedList> handler);
    native public void off(def.codemirror.StringTypes.change eventName, java.util.function.BiConsumer<def.codemirror.codemirror.Editor,def.codemirror.codemirror.EditorChangeLinkedList> handler);
    /** Like the "change" event, but batched per operation, passing an
         * array containing all the changes that happened in the operation.
         * This event is fired after the operation finished, and display
         * changes it makes will trigger a new operation. */
    native public void on(def.codemirror.StringTypes.changes eventName, java.util.function.BiConsumer<def.codemirror.codemirror.Editor,def.codemirror.codemirror.EditorChangeLinkedList[]> handler);
    native public void off(def.codemirror.StringTypes.changes eventName, java.util.function.BiConsumer<def.codemirror.codemirror.Editor,def.codemirror.codemirror.EditorChangeLinkedList[]> handler);
    /** This event is fired before a change is applied, and its handler may choose to modify or cancel the change.
        The changeObj never has a next property, since this is fired for each individual change, and not batched per operation.
        Note: you may not do anything from a "beforeChange" handler that would cause changes to the document or its visualization.
        Doing so will, since this handler is called directly from the bowels of the CodeMirror implementation,
        probably cause the editor to become corrupted. */
    native public void on(def.codemirror.StringTypes.beforeChange eventName, java.util.function.BiConsumer<def.codemirror.codemirror.Editor,def.codemirror.codemirror.EditorChangeCancellable> handler);
    native public void off(def.codemirror.StringTypes.beforeChange eventName, java.util.function.BiConsumer<def.codemirror.codemirror.Editor,def.codemirror.codemirror.EditorChangeCancellable> handler);
    /** Will be fired when the cursor or selection moves, or any change is made to the editor content. */
    native public void on(def.codemirror.StringTypes.cursorActivity eventName, java.util.function.Consumer<def.codemirror.codemirror.Editor> handler);
    native public void off(def.codemirror.StringTypes.cursorActivity eventName, java.util.function.Consumer<def.codemirror.codemirror.Editor> handler);
    /** This event is fired before the selection is moved. Its handler may modify the resulting selection head and anchor.
        Handlers for this event have the same restriction as "beforeChange" handlers they should not do anything to directly update the state of the editor. */
    native public void on(def.codemirror.StringTypes.beforeSelectionChange eventName, java.util.function.BiConsumer<def.codemirror.codemirror.Editor,Selection> handler);
    native public void off(def.codemirror.StringTypes.beforeSelectionChange eventName, java.util.function.BiConsumer<def.codemirror.codemirror.Editor,Selection> handler);
    /** Fires whenever the view port of the editor changes (due to scrolling, editing, or any other factor).
        The from and to arguments give the new start and end of the viewport. */
    native public void on(def.codemirror.StringTypes.viewportChange eventName, jsweet.util.function.TriConsumer<def.codemirror.codemirror.Editor,Double,Double> handler);
    native public void off(def.codemirror.StringTypes.viewportChange eventName, jsweet.util.function.TriConsumer<def.codemirror.codemirror.Editor,Double,Double> handler);
    /** Fires when the editor gutter (the line-number area) is clicked. Will pass the editor instance as first argument,
        the (zero-based) number of the line that was clicked as second argument, the CSS class of the gutter that was clicked as third argument,
        and the raw mousedown event object as fourth argument. */
    native public void on(def.codemirror.StringTypes.gutterClick eventName, Consumer4<def.codemirror.codemirror.Editor,Double,String,Event> handler);
    native public void off(def.codemirror.StringTypes.gutterClick eventName, Consumer4<def.codemirror.codemirror.Editor,Double,String,Event> handler);
    /** Fires whenever the editor is focused. */
    native public void on(def.codemirror.StringTypes.focus eventName, java.util.function.Consumer<def.codemirror.codemirror.Editor> handler);
    native public void off(def.codemirror.StringTypes.focus eventName, java.util.function.Consumer<def.codemirror.codemirror.Editor> handler);
    /** Fires whenever the editor is unfocused. */
    native public void on(def.codemirror.StringTypes.blur eventName, java.util.function.Consumer<def.codemirror.codemirror.Editor> handler);
    native public void off(def.codemirror.StringTypes.blur eventName, java.util.function.Consumer<def.codemirror.codemirror.Editor> handler);
    /** Fires when the editor is scrolled. */
    native public void on(def.codemirror.StringTypes.scroll eventName, java.util.function.Consumer<def.codemirror.codemirror.Editor> handler);
    native public void off(def.codemirror.StringTypes.scroll eventName, java.util.function.Consumer<def.codemirror.codemirror.Editor> handler);
    /** Will be fired whenever CodeMirror updates its DOM display. */
    native public void on(def.codemirror.StringTypes.update eventName, java.util.function.Consumer<def.codemirror.codemirror.Editor> handler);
    native public void off(def.codemirror.StringTypes.update eventName, java.util.function.Consumer<def.codemirror.codemirror.Editor> handler);
    /** Fired whenever a line is (re-)rendered to the DOM. Fired right after the DOM element is built, before it is added to the document.
        The handler may mess with the style of the resulting element, or add event handlers, but should not try to change the state of the editor. */
    native public void on(def.codemirror.StringTypes.renderLine eventName, jsweet.util.function.TriConsumer<def.codemirror.codemirror.Editor,def.codemirror.codemirror.LineHandle,HTMLElement> handler);
    native public void off(def.codemirror.StringTypes.renderLine eventName, jsweet.util.function.TriConsumer<def.codemirror.codemirror.Editor,def.codemirror.codemirror.LineHandle,HTMLElement> handler);
    /** Fires when one of the DOM events fires. */
    native public void on(Object eventName, java.util.function.BiConsumer<def.codemirror.codemirror.Editor,Event> handler);
    native public void off(Object eventName, java.util.function.BiConsumer<def.codemirror.codemirror.Editor,Event> handler);
    /** Expose the state object, so that the Editor.state.completionActive property is reachable*/
    public Object state;
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class FindPosH extends def.js.Object {
        public double line;
        public double ch;
        @jsweet.lang.Optional
        public Boolean hitSide;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class FindPosV extends def.js.Object {
        public double line;
        public double ch;
        @jsweet.lang.Optional
        public Boolean hitSide;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class LineInfo extends def.js.Object {
        public Object line;
        public Object handle;
        public String text;
        /** Object mapping gutter IDs to marker elements. */
        public Object gutterMarkers;
        public String textClass;
        public String bgClass;
        public String wrapClass;
        /** Array of line widgets attached to this line. */
        public Object widgets;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Pos extends def.js.Object {
        public double left;
        public double top;
        public double right;
        public double bottom;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class PosData extends def.js.Object {
        public double line;
        public double ch;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class PosDto extends def.js.Object {
        public def.codemirror.codemirror.Position from;
        public def.codemirror.codemirror.Position to;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class CursorCoords extends def.js.Object {
        public double left;
        public double top;
        public double bottom;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class CharCoords extends def.js.Object {
        public double left;
        public double right;
        public double top;
        public double bottom;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Object extends def.js.Object {
        public double left;
        public double top;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class GetViewport extends def.js.Object {
        public double from;
        public double to;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Selection extends def.js.Object {
        public def.codemirror.codemirror.Position head;
        public def.codemirror.codemirror.Position anchor;
    }
    /** Attach an additional keymap to the editor.
        This is mostly useful for add - ons that need to register some key handlers without trampling on the extraKeys option.
        Maps added in this way have a higher precedence than the extraKeys and keyMap options, and between them,
        the maps added earlier have a lower precedence than those added later, unless the bottom argument was passed,
        in which case they end up below other keymaps added with this method. */
    native public void addKeyMap(String map);
    /** Enable a highlighting overlay.This is a stateless mini - mode that can be used to add extra highlighting.
        For example, the search add - on uses it to highlight the term that's currently being searched.
        mode can be a mode spec or a mode object (an object with a token method). The options parameter is optional. If given, it should be an object.
        Currently, only the opaque option is recognized. This defaults to off, but can be given to allow the overlay styling, when not null,
        to override the styling of the base mode entirely, instead of the two being applied together. */
    native public void addOverlay(Object mode);
    /** Get the content of the current editor document. You can pass it an optional argument to specify the string to be used to separate lines (defaults to "\n"). */
    native public String getValue();
    /** Remove a CSS class from a line.line can be a line handle or number.
        where should be one of "text", "background", or "wrap"(see addLineClass).
        class can be left off to remove all classes for the specified node, or be a string to remove only a specific class. */
    native public def.codemirror.codemirror.LineHandle removeLineClass(Object line, String where);
    /** Compute the line at the given pixel height. mode is the relative element
        to use to compute this line, it may be "window", "page" (the default), or "local" */
    native public double lineAtHeight(double height);
    /** Computes the height of the top of a line, in the coordinate system specified by mode, it may be "window",
        "page" (the default), or "local". When a line below the bottom of the document is specified, the returned value
        is the bottom of the last line in the document. By default, the position of the actual text is returned.
        If includeWidgets is true and the line has line widgets, the position above the first line widget is returned. */
    native public double heightAtLine(Object line, def.codemirror.StringTypes.window mode);
    /** Computes the height of the top of a line, in the coordinate system specified by mode, it may be "window",
        "page" (the default), or "local". When a line below the bottom of the document is specified, the returned value
        is the bottom of the last line in the document. By default, the position of the actual text is returned.
        If includeWidgets is true and the line has line widgets, the position above the first line widget is returned. */
    native public double heightAtLine(Object line);
    /** Adds a line widget, an element shown below a line, spanning the whole of the editor's width, and moving the lines below it downwards.
        line should be either an integer or a line handle, and node should be a DOM node, which will be displayed below the given line.
        options, when given, should be an object that configures the behavior of the widget.
        Note that the widget node will become a descendant of nodes with CodeMirror-specific CSS classes, and those classes might in some cases affect it. */
    native public def.codemirror.codemirror.LineWidget addLineWidget(Object line, HTMLElement node);
    /** Scroll the editor to a given(pixel) position.Both arguments may be left as null or undefined to have no effect. */
    native public void scrollTo(double x);
    /** Scrolls the given element into view. pos is a { line , ch } position, referring to a given character, null, to refer to the cursor.
        The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well. */
    native public void scrollIntoView(def.codemirror.codemirror.Position pos);
    /** Scrolls the given element into view. pos is a { line, ch } object, in editor-local coordinates.
        The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well. */
    native public void scrollIntoView(PosData pos);
    /** Returns an { left , top , bottom } object containing the coordinates of the cursor position.
        If mode is "local", they will be relative to the top-left corner of the editable document.
        If it is "page" or not given, they are relative to the top-left corner of the page.
        where is a boolean indicating whether you want the start(true) or the end(false) of the selection. */
    native public CursorCoords cursorCoords(Boolean where);
    /** Returns an { left , top , bottom } object containing the coordinates of the cursor position.
        If mode is "local", they will be relative to the top-left corner of the editable document.
        If it is "page" or not given, they are relative to the top-left corner of the page.
        where specifies the precise position at which you want to measure. */
    native public CursorCoords cursorCoords(def.codemirror.codemirror.Position where);
    /** Returns the position and dimensions of an arbitrary character. pos should be a { line , ch } object.
        If mode is "local", they will be relative to the top-left corner of the editable document.
        If it is "page" or not given, they are relative to the top-left corner of the page.
        This differs from cursorCoords in that it'll give the size of the whole character,
        rather than just the position that the cursor would have when it would sit at that position. */
    native public CharCoords charCoords(def.codemirror.codemirror.Position pos);
    /** Given an { left , top } object , returns the { line , ch } position that corresponds to it.
        The optional mode parameter determines relative to what the coordinates are interpreted.
        It may be "window", "page" (the default), or "local". */
    native public def.codemirror.codemirror.Position coordsChar(Object object);
    /** Retrieves information about the token the current mode found before the given position (a {line, ch} object). */
    native public Token getTokenAt(def.codemirror.codemirror.Position pos);
    /** This is similar to getTokenAt, but collects all tokens for a given line into an array. */
    native public Token[] getLineTokens(double line);
    /** Returns the mode's parser state, if any, at the end of the given line number.
        If no line number is given, the state at the end of the document is returned.
        This can be useful for storing parsing errors in the state, or getting other kinds of contextual information for a line. */
    native public Object getStateAfter();
    /** Adjust the indentation of the given line.
        The second argument (which defaults to "smart") may be one of:
        "prev" Base indentation on the indentation of the previous line.
        "smart" Use the mode's smart indentation if available, behave like "prev" otherwise.
        "add" Increase the indentation of the line by one indent unit.
        "subtract" Reduce the indentation of the line. */
    native public void indentLine(double line);
    /** Attach an additional keymap to the editor.
        This is mostly useful for add - ons that need to register some key handlers without trampling on the extraKeys option.
        Maps added in this way have a higher precedence than the extraKeys and keyMap options, and between them,
        the maps added earlier have a lower precedence than those added later, unless the bottom argument was passed,
        in which case they end up below other keymaps added with this method. */
    native public void addKeyMap(KeyMap map, Boolean bottom);
    /** Disable a keymap added with addKeyMap.Either pass in the keymap object itself , or a string,
        which will be compared against the name property of the active keymaps. */
    native public void removeKeyMap(KeyMap map);
    /** Compute the line at the given pixel height. mode is the relative element
        to use to compute this line, it may be "window", "page" (the default), or "local" */
    native public double lineAtHeight(double height, def.codemirror.StringTypes.local mode);
    /** Compute the line at the given pixel height. mode is the relative element
        to use to compute this line, it may be "window", "page" (the default), or "local" */
    native public double lineAtHeight(double height, def.codemirror.StringTypes.page mode);
    /** Computes the height of the top of a line, in the coordinate system specified by mode, it may be "window",
        "page" (the default), or "local". When a line below the bottom of the document is specified, the returned value
        is the bottom of the last line in the document. By default, the position of the actual text is returned.
        If includeWidgets is true and the line has line widgets, the position above the first line widget is returned. */
    native public double heightAtLine(Object line, def.codemirror.StringTypes.page mode, Boolean includeWidgets);
    /** Computes the height of the top of a line, in the coordinate system specified by mode, it may be "window",
        "page" (the default), or "local". When a line below the bottom of the document is specified, the returned value
        is the bottom of the last line in the document. By default, the position of the actual text is returned.
        If includeWidgets is true and the line has line widgets, the position above the first line widget is returned. */
    native public double heightAtLine(Object line, def.codemirror.StringTypes.local mode, Boolean includeWidgets);
    /** Scroll the editor to a given(pixel) position.Both arguments may be left as null or undefined to have no effect. */
    native public void scrollTo(Double x, Double y);
    /** Returns an { left , top , bottom } object containing the coordinates of the cursor position.
        If mode is "local", they will be relative to the top-left corner of the editable document.
        If it is "page" or not given, they are relative to the top-left corner of the page.
        where is a boolean indicating whether you want the start(true) or the end(false) of the selection. */
    native public CursorCoords cursorCoords(Boolean where, def.codemirror.StringTypes.local mode);
    /** Returns an { left , top , bottom } object containing the coordinates of the cursor position.
        If mode is "local", they will be relative to the top-left corner of the editable document.
        If it is "page" or not given, they are relative to the top-left corner of the page.
        where is a boolean indicating whether you want the start(true) or the end(false) of the selection. */
    native public CursorCoords cursorCoords(Boolean where, def.codemirror.StringTypes.page mode);
    /** Returns an { left , top , bottom } object containing the coordinates of the cursor position.
        If mode is "local", they will be relative to the top-left corner of the editable document.
        If it is "page" or not given, they are relative to the top-left corner of the page.
        where specifies the precise position at which you want to measure. */
    native public CursorCoords cursorCoords(def.codemirror.codemirror.Position where, def.codemirror.StringTypes.page mode);
    /** Returns an { left , top , bottom } object containing the coordinates of the cursor position.
        If mode is "local", they will be relative to the top-left corner of the editable document.
        If it is "page" or not given, they are relative to the top-left corner of the page.
        where specifies the precise position at which you want to measure. */
    native public CursorCoords cursorCoords(def.codemirror.codemirror.Position where, def.codemirror.StringTypes.local mode);
    /** Returns the position and dimensions of an arbitrary character. pos should be a { line , ch } object.
        If mode is "local", they will be relative to the top-left corner of the editable document.
        If it is "page" or not given, they are relative to the top-left corner of the page.
        This differs from cursorCoords in that it'll give the size of the whole character,
        rather than just the position that the cursor would have when it would sit at that position. */
    native public CharCoords charCoords(def.codemirror.codemirror.Position pos, def.codemirror.StringTypes.local mode);
    /** Returns the position and dimensions of an arbitrary character. pos should be a { line , ch } object.
        If mode is "local", they will be relative to the top-left corner of the editable document.
        If it is "page" or not given, they are relative to the top-left corner of the page.
        This differs from cursorCoords in that it'll give the size of the whole character,
        rather than just the position that the cursor would have when it would sit at that position. */
    native public CharCoords charCoords(def.codemirror.codemirror.Position pos, def.codemirror.StringTypes.page mode);
    /** Given an { left , top } object , returns the { line , ch } position that corresponds to it.
        The optional mode parameter determines relative to what the coordinates are interpreted.
        It may be "window", "page" (the default), or "local". */
    native public def.codemirror.codemirror.Position coordsChar(Object object, def.codemirror.StringTypes.local mode);
    /** Given an { left , top } object , returns the { line , ch } position that corresponds to it.
        The optional mode parameter determines relative to what the coordinates are interpreted.
        It may be "window", "page" (the default), or "local". */
    native public def.codemirror.codemirror.Position coordsChar(Object object, def.codemirror.StringTypes.page mode);
    /** Attach an additional keymap to the editor.
        This is mostly useful for add - ons that need to register some key handlers without trampling on the extraKeys option.
        Maps added in this way have a higher precedence than the extraKeys and keyMap options, and between them,
        the maps added earlier have a lower precedence than those added later, unless the bottom argument was passed,
        in which case they end up below other keymaps added with this method. */
    native public void addKeyMap(KeyMap map);
    /** Computes the height of the top of a line, in the coordinate system specified by mode, it may be "window",
        "page" (the default), or "local". When a line below the bottom of the document is specified, the returned value
        is the bottom of the last line in the document. By default, the position of the actual text is returned.
        If includeWidgets is true and the line has line widgets, the position above the first line widget is returned. */
    native public double heightAtLine(Object line, def.codemirror.StringTypes.page mode);
    /** Computes the height of the top of a line, in the coordinate system specified by mode, it may be "window",
        "page" (the default), or "local". When a line below the bottom of the document is specified, the returned value
        is the bottom of the last line in the document. By default, the position of the actual text is returned.
        If includeWidgets is true and the line has line widgets, the position above the first line widget is returned. */
    native public double heightAtLine(Object line, def.codemirror.StringTypes.local mode);
}

