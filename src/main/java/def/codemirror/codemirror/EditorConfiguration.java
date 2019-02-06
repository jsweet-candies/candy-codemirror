package def.codemirror.codemirror;
import def.dom.Event;
@jsweet.lang.Interface
public abstract class EditorConfiguration extends def.js.Object {
    /** string| The starting value of the editor. Can be a string, or a document object. */
    @jsweet.lang.Optional
    public Object value;
    /** string|object. The mode to use. When not given, this will default to the first mode that was loaded.
        It may be a string, which either simply names the mode or is a MIME type associated with the mode.
        Alternatively, it may be an object containing configuration options for the mode,
        with a name property that names the mode (for example {name: "javascript", json: true}). */
    @jsweet.lang.Optional
    public Object mode;
    /** The theme to style the editor with. You must make sure the CSS file defining the corresponding .cm-s-[name] styles is loaded.
        The default is "default". */
    @jsweet.lang.Optional
    public String theme;
    /** How many spaces a block (whatever that means in the edited language) should be indented. The default is 2. */
    @jsweet.lang.Optional
    public double indentUnit;
    /** Whether to use the context-sensitive indentation that the mode provides (or just indent the same as the line before). Defaults to true. */
    @jsweet.lang.Optional
    public Boolean smartIndent;
    /** The width of a tab character. Defaults to 4. */
    @jsweet.lang.Optional
    public double tabSize;
    /** Whether, when indenting, the first N*tabSize spaces should be replaced by N tabs. Default is false. */
    @jsweet.lang.Optional
    public Boolean indentWithTabs;
    /** Configures whether the editor should re-indent the current line when a character is typed
        that might change its proper indentation (only works if the mode supports indentation). Default is true. */
    @jsweet.lang.Optional
    public Boolean electricChars;
    /** Determines whether horizontal cursor movement through right-to-left (Arabic, Hebrew) text
        is visual (pressing the left arrow moves the cursor left)
        or logical (pressing the left arrow moves to the next lower index in the string, which is visually right in right-to-left text).
        The default is false on Windows, and true on other platforms. */
    @jsweet.lang.Optional
    public Boolean rtlMoveVisually;
    /** Configures the keymap to use. The default is "default", which is the only keymap defined in codemirror.js itself.
        Extra keymaps are found in the keymap directory. See the section on keymaps for more information. */
    @jsweet.lang.Optional
    public String keyMap;
    /** Can be used to specify extra keybindings for the editor, alongside the ones defined by keyMap. Should be either null, or a valid keymap value. */
    @jsweet.lang.Optional
    public jsweet.util.union.Union<String,KeyMap> extraKeys;
    /** Whether CodeMirror should scroll or wrap for long lines. Defaults to false (scroll). */
    @jsweet.lang.Optional
    public Boolean lineWrapping;
    /** Whether to show line numbers to the left of the editor. */
    @jsweet.lang.Optional
    public Boolean lineNumbers;
    /** At which number to start counting lines. Default is 1. */
    @jsweet.lang.Optional
    public double firstLineNumber;
    /** A function used to format line numbers. The function is passed the line number, and should return a string that will be shown in the gutter. */
    @jsweet.lang.Optional
    public java.util.function.Function<Double,String> lineNumberFormatter;
    /** Can be used to add extra gutters (beyond or instead of the line number gutter).
        Should be an array of CSS class names, each of which defines a width (and optionally a background),
        and which will be used to draw the background of the gutters.
        May include the CodeMirror-linenumbers class, in order to explicitly set the position of the line number gutter
        (it will default to be to the right of all other gutters). These class names are the keys passed to setGutterMarker. */
    @jsweet.lang.Optional
    public String[] gutters;
    /** Provides an option foldGutter, which can be used to create a gutter with markers indicating the blocks that can be folded. */
    @jsweet.lang.Optional
    public Boolean foldGutter;
    /** Determines whether the gutter scrolls along with the content horizontally (false)
        or whether it stays fixed during horizontal scrolling (true, the default). */
    @jsweet.lang.Optional
    public Boolean fixedGutter;
    /**
         * Chooses a scrollbar implementation. The default is "native", showing native scrollbars. The core library also
         * provides the "null" style, which completely hides the scrollbars. Addons can implement additional scrollbar models.
         */
    @jsweet.lang.Optional
    public String scrollbarStyle;
    /** boolean|string. This disables editing of the editor content by the user. If the special value "nocursor" is given (instead of simply true), focusing of the editor is also disallowed. */
    @jsweet.lang.Optional
    public Object readOnly;
    /**Whether the cursor should be drawn when a selection is active. Defaults to false. */
    @jsweet.lang.Optional
    public Boolean showCursorWhenSelecting;
    /** The maximum number of undo levels that the editor stores. Defaults to 40. */
    @jsweet.lang.Optional
    public double undoDepth;
    /** The period of inactivity (in milliseconds) that will cause a new history event to be started when typing or deleting. Defaults to 500. */
    @jsweet.lang.Optional
    public double historyEventDelay;
    /** The tab index to assign to the editor. If not given, no tab index will be assigned. */
    @jsweet.lang.Optional
    public double tabindex;
    /** Can be used to make CodeMirror focus itself on initialization. Defaults to off.
        When fromTextArea is used, and no explicit value is given for this option, it will be set to true when either the source textarea is focused,
        or it has an autofocus attribute and no other element is focused. */
    @jsweet.lang.Optional
    public Boolean autofocus;
    /** Controls whether drag-and - drop is enabled. On by default. */
    @jsweet.lang.Optional
    public Boolean dragDrop;
    /** When given , this will be called when the editor is handling a dragenter , dragover , or drop event.
        It will be passed the editor instance and the event object as arguments.
        The callback can choose to handle the event itself , in which case it should return true to indicate that CodeMirror should not do anything further. */
    @jsweet.lang.Optional
    public java.util.function.BiFunction<def.codemirror.codemirror.Editor,Event,Boolean> onDragEvent;
    /** This provides a rather low - level hook into CodeMirror's key handling.
        If provided, this function will be called on every keydown, keyup, and keypress event that CodeMirror captures.
        It will be passed two arguments, the editor instance and the key event.
        This key event is pretty much the raw key event, except that a stop() method is always added to it.
        You could feed it to, for example, jQuery.Event to further normalize it.
        This function can inspect the key event, and handle it if it wants to.
        It may return true to tell CodeMirror to ignore the event.
        Be wary that, on some browsers, stopping a keydown does not stop the keypress from firing, whereas on others it does.
        If you respond to an event, you should probably inspect its type property and only do something when it is keydown
        (or keypress for actions that need character data). */
    @jsweet.lang.Optional
    public java.util.function.BiFunction<def.codemirror.codemirror.Editor,Event,Boolean> onKeyEvent;
    /** Half - period in milliseconds used for cursor blinking. The default blink rate is 530ms. */
    @jsweet.lang.Optional
    public double cursorBlinkRate;
    /** Determines the height of the cursor. Default is 1 , meaning it spans the whole height of the line.
        For some fonts (and by some tastes) a smaller height (for example 0.85),
        which causes the cursor to not reach all the way to the bottom of the line, looks better */
    @jsweet.lang.Optional
    public double cursorHeight;
    /** Highlighting is done by a pseudo background - thread that will work for workTime milliseconds,
        and then use timeout to sleep for workDelay milliseconds.
        The defaults are 200 and 300, you can change these options to make the highlighting more or less aggressive. */
    @jsweet.lang.Optional
    public double workTime;
    /** See workTime. */
    @jsweet.lang.Optional
    public double workDelay;
    /** Indicates how quickly CodeMirror should poll its input textarea for changes(when focused).
        Most input is captured by events, but some things, like IME input on some browsers, don't generate events that allow CodeMirror to properly detect it.
        Thus, it polls. Default is 100 milliseconds. */
    @jsweet.lang.Optional
    public double pollInterval;
    /** By default, CodeMirror will combine adjacent tokens into a single span if they have the same class.
        This will result in a simpler DOM tree, and thus perform better. With some kinds of styling(such as rounded corners),
        this will change the way the document looks. You can set this option to false to disable this behavior. */
    @jsweet.lang.Optional
    public Boolean flattenSpans;
    /** When highlighting long lines, in order to stay responsive, the editor will give up and simply style
        the rest of the line as plain text when it reaches a certain position. The default is 10000.
        You can set this to Infinity to turn off this behavior. */
    @jsweet.lang.Optional
    public double maxHighlightLength;
    /** Specifies the amount of lines that are rendered above and below the part of the document that's currently scrolled into view.
        This affects the amount of updates needed when scrolling, and the amount of work that such an update does.
        You should usually leave it at its default, 10. Can be set to Infinity to make sure the whole document is always rendered,
        and thus the browser's text search works on it. This will have bad effects on performance of big documents. */
    @jsweet.lang.Optional
    public double viewportMargin;
    /** Optional lint configuration to be used in conjunction with CodeMirror's linter addon. */
    @jsweet.lang.Optional
    public jsweet.util.union.Union<Boolean,LintOptions> lint;
    /** Optional value to be used in conjunction with CodeMirror’s placeholder add-on. */
    @jsweet.lang.Optional
    public String placeholder;
}

