package def.codemirror.codemirror;
import def.js.Array;
import def.dom.HTMLElement;
public class Doc extends def.js.Object {
    /** Get the current editor content. You can pass it an optional argument to specify the string to be used to separate lines (defaults to "\n"). */
    native public String getValue(String seperator);
    /** Set the editor content. */
    native public void setValue(String content);
    /** Get the text between the given points in the editor, which should be {line, ch} objects.
        An optional third argument can be given to indicate the line separator string to use (defaults to "\n"). */
    native public String getRange(Position from, def.codemirror.codemirror.Position to, String seperator);
    /** Replace the part of the document between from and to with the given string.
        from and to must be {line, ch} objects. to can be left off to simply insert the string at position from. */
    native public void replaceRange(String replacement, def.codemirror.codemirror.Position from, def.codemirror.codemirror.Position to, String origin);
    /** Get the content of line n. */
    native public String getLine(double n);
    /** Set the content of line n. */
    native public void setLine(double n, String text);
    /** Remove the given line from the document. */
    native public void removeLine(double n);
    /** Get the number of lines in the editor. */
    native public double lineCount();
    /** Get the first line of the editor. This will usually be zero but for linked sub-views,
        or documents instantiated with a non-zero first line, it might return other values. */
    native public double firstLine();
    /** Get the last line of the editor. This will usually be lineCount() - 1, but for linked sub-views, it might return other values. */
    native public double lastLine();
    /** Fetches the line handle for the given line number. */
    native public def.codemirror.codemirror.LineHandle getLineHandle(double num);
    /** Given a line handle, returns the current position of that line (or null when it is no longer in the document). */
    native public Double getLineNumber(def.codemirror.codemirror.LineHandle handle);
    /** Iterate over the whole document, and call f for each line, passing the line handle.
        This is a faster way to visit a range of line handlers than calling getLineHandle for each of them.
        Note that line handles have a text property containing the line's content (as a string). */
    native public void eachLine(java.util.function.Consumer<def.codemirror.codemirror.LineHandle> f);
    /** Iterate over the range from start up to (not including) end, and call f for each line, passing the line handle.
        This is a faster way to visit a range of line handlers than calling getLineHandle for each of them.
        Note that line handles have a text property containing the line's content (as a string). */
    native public void eachLine(double start, double end, java.util.function.Consumer<def.codemirror.codemirror.LineHandle> f);
    /** Set the editor content as 'clean', a flag that it will retain until it is edited, and which will be set again
        when such an edit is undone again. Useful to track whether the content needs to be saved. This function is deprecated
        in favor of changeGeneration, which allows multiple subsystems to track different notions of cleanness without interfering.*/
    native public void markClean();
    /** Returns a number that can later be passed to isClean to test whether any edits were made (and not undone) in the
        meantime. If closeEvent is true, the current history event will be ‘closed’, meaning it can't be combined with further
        changes (rapid typing or deleting events are typically combined).*/
    native public double changeGeneration(Boolean closeEvent);
    /** Returns whether the document is currently clean — not modified since initialization or the last call to markClean if
        no argument is passed, or since the matching call to changeGeneration if a generation value is given. */
    native public Boolean isClean(double generation);
    /** Get the currently selected code. */
    native public String getSelection();
    /** Returns an array containing a string for each selection, representing the content of the selections. */
    native public Array<String> getSelections(String lineSep);
    /** Replace the selection with the given string. By default, the new selection will span the inserted text.
        The optional collapse argument can be used to change this -- passing "start" or "end" will collapse the selection to the start or end of the inserted text. */
    native public void replaceSelection(String replacement, String collapse);
    /** start is a an optional string indicating which end of the selection to return.
        It may be "start" , "end" , "head"(the side of the selection that moves when you press shift + arrow),
        or "anchor"(the fixed side of the selection).Omitting the argument is the same as passing "head".A { line , ch } object will be returned. */
    native public def.codemirror.codemirror.Position getCursor(String start);
    /** Retrieves a list of all current selections. These will always be sorted, and never overlap (overlapping selections are merged).
        Each object in the array contains anchor and head properties referring to {line, ch} objects. */
    native public ListSelections[] listSelections();
    /** Return true if any text is selected. */
    native public Boolean somethingSelected();
    /** Set the cursor position. You can either pass a single {line, ch} object, or the line and the character as two separate parameters.
        Will replace all selections with a single, empty selection at the given position.
        The supported options are the same as for setSelection */
    native public void setCursor(def.codemirror.codemirror.Position pos, double ch, Options options);
    /** Set a single selection range. anchor and head should be {line, ch} objects. head defaults to anchor when not given. */
    native public void setSelection(def.codemirror.codemirror.Position anchor, def.codemirror.codemirror.Position head, Options options);
    /** Sets a new set of selections. There must be at least one selection in the given array. When primary is a
        number, it determines which selection is the primary one. When it is not given, the primary index is taken from
        the previous selection, or set to the last range if the previous selection had less ranges than the new one.
        Supports the same options as setSelection. */
    native public void setSelections(Array<Ranges> ranges, double primary, Options options);
    /** Similar to setSelection , but will, if shift is held or the extending flag is set,
        move the head of the selection while leaving the anchor at its current place.
        pos2 is optional , and can be passed to ensure a region (for example a word or paragraph) will end up selected
        (in addition to whatever lies between that region and the current anchor). */
    native public void extendSelection(def.codemirror.codemirror.Position from, def.codemirror.codemirror.Position to);
    /** Sets or clears the 'extending' flag , which acts similar to the shift key,
        in that it will cause cursor movement and calls to extendSelection to leave the selection anchor in place. */
    native public void setExtending(Boolean value);
    /** Retrieve the editor associated with a document. May return null. */
    native public def.codemirror.codemirror.Editor getEditor();
    /** Create an identical copy of the given doc. When copyHistory is true , the history will also be copied.Can not be called directly on an editor. */
    native public def.codemirror.codemirror.Doc copy(Boolean copyHistory);
    /** Create a new document that's linked to the target document. Linked documents will stay in sync (changes to one are also applied to the other) until unlinked. */
    native public def.codemirror.codemirror.Doc linkedDoc(OptionsData options);
    /** Break the link between two documents. After calling this , changes will no longer propagate between the documents,
        and, if they had a shared history, the history will become separate. */
    native public void unlinkDoc(def.codemirror.codemirror.Doc doc);
    /** Will call the given function for all documents linked to the target document. It will be passed two arguments,
        the linked document and a boolean indicating whether that document shares history with the target. */
    native public void iterLinkedDocs(java.util.function.BiConsumer<def.codemirror.codemirror.Doc,Boolean> fn);
    /** Undo one edit (if any undo events are stored). */
    native public void undo();
    /** Redo one undone edit. */
    native public void redo();
    /** Returns an object with {undo, redo } properties , both of which hold integers , indicating the amount of stored undo and redo operations. */
    native public HistorySize historySize();
    /** Clears the editor's undo history. */
    native public void clearHistory();
    /** Get a(JSON - serializeable) representation of the undo history. */
    native public Object getHistory();
    /** Replace the editor's undo history with the one provided, which must be a value as returned by getHistory.
        Note that this will have entirely undefined results if the editor content isn't also the same as it was when getHistory was called. */
    native public void setHistory(Object history);
    /** Can be used to mark a range of text with a specific CSS class name. from and to should be { line , ch } objects. */
    native public TextMarker markText(def.codemirror.codemirror.Position from, def.codemirror.codemirror.Position to, def.codemirror.codemirror.TextMarkerOptions options);
    /** Inserts a bookmark, a handle that follows the text around it as it is being edited, at the given position.
        A bookmark has two methods find() and clear(). The first returns the current position of the bookmark, if it is still in the document,
        and the second explicitly removes the bookmark. */
    native public def.codemirror.codemirror.TextMarker setBookmark(def.codemirror.codemirror.Position pos, OptionsDto options);
    /** Returns an array of all the bookmarks and marked ranges found between the given positions. */
    native public TextMarker[] findMarks(def.codemirror.codemirror.Position from, def.codemirror.codemirror.Position to);
    /** Returns an array of all the bookmarks and marked ranges present at the given position. */
    native public TextMarker[] findMarksAt(def.codemirror.codemirror.Position pos);
    /** Returns an array containing all marked ranges in the document. */
    native public def.codemirror.codemirror.TextMarker[] getAllMarks();
    /** Adds a line widget, an element shown below a line, spanning the whole of the editor's width, and moving the lines below it downwards.
        line should be either an integer or a line handle, and node should be a DOM node, which will be displayed below the given line.
        options, when given, should be an object that configures the behavior of the widget.
        Note that the widget node will become a descendant of nodes with CodeMirror-specific CSS classes, and those classes might in some cases affect it. */
    native public def.codemirror.codemirror.LineWidget addLineWidget(Object line, HTMLElement node, def.codemirror.codemirror.LineWidgetOptions options);
    /** Gets the mode object for the editor. Note that this is distinct from getOption("mode"), which gives you the mode specification,
        rather than the resolved, instantiated mode object. */
    native public Object getMode();
    /** Calculates and returns a { line , ch } object for a zero-based index whose value is relative to the start of the editor's text.
        If the index is out of range of the text then the returned object is clipped to start or end of the text respectively. */
    native public def.codemirror.codemirror.Position posFromIndex(double index);
    /** The reverse of posFromIndex. */
    native public double indexFromPos(def.codemirror.codemirror.Position object);
    /** Expose the state object, so that the Doc.state.completionActive property is reachable*/
    public Object state;
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class ListSelections extends def.js.Object {
        public def.codemirror.codemirror.Position anchor;
        public def.codemirror.codemirror.Position head;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Options extends def.js.Object {
        @jsweet.lang.Optional
        public double bias;
        @jsweet.lang.Optional
        public String origin;
        @jsweet.lang.Optional
        public Boolean scroll;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Ranges extends def.js.Object {
        public def.codemirror.codemirror.Position anchor;
        public def.codemirror.codemirror.Position head;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class OptionsData extends def.js.Object {
        /** When turned on, the linked copy will share an undo history with the original.
            Thus, something done in one of the two can be undone in the other, and vice versa. */
        @jsweet.lang.Optional
        public Boolean sharedHist;
        @jsweet.lang.Optional
        public double from;
        /** Can be given to make the new document a subview of the original. Subviews only show a given range of lines.
            Note that line coordinates inside the subview will be consistent with those of the parent,
            so that for example a subview starting at line 10 will refer to its first line as line 10, not 0. */
        @jsweet.lang.Optional
        public double to;
        /** By default, the new document inherits the mode of the parent. This option can be set to a mode spec to give it a different mode. */
        public Object mode;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class HistorySize extends def.js.Object {
        public double undo;
        public double redo;
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class OptionsDto extends def.js.Object {
        /** Can be used to display a DOM node at the current location of the bookmark (analogous to the replacedWith option to markText). */
        @jsweet.lang.Optional
        public HTMLElement widget;
        /** By default, text typed when the cursor is on top of the bookmark will end up to the right of the bookmark.
            Set this option to true to make it go to the left instead. */
        @jsweet.lang.Optional
        public Boolean insertLeft;
    }
    public Doc(String text, Object mode, double firstLineNumber, String lineSep){}
    native public static Doc applyStatic(String text, Object mode, double firstLineNumber, String lineSep);
    /** Get the current editor content. You can pass it an optional argument to specify the string to be used to separate lines (defaults to "\n"). */
    native public String getValue();
    /** Get the text between the given points in the editor, which should be {line, ch} objects.
        An optional third argument can be given to indicate the line separator string to use (defaults to "\n"). */
    native public String getRange(Position from, def.codemirror.codemirror.Position to);
    /** Replace the part of the document between from and to with the given string.
        from and to must be {line, ch} objects. to can be left off to simply insert the string at position from. */
    native public void replaceRange(String replacement, def.codemirror.codemirror.Position from, def.codemirror.codemirror.Position to);
    /** Replace the part of the document between from and to with the given string.
        from and to must be {line, ch} objects. to can be left off to simply insert the string at position from. */
    native public void replaceRange(String replacement, def.codemirror.codemirror.Position from);
    /** Returns a number that can later be passed to isClean to test whether any edits were made (and not undone) in the
        meantime. If closeEvent is true, the current history event will be ‘closed’, meaning it can't be combined with further
        changes (rapid typing or deleting events are typically combined).*/
    native public double changeGeneration();
    /** Returns whether the document is currently clean — not modified since initialization or the last call to markClean if
        no argument is passed, or since the matching call to changeGeneration if a generation value is given. */
    native public Boolean isClean();
    /** Returns an array containing a string for each selection, representing the content of the selections. */
    native public Array<String> getSelections();
    /** Replace the selection with the given string. By default, the new selection will span the inserted text.
        The optional collapse argument can be used to change this -- passing "start" or "end" will collapse the selection to the start or end of the inserted text. */
    native public void replaceSelection(String replacement);
    /** start is a an optional string indicating which end of the selection to return.
        It may be "start" , "end" , "head"(the side of the selection that moves when you press shift + arrow),
        or "anchor"(the fixed side of the selection).Omitting the argument is the same as passing "head".A { line , ch } object will be returned. */
    native public def.codemirror.codemirror.Position getCursor();
    /** Set the cursor position. You can either pass a single {line, ch} object, or the line and the character as two separate parameters.
        Will replace all selections with a single, empty selection at the given position.
        The supported options are the same as for setSelection */
    native public void setCursor(def.codemirror.codemirror.Position pos, double ch);
    /** Set the cursor position. You can either pass a single {line, ch} object, or the line and the character as two separate parameters.
        Will replace all selections with a single, empty selection at the given position.
        The supported options are the same as for setSelection */
    native public void setCursor(def.codemirror.codemirror.Position pos);
    /** Set a single selection range. anchor and head should be {line, ch} objects. head defaults to anchor when not given. */
    native public void setSelection(def.codemirror.codemirror.Position anchor, def.codemirror.codemirror.Position head);
    /** Sets a new set of selections. There must be at least one selection in the given array. When primary is a
        number, it determines which selection is the primary one. When it is not given, the primary index is taken from
        the previous selection, or set to the last range if the previous selection had less ranges than the new one.
        Supports the same options as setSelection. */
    native public void setSelections(Array<Ranges> ranges, double primary);
    /** Sets a new set of selections. There must be at least one selection in the given array. When primary is a
        number, it determines which selection is the primary one. When it is not given, the primary index is taken from
        the previous selection, or set to the last range if the previous selection had less ranges than the new one.
        Supports the same options as setSelection. */
    native public void setSelections(Array<Ranges> ranges);
    /** Similar to setSelection , but will, if shift is held or the extending flag is set,
        move the head of the selection while leaving the anchor at its current place.
        pos2 is optional , and can be passed to ensure a region (for example a word or paragraph) will end up selected
        (in addition to whatever lies between that region and the current anchor). */
    native public void extendSelection(def.codemirror.codemirror.Position from);
    /** Can be used to mark a range of text with a specific CSS class name. from and to should be { line , ch } objects. */
    native public TextMarker markText(def.codemirror.codemirror.Position from, def.codemirror.codemirror.Position to);
    /** Inserts a bookmark, a handle that follows the text around it as it is being edited, at the given position.
        A bookmark has two methods find() and clear(). The first returns the current position of the bookmark, if it is still in the document,
        and the second explicitly removes the bookmark. */
    native public def.codemirror.codemirror.TextMarker setBookmark(def.codemirror.codemirror.Position pos);
    /** Adds a line widget, an element shown below a line, spanning the whole of the editor's width, and moving the lines below it downwards.
        line should be either an integer or a line handle, and node should be a DOM node, which will be displayed below the given line.
        options, when given, should be an object that configures the behavior of the widget.
        Note that the widget node will become a descendant of nodes with CodeMirror-specific CSS classes, and those classes might in some cases affect it. */
    native public def.codemirror.codemirror.LineWidget addLineWidget(Object line, HTMLElement node);
    public Doc(String text, Object mode, double firstLineNumber){}
    public Doc(String text, Object mode){}
    public Doc(String text){}
    native public static Doc applyStatic(String text, Object mode, double firstLineNumber);
    native public static Doc applyStatic(String text, Object mode);
    native public static Doc applyStatic(String text);
    /** Set the cursor position. You can either pass a single {line, ch} object, or the line and the character as two separate parameters.
        Will replace all selections with a single, empty selection at the given position.
        The supported options are the same as for setSelection */
    native public void setCursor(double pos, double ch, Options options);
    /** Set the cursor position. You can either pass a single {line, ch} object, or the line and the character as two separate parameters.
        Will replace all selections with a single, empty selection at the given position.
        The supported options are the same as for setSelection */
    native public void setCursor(double pos, double ch);
    /** Set the cursor position. You can either pass a single {line, ch} object, or the line and the character as two separate parameters.
        Will replace all selections with a single, empty selection at the given position.
        The supported options are the same as for setSelection */
    native public void setCursor(double pos);
    /** Sets a new set of selections. There must be at least one selection in the given array. When primary is a
        number, it determines which selection is the primary one. When it is not given, the primary index is taken from
        the previous selection, or set to the last range if the previous selection had less ranges than the new one.
        Supports the same options as setSelection. */
    native public void setSelections(Ranges[] ranges, double primary, Options options);
    /** Sets a new set of selections. There must be at least one selection in the given array. When primary is a
        number, it determines which selection is the primary one. When it is not given, the primary index is taken from
        the previous selection, or set to the last range if the previous selection had less ranges than the new one.
        Supports the same options as setSelection. */
    native public void setSelections(Ranges[] ranges, double primary);
    /** Sets a new set of selections. There must be at least one selection in the given array. When primary is a
        number, it determines which selection is the primary one. When it is not given, the primary index is taken from
        the previous selection, or set to the last range if the previous selection had less ranges than the new one.
        Supports the same options as setSelection. */
    native public void setSelections(Ranges[] ranges);
    protected Doc(){}
}

