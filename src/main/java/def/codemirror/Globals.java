package def.codemirror;
import def.dom.HTMLElement;
/** This class holds all the global functions and variables of the def.codemirror package. */
public final class Globals {
    private Globals(){}
    native public static def.codemirror.codemirror.Editor CodeMirror(HTMLElement host, def.codemirror.codemirror.EditorConfiguration options);
    native public static def.codemirror.codemirror.Editor CodeMirror(java.util.function.Consumer<HTMLElement> callback, def.codemirror.codemirror.EditorConfiguration options);
    native public static def.codemirror.codemirror.Editor CodeMirror(HTMLElement host);
    native public static def.codemirror.codemirror.Editor CodeMirror(java.util.function.Consumer<HTMLElement> callback);
}

