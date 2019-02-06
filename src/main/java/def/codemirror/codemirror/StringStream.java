package def.codemirror.codemirror;
import def.js.RegExp;
@jsweet.lang.Interface
public abstract class StringStream extends def.js.Object {
    public double lastColumnPos;
    public double lastColumnValue;
    public double lineStart;
    /**
         * Current position in the string.
         */
    public double pos;
    /**
         * Where the stream's position was when it was first passed to the token function.
         */
    public double start;
    /**
         * The current line's content.
         */
    public String string;
    /**
         * Number of spaces per tab character.
         */
    public double tabSize;
    /**
         * Returns true only if the stream is at the end of the line.
         */
    native public Boolean eol();
    /**
         * Returns true only if the stream is at the start of the line.
         */
    native public Boolean sol();
    /**
         * Returns the next character in the stream without advancing it. Will return an null at the end of the line.
         */
    native public String peek();
    /**
         * Returns the next character in the stream and advances it. Also returns null when no more characters are available.
         */
    native public String next();
    /**
         * match can be a character, a regular expression, or a function that takes a character and returns a boolean.
         * If the next character in the stream 'matches' the given argument, it is consumed and returned.
         * Otherwise, undefined is returned.
         */
    native public String eat(String match);
    native public String eat(RegExp match);
    native public String eat(java.util.function.Function<String,Boolean> match);
    /**
         * Repeatedly calls eat with the given argument, until it fails. Returns true if any characters were eaten.
         */
    native public Boolean eatWhile(String match);
    native public Boolean eatWhile(RegExp match);
    native public Boolean eatWhile(java.util.function.Function<String,Boolean> match);
    /**
         * Shortcut for eatWhile when matching white-space.
         */
    native public Boolean eatSpace();
    /**
         * Moves the position to the end of the line.
         */
    native public void skipToEnd();
    /**
         * Skips to the next occurrence of the given character, if found on the current line (doesn't advance the stream if
         * the character does not occur on the line).
         *
         * Returns true if the character was found.
         */
    native public Boolean skipTo(String ch);
    /**
         * Act like a multi-character eat - if consume is true or not given - or a look-ahead that doesn't update the stream
         * position - if it is false. pattern can be either a string or a regular expression starting with ^. When it is a
         * string, caseFold can be set to true to make the match case-insensitive. When successfully matching a regular
         * expression, the returned value will be the array returned by match, in case you need to extract matched groups.
         */
    native public Boolean match(String pattern, Boolean consume, Boolean caseFold);
    native public String[] match(RegExp pattern, Boolean consume);
    /**
         * Backs up the stream n characters. Backing it up further than the start of the current token will cause things to
         * break, so be careful.
         */
    native public void backUp(double n);
    /**
         * Returns the column (taking into account tabs) at which the current token starts.
         */
    native public double column();
    /**
         * Tells you how far the current line has been indented, in spaces. Corrects for tab characters.
         */
    native public double indentation();
    /**
         * Get the string between the start of the current token and the current stream position.
         */
    native public String current();
    /**
         * Act like a multi-character eat - if consume is true or not given - or a look-ahead that doesn't update the stream
         * position - if it is false. pattern can be either a string or a regular expression starting with ^. When it is a
         * string, caseFold can be set to true to make the match case-insensitive. When successfully matching a regular
         * expression, the returned value will be the array returned by match, in case you need to extract matched groups.
         */
    native public Boolean match(String pattern, Boolean consume);
    /**
         * Act like a multi-character eat - if consume is true or not given - or a look-ahead that doesn't update the stream
         * position - if it is false. pattern can be either a string or a regular expression starting with ^. When it is a
         * string, caseFold can be set to true to make the match case-insensitive. When successfully matching a regular
         * expression, the returned value will be the array returned by match, in case you need to extract matched groups.
         */
    native public Boolean match(String pattern);
    native public String[] match(RegExp pattern);
}

