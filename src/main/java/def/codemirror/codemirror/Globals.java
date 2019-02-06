package def.codemirror.codemirror;
import def.dom.HTMLTextAreaElement;
import def.js.Function;
import def.dom.HTMLElement;
/** This class holds all the global functions and variables of the CodeMirror package. */
public final class Globals {
    private Globals(){}
    public static def.codemirror.codemirror.PositionConstructor Pos;
    public static PassData Pass;
    /** Find the column position at a given string index using a given tabsize. */
    native public static double countColumn(String line, Double index, double tabSize);
    native public static def.codemirror.codemirror.EditorFromTextArea fromTextArea(HTMLTextAreaElement host, EditorConfiguration options);
    /** Compare two positions, return 0 if they are the same, a negative number when a is less, and a positive number otherwise. */
    native public static double cmpPos(Position a, Position b);
    /** Utility function that computes an end position from a change (an object with from, to, and text properties, as passed to various event handlers).
    The returned position will be the end of the changed range, after the change is applied. */
    native public static Position changeEnd(EditorChange change);
    /** It contains a string that indicates the version of the library. This is a triple of integers "major.minor.patch",
    where patch is zero for releases, and something else (usually one) for dev snapshots. */
    public static String version;
    /** An object containing default values for all options.
    You can assign to its properties to modify defaults (though this won't affect editors that have already been created). */
    public static Object defaults;
    /** If you want to define extra methods in terms of the CodeMirror API, it is possible to use defineExtension.
    This will cause the given value(usually a method) to be added to all CodeMirror instances created from then on. */
    native public static void defineExtension(String name, Object value);
    /** Like defineExtension, but the method will be added to the interface for Doc objects instead. */
    native public static void defineDocExtension(String name, Object value);
    /** Similarly, defineOption can be used to define new options for CodeMirror.
    The updateFunc will be called with the editor instance and the new value when an editor is initialized,
    and whenever the option is modified through setOption. */
    native public static void defineOption(String name, Object default_, Function updateFunc);
    /** If your extention just needs to run some code whenever a CodeMirror instance is initialized, use CodeMirror.defineInitHook.
    Give it a function as its only argument, and from then on, that function will be called (with the instance as argument)
    whenever a new CodeMirror instance is initialized. */
    native public static void defineInitHook(Function func);
    /** Registers a helper value with the given name in the given namespace (type). This is used to define functionality
    that may be looked up by mode. Will create (if it doesn't already exist) a property on the CodeMirror object for
    the given type, pointing to an object that maps names to values. I.e. after doing
    CodeMirror.registerHelper("hint", "foo", myFoo), the value CodeMirror.hint.foo will point to myFoo. */
    native public static void registerHelper(String namespace, String name, Object helper);
    /** Given a state object, returns a {state, mode} object with the inner mode and its state for the current position. */
    native public static InnerMode innerMode(Mode<?> mode, Object state);
    /** Sometimes, it is useful to add or override mode object properties from external code.
    The CodeMirror.extendMode function can be used to add properties to mode objects produced for a specific mode.
    Its first argument is the name of the mode, its second an object that specifies the properties that should be added.
    This is mostly useful to add utilities that can later be looked up through getMode. */
    native public static void extendMode(String name, Mode<?> properties);
    native public static void on(Object element, String eventName, Function handler);
    native public static void off(Object element, String eventName, Function handler);
    /** Fired whenever a change occurs to the document. changeObj has a similar type as the object passed to the editor's "change" event,
    but it never has a next property, because document change events are not batched (whereas editor change events are). */
    native public static void on(Doc doc, def.codemirror.StringTypes.change eventName, java.util.function.BiConsumer<Doc,EditorChange> handler);
    native public static void off(Doc doc, def.codemirror.StringTypes.change eventName, java.util.function.BiConsumer<Doc,EditorChange> handler);
    /** See the description of the same event on editor instances. */
    native public static void on(Doc doc, def.codemirror.StringTypes.beforeChange eventName, java.util.function.BiConsumer<Doc,EditorChangeCancellable> handler);
    native public static void off(Doc doc, def.codemirror.StringTypes.beforeChange eventName, java.util.function.BiConsumer<Doc,EditorChangeCancellable> handler);
    /** Fired whenever the cursor or selection in this document changes. */
    native public static void on(Doc doc, def.codemirror.StringTypes.cursorActivity eventName, java.util.function.Consumer<def.codemirror.codemirror.Editor> handler);
    native public static void off(Doc doc, def.codemirror.StringTypes.cursorActivity eventName, java.util.function.Consumer<def.codemirror.codemirror.Editor> handler);
    /** Equivalent to the event by the same name as fired on editor instances. */
    native public static void on(Doc doc, def.codemirror.StringTypes.beforeSelectionChange eventName, java.util.function.BiConsumer<def.codemirror.codemirror.Editor,Selection> handler);
    native public static void off(Doc doc, def.codemirror.StringTypes.beforeSelectionChange eventName, java.util.function.BiConsumer<def.codemirror.codemirror.Editor,Selection> handler);
    /** Will be fired when the line object is deleted. A line object is associated with the start of the line.
    Mostly useful when you need to find out when your gutter markers on a given line are removed. */
    native public static void on(LineHandle line, def.codemirror.StringTypes.delete eventName, java.lang.Runnable handler);
    native public static void off(LineHandle line, def.codemirror.StringTypes.delete eventName, java.lang.Runnable handler);
    /** Fires when the line's text content is changed in any way (but the line is not deleted outright).
    The change object is similar to the one passed to change event on the editor object. */
    native public static void on(LineHandle line, def.codemirror.StringTypes.change eventName, java.util.function.BiConsumer<LineHandle,EditorChange> handler);
    native public static void off(LineHandle line, def.codemirror.StringTypes.change eventName, java.util.function.BiConsumer<LineHandle,EditorChange> handler);
    /** Fired when the cursor enters the marked range. From this event handler, the editor state may be inspected but not modified,
    with the exception that the range on which the event fires may be cleared. */
    native public static void on(TextMarker marker, def.codemirror.StringTypes.beforeCursorEnter eventName, java.lang.Runnable handler);
    native public static void off(TextMarker marker, def.codemirror.StringTypes.beforeCursorEnter eventName, java.lang.Runnable handler);
    /** Fired when the range is cleared, either through cursor movement in combination with clearOnEnter or through a call to its clear() method.
    Will only be fired once per handle. Note that deleting the range through text editing does not fire this event,
    because an undo action might bring the range back into existence. */
    native public static void on(TextMarker marker, def.codemirror.StringTypes.clear eventName, java.lang.Runnable handler);
    native public static void off(TextMarker marker, def.codemirror.StringTypes.clear eventName, java.lang.Runnable handler);
    /** Fired when the last part of the marker is removed from the document by editing operations. */
    native public static void on(TextMarker marker, def.codemirror.StringTypes.hide eventName, java.lang.Runnable handler);
    native public static void off(TextMarker marker, def.codemirror.StringTypes.hide eventName, java.lang.Runnable handler);
    /** Fired when, after the marker was removed by editing, a undo operation brought the marker back. */
    native public static void on(TextMarker marker, def.codemirror.StringTypes.unhide eventName, java.lang.Runnable handler);
    native public static void off(TextMarker marker, def.codemirror.StringTypes.unhide eventName, java.lang.Runnable handler);
    /** Fired whenever the editor re-adds the widget to the DOM. This will happen once right after the widget is added (if it is scrolled into view),
    and then again whenever it is scrolled out of view and back in again, or when changes to the editor options
    or the line the widget is on require the widget to be redrawn. */
    native public static void on(LineWidget line, def.codemirror.StringTypes.redraw eventName, java.lang.Runnable handler);
    native public static void off(LineWidget line, def.codemirror.StringTypes.redraw eventName, java.lang.Runnable handler);
    /** Various CodeMirror-related objects emit events, which allow client code to react to various situations.
    Handlers for such events can be registered with the on and off methods on the objects that the event fires on.
    To fire your own events, use CodeMirror.signal(target, name, args...), where target is a non-DOM-node object. */
    native public static void signal(Object target, String name, Object... args);
    /**
     * id will be the id for the defined mode. Typically, you should use this second argument to defineMode as your module scope function
     * (modes should not leak anything into the global scope!), i.e. write your whole mode inside this function.
     */
    native public static void defineMode(String id, ModeFactoryAny modefactory);
    /**
     * id will be the id for the defined mode. Typically, you should use this second argument to defineMode as your module scope function
     * (modes should not leak anything into the global scope!), i.e. write your whole mode inside this function.
     */
    native public static <T> void defineMode(String id, ModeFactoryT<T> modefactory);
    /**
     * The first argument is a configuration object as passed to the mode constructor function, and the second argument
     * is a mode specification as in the EditorConfiguration mode option.
     */
    native public static <T> Mode<T> getMode(def.codemirror.codemirror.EditorConfiguration config, Object mode);
    /**
     * Utility function from the overlay.js addon that allows modes to be combined. The mode given as the base argument takes care of
     * most of the normal mode functionality, but a second (typically simple) mode is used, which can override the style of text.
     * Both modes get to parse all of the text, but when both assign a non-null style to a piece of code, the overlay wins, unless
     * the combine argument was true and not overridden, or state.overlay.combineTokens was true, in which case the styles are combined.
     */
    native public static <T,S> Mode<?> overlayMode(Mode<T> base, Mode<S> overlay, Boolean combine);
    /**
     * A function that calculates either a two-way or three-way merge between different sets of content.
     */
    native public static def.codemirror.codemirror.mergeview.MergeViewEditor MergeView(HTMLElement element, def.codemirror.codemirror.mergeview.MergeViewEditorConfiguration options);
    native public static def.codemirror.codemirror.EditorFromTextArea fromTextArea(HTMLTextAreaElement host);
    /**
     * Utility function from the overlay.js addon that allows modes to be combined. The mode given as the base argument takes care of
     * most of the normal mode functionality, but a second (typically simple) mode is used, which can override the style of text.
     * Both modes get to parse all of the text, but when both assign a non-null style to a piece of code, the overlay wins, unless
     * the combine argument was true and not overridden, or state.overlay.combineTokens was true, in which case the styles are combined.
     */
    native public static <T,S> Mode<?> overlayMode(Mode<T> base, Mode<S> overlay);
    /**
     * A function that calculates either a two-way or three-way merge between different sets of content.
     */
    native public static def.codemirror.codemirror.mergeview.MergeViewEditor MergeView(HTMLElement element);
    native public static def.codemirror.codemirror.Position Pos(double line, double ch);
    native public static def.codemirror.codemirror.Position Pos(double line);
    /** This class was automatically generated for disambiguating erased method signatures. */
    @jsweet.lang.Erased
    public static class ModeFactoryT<T> extends def.js.Object {
        public ModeFactoryT(ModeFactory<T> modefactory){}
    }
    /** This class was automatically generated for disambiguating erased method signatures. */
    @jsweet.lang.Erased
    public static class ModeFactoryAny extends def.js.Object {
        public ModeFactoryAny(ModeFactory<?> modefactory){}
    }
}

