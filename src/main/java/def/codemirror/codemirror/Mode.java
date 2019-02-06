package def.codemirror.codemirror;
import def.js.RegExp;
/**
     * A Mode is, in the simplest case, a lexer (tokenizer) for your language — a function that takes a character stream as input,
     * advances it past a token, and returns a style for that token. More advanced modes can also handle indentation for the language.
     */
@jsweet.lang.Interface
public abstract class Mode<T> extends def.js.Object {
    /**
         * This function should read one token from the stream it is given as an argument, optionally update its state,
         * and return a style string, or null for tokens that do not have to be styled. Multiple styles can be returned, separated by spaces.
         */
    @jsweet.lang.Optional
    public java.util.function.BiFunction<StringStream,T,String> token;
    /**
         * A function that produces a state object to be used at the start of a document.
         */
    @jsweet.lang.Optional
    public java.util.function.Supplier<T> startState;
    /**
         * For languages that have significant blank lines, you can define a blankLine(state) method on your mode that will get called
         * whenever a blank line is passed over, so that it can update the parser state.
         */
    @jsweet.lang.Optional
    public java.util.function.Consumer<T> blankLine;
    /**
         * Given a state returns a safe copy of that state.
         */
    @jsweet.lang.Optional
    public java.util.function.Function<T,T> copyState;
    /**
         * The indentation method should inspect the given state object, and optionally the textAfter string, which contains the text on
         * the line that is being indented, and return an integer, the amount of spaces to indent.
         */
    @jsweet.lang.Optional
    public java.util.function.BiFunction<T,String,Double> indent;
    /**
         * String that starts a line comment.
         */
    @jsweet.lang.Optional
    public String lineComment;
    /**
         * String that starts a block comment.
         */
    @jsweet.lang.Optional
    public String blockCommentStart;
    /**
         * String that ends a block comment.
         */
    @jsweet.lang.Optional
    public String blockCommentEnd;
    /**
         * String to put at the start of continued lines in a block comment.
         */
    @jsweet.lang.Optional
    public String blockCommentLead;
    /**
         * Trigger a reindent whenever one of the characters in the string is typed.
         */
    @jsweet.lang.Optional
    public String electricChars;
    /**
         * Trigger a reindent whenever the regex matches the part of the line before the cursor.
         */
    @jsweet.lang.Optional
    public RegExp electricinput;
}

