/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
declare namespace CodeMirror {
    /**
     * An annotation contains a description of a lint error, detailing the location of the error within the code, the severity of the error,
     * and an explaination as to why the error was thrown.
     * @class
     * @extends Object
     */
    export interface Annotation {
        from : CodeMirror.Position;

        message? : string;

        severity? : string;

        to? : CodeMirror.Position;
    }
}
declare namespace CodeMirror {
    /**
     * A function that calls the updateLintingCallback with any errors found during the linting process.
     * @class
     */
    export interface AsyncLinter {
        apply(content : string, updateLintingCallback : CodeMirror.UpdateLintingCallback, options : CodeMirror.LintStateOptions, codeMirror : CodeMirror.Editor);
    }
}
declare namespace CodeMirror {
    export class Doc {
        /**
         * Get the current editor content. You can pass it an optional argument to specify the string to be used to separate lines (defaults to "\n").
         * @param {string} seperator
         * @return {string}
         */
        public getValue(seperator : string) : string;

        /**
         * Set the editor content.
         * @param {string} content
         */
        public setValue(content : string);

        /**
         * Get the text between the given points in the editor, which should be {line, ch} objects.
         * An optional third argument can be given to indicate the line separator string to use (defaults to "\n").
         * @param {*} from
         * @param {*} to
         * @param {string} seperator
         * @return {string}
         */
        public getRange(from : CodeMirror.Position, to : CodeMirror.Position, seperator : string) : string;

        /**
         * Replace the part of the document between from and to with the given string.
         * from and to must be {line, ch} objects. to can be left off to simply insert the string at position from.
         * @param {string} replacement
         * @param {*} from
         * @param {*} to
         * @param {string} origin
         */
        public replaceRange(replacement : string, from : CodeMirror.Position, to : CodeMirror.Position, origin : string);

        /**
         * Get the content of line n.
         * @param {number} n
         * @return {string}
         */
        public getLine(n : number) : string;

        /**
         * Set the content of line n.
         * @param {number} n
         * @param {string} text
         */
        public setLine(n : number, text : string);

        /**
         * Remove the given line from the document.
         * @param {number} n
         */
        public removeLine(n : number);

        /**
         * Get the number of lines in the editor.
         * @return {number}
         */
        public lineCount() : number;

        /**
         * Get the first line of the editor. This will usually be zero but for linked sub-views,
         * or documents instantiated with a non-zero first line, it might return other values.
         * @return {number}
         */
        public firstLine() : number;

        /**
         * Get the last line of the editor. This will usually be lineCount() - 1, but for linked sub-views, it might return other values.
         * @return {number}
         */
        public lastLine() : number;

        /**
         * Fetches the line handle for the given line number.
         * @param {number} num
         * @return {*}
         */
        public getLineHandle(num : number) : CodeMirror.LineHandle;

        /**
         * Given a line handle, returns the current position of that line (or null when it is no longer in the document).
         * @param {*} handle
         * @return {number}
         */
        public getLineNumber(handle : CodeMirror.LineHandle) : number;

        /**
         * Iterate over the whole document, and call f for each line, passing the line handle.
         * This is a faster way to visit a range of line handlers than calling getLineHandle for each of them.
         * Note that line handles have a text property containing the line's content (as a string).
         * @param {*} f
         */
        public eachLine(f : (p1: CodeMirror.LineHandle) => void);

        /**
         * Iterate over the range from start up to (not including) end, and call f for each line, passing the line handle.
         * This is a faster way to visit a range of line handlers than calling getLineHandle for each of them.
         * Note that line handles have a text property containing the line's content (as a string).
         * @param {number} start
         * @param {number} end
         * @param {*} f
         */
        public eachLine(start : number, end : number, f : (p1: CodeMirror.LineHandle) => void);

        /**
         * Set the editor content as 'clean', a flag that it will retain until it is edited, and which will be set again
         * when such an edit is undone again. Useful to track whether the content needs to be saved. This function is deprecated
         * in favor of changeGeneration, which allows multiple subsystems to track different notions of cleanness without interfering.
         */
        public markClean();

        /**
         * Returns a number that can later be passed to isClean to test whether any edits were made (and not undone) in the
         * meantime. If closeEvent is true, the current history event will be ‘closed’, meaning it can't be combined with further
         * changes (rapid typing or deleting events are typically combined).
         * @param {boolean} closeEvent
         * @return {number}
         */
        public changeGeneration(closeEvent : boolean) : number;

        /**
         * Returns whether the document is currently clean — not modified since initialization or the last call to markClean if
         * no argument is passed, or since the matching call to changeGeneration if a generation value is given.
         * @param {number} generation
         * @return {boolean}
         */
        public isClean(generation : number) : boolean;

        /**
         * Get the currently selected code.
         * @return {string}
         */
        public getSelection() : string;

        /**
         * Returns an array containing a string for each selection, representing the content of the selections.
         * @param {string} lineSep
         * @return {string[]}
         */
        public getSelections(lineSep : string) : Array<string>;

        /**
         * Replace the selection with the given string. By default, the new selection will span the inserted text.
         * The optional collapse argument can be used to change this -- passing "start" or "end" will collapse the selection to the start or end of the inserted text.
         * @param {string} replacement
         * @param {string} collapse
         */
        public replaceSelection(replacement : string, collapse : string);

        /**
         * start is a an optional string indicating which end of the selection to return.
         * It may be "start" , "end" , "head"(the side of the selection that moves when you press shift + arrow),
         * or "anchor"(the fixed side of the selection).Omitting the argument is the same as passing "head".A { line , ch } object will be returned.
         * @param {string} start
         * @return {*}
         */
        public getCursor(start : string) : CodeMirror.Position;

        /**
         * Retrieves a list of all current selections. These will always be sorted, and never overlap (overlapping selections are merged).
         * Each object in the array contains anchor and head properties referring to {line, ch} objects.
         * @return {Array}
         */
        public listSelections() : any[];

        /**
         * Return true if any text is selected.
         * @return {boolean}
         */
        public somethingSelected() : boolean;

        /**
         * Set the cursor position. You can either pass a single {line, ch} object, or the line and the character as two separate parameters.
         * Will replace all selections with a single, empty selection at the given position.
         * The supported options are the same as for setSelection
         * @param {*} pos
         * @param {number} ch
         * @param {CodeMirror.Doc.Options} options
         */
        public setCursor(pos : CodeMirror.Position, ch : number, options : any);

        /**
         * Set a single selection range. anchor and head should be {line, ch} objects. head defaults to anchor when not given.
         * @param {*} anchor
         * @param {*} head
         * @param {CodeMirror.Doc.Options} options
         */
        public setSelection(anchor : CodeMirror.Position, head : CodeMirror.Position, options : any);

        /**
         * Sets a new set of selections. There must be at least one selection in the given array. When primary is a
         * number, it determines which selection is the primary one. When it is not given, the primary index is taken from
         * the previous selection, or set to the last range if the previous selection had less ranges than the new one.
         * Supports the same options as setSelection.
         * @param {CodeMirror.Doc.Ranges[]} ranges
         * @param {number} primary
         * @param {CodeMirror.Doc.Options} options
         */
        public setSelections(ranges : Array<any>, primary : number, options : any);

        /**
         * Similar to setSelection , but will, if shift is held or the extending flag is set,
         * move the head of the selection while leaving the anchor at its current place.
         * pos2 is optional , and can be passed to ensure a region (for example a word or paragraph) will end up selected
         * (in addition to whatever lies between that region and the current anchor).
         * @param {*} from
         * @param {*} to
         */
        public extendSelection(from : CodeMirror.Position, to : CodeMirror.Position);

        /**
         * Sets or clears the 'extending' flag , which acts similar to the shift key,
         * in that it will cause cursor movement and calls to extendSelection to leave the selection anchor in place.
         * @param {boolean} value
         */
        public setExtending(value : boolean);

        /**
         * Retrieve the editor associated with a document. May return null.
         * @return {*}
         */
        public getEditor() : CodeMirror.Editor;

        /**
         * Create an identical copy of the given doc. When copyHistory is true , the history will also be copied.Can not be called directly on an editor.
         * @param {boolean} copyHistory
         * @return {CodeMirror.Doc}
         */
        public copy(copyHistory : boolean) : CodeMirror.Doc;

        /**
         * Create a new document that's linked to the target document. Linked documents will stay in sync (changes to one are also applied to the other) until unlinked.
         * @param {CodeMirror.Doc.OptionsData} options
         * @return {CodeMirror.Doc}
         */
        public linkedDoc(options : any) : CodeMirror.Doc;

        /**
         * Break the link between two documents. After calling this , changes will no longer propagate between the documents,
         * and, if they had a shared history, the history will become separate.
         * @param {CodeMirror.Doc} doc
         */
        public unlinkDoc(doc : CodeMirror.Doc);

        /**
         * Will call the given function for all documents linked to the target document. It will be passed two arguments,
         * the linked document and a boolean indicating whether that document shares history with the target.
         * @param {*} fn
         */
        public iterLinkedDocs(fn : (p1: CodeMirror.Doc, p2: boolean) => void);

        /**
         * Undo one edit (if any undo events are stored).
         */
        public undo();

        /**
         * Redo one undone edit.
         */
        public redo();

        /**
         * Returns an object with {undo, redo } properties , both of which hold integers , indicating the amount of stored undo and redo operations.
         * @return {CodeMirror.Doc.HistorySize}
         */
        public historySize() : any;

        /**
         * Clears the editor's undo history.
         */
        public clearHistory();

        /**
         * Get a(JSON - serializeable) representation of the undo history.
         * @return {*}
         */
        public getHistory() : any;

        /**
         * Replace the editor's undo history with the one provided, which must be a value as returned by getHistory.
         * Note that this will have entirely undefined results if the editor content isn't also the same as it was when getHistory was called.
         * @param {*} history
         */
        public setHistory(history : any);

        /**
         * Can be used to mark a range of text with a specific CSS class name. from and to should be { line , ch } objects.
         * @param {*} from
         * @param {*} to
         * @param {*} options
         * @return {*}
         */
        public markText(from : CodeMirror.Position, to : CodeMirror.Position, options : CodeMirror.TextMarkerOptions) : CodeMirror.TextMarker;

        /**
         * Inserts a bookmark, a handle that follows the text around it as it is being edited, at the given position.
         * A bookmark has two methods find() and clear(). The first returns the current position of the bookmark, if it is still in the document,
         * and the second explicitly removes the bookmark.
         * @param {*} pos
         * @param {CodeMirror.Doc.OptionsDto} options
         * @return {*}
         */
        public setBookmark(pos : CodeMirror.Position, options : any) : CodeMirror.TextMarker;

        /**
         * Returns an array of all the bookmarks and marked ranges found between the given positions.
         * @param {*} from
         * @param {*} to
         * @return {Array}
         */
        public findMarks(from : CodeMirror.Position, to : CodeMirror.Position) : CodeMirror.TextMarker[];

        /**
         * Returns an array of all the bookmarks and marked ranges present at the given position.
         * @param {*} pos
         * @return {Array}
         */
        public findMarksAt(pos : CodeMirror.Position) : CodeMirror.TextMarker[];

        /**
         * Returns an array containing all marked ranges in the document.
         * @return {Array}
         */
        public getAllMarks() : CodeMirror.TextMarker[];

        /**
         * Adds a line widget, an element shown below a line, spanning the whole of the editor's width, and moving the lines below it downwards.
         * line should be either an integer or a line handle, and node should be a DOM node, which will be displayed below the given line.
         * options, when given, should be an object that configures the behavior of the widget.
         * Note that the widget node will become a descendant of nodes with CodeMirror-specific CSS classes, and those classes might in some cases affect it.
         * @param {*} line
         * @param {HTMLElement} node
         * @param {*} options
         * @return {*}
         */
        public addLineWidget(line : any, node : HTMLElement, options : CodeMirror.LineWidgetOptions) : CodeMirror.LineWidget;

        /**
         * Gets the mode object for the editor. Note that this is distinct from getOption("mode"), which gives you the mode specification,
         * rather than the resolved, instantiated mode object.
         * @return {*}
         */
        public getMode() : any;

        /**
         * Calculates and returns a { line , ch } object for a zero-based index whose value is relative to the start of the editor's text.
         * If the index is out of range of the text then the returned object is clipped to start or end of the text respectively.
         * @param {number} index
         * @return {*}
         */
        public posFromIndex(index : number) : CodeMirror.Position;

        /**
         * The reverse of posFromIndex.
         * @param {*} object
         * @return {number}
         */
        public indexFromPos(object : CodeMirror.Position) : number;

        /**
         * Expose the state object, so that the Doc.state.completionActive property is reachable
         */
        public state : any;

        public constructor(text : string, mode : any, firstLineNumber : number, lineSep : string);

        public static applyStatic(text : string, mode : any, firstLineNumber : number, lineSep : string) : Doc;

        /**
         * Get the current editor content. You can pass it an optional argument to specify the string to be used to separate lines (defaults to "\n").
         * @return {string}
         */
        public getValue() : string;

        /**
         * Get the text between the given points in the editor, which should be {line, ch} objects.
         * An optional third argument can be given to indicate the line separator string to use (defaults to "\n").
         * @param {*} from
         * @param {*} to
         * @return {string}
         */
        public getRange(from : CodeMirror.Position, to : CodeMirror.Position) : string;

        /**
         * Replace the part of the document between from and to with the given string.
         * from and to must be {line, ch} objects. to can be left off to simply insert the string at position from.
         * @param {string} replacement
         * @param {*} from
         * @param {*} to
         */
        public replaceRange(replacement : string, from : CodeMirror.Position, to : CodeMirror.Position);

        /**
         * Replace the part of the document between from and to with the given string.
         * from and to must be {line, ch} objects. to can be left off to simply insert the string at position from.
         * @param {string} replacement
         * @param {*} from
         */
        public replaceRange(replacement : string, from : CodeMirror.Position);

        /**
         * Returns a number that can later be passed to isClean to test whether any edits were made (and not undone) in the
         * meantime. If closeEvent is true, the current history event will be ‘closed’, meaning it can't be combined with further
         * changes (rapid typing or deleting events are typically combined).
         * @return {number}
         */
        public changeGeneration() : number;

        /**
         * Returns whether the document is currently clean — not modified since initialization or the last call to markClean if
         * no argument is passed, or since the matching call to changeGeneration if a generation value is given.
         * @return {boolean}
         */
        public isClean() : boolean;

        /**
         * Returns an array containing a string for each selection, representing the content of the selections.
         * @return {string[]}
         */
        public getSelections() : Array<string>;

        /**
         * Replace the selection with the given string. By default, the new selection will span the inserted text.
         * The optional collapse argument can be used to change this -- passing "start" or "end" will collapse the selection to the start or end of the inserted text.
         * @param {string} replacement
         */
        public replaceSelection(replacement : string);

        /**
         * start is a an optional string indicating which end of the selection to return.
         * It may be "start" , "end" , "head"(the side of the selection that moves when you press shift + arrow),
         * or "anchor"(the fixed side of the selection).Omitting the argument is the same as passing "head".A { line , ch } object will be returned.
         * @return {*}
         */
        public getCursor() : CodeMirror.Position;

        /**
         * Set the cursor position. You can either pass a single {line, ch} object, or the line and the character as two separate parameters.
         * Will replace all selections with a single, empty selection at the given position.
         * The supported options are the same as for setSelection
         * @param {*} pos
         * @param {number} ch
         */
        public setCursor(pos : CodeMirror.Position, ch : number);

        /**
         * Set the cursor position. You can either pass a single {line, ch} object, or the line and the character as two separate parameters.
         * Will replace all selections with a single, empty selection at the given position.
         * The supported options are the same as for setSelection
         * @param {*} pos
         */
        public setCursor(pos : CodeMirror.Position);

        /**
         * Set a single selection range. anchor and head should be {line, ch} objects. head defaults to anchor when not given.
         * @param {*} anchor
         * @param {*} head
         */
        public setSelection(anchor : CodeMirror.Position, head : CodeMirror.Position);

        /**
         * Sets a new set of selections. There must be at least one selection in the given array. When primary is a
         * number, it determines which selection is the primary one. When it is not given, the primary index is taken from
         * the previous selection, or set to the last range if the previous selection had less ranges than the new one.
         * Supports the same options as setSelection.
         * @param {CodeMirror.Doc.Ranges[]} ranges
         * @param {number} primary
         */
        public setSelections(ranges : Array<any>, primary : number);

        /**
         * Sets a new set of selections. There must be at least one selection in the given array. When primary is a
         * number, it determines which selection is the primary one. When it is not given, the primary index is taken from
         * the previous selection, or set to the last range if the previous selection had less ranges than the new one.
         * Supports the same options as setSelection.
         * @param {CodeMirror.Doc.Ranges[]} ranges
         */
        public setSelections(ranges : Array<any>);

        /**
         * Similar to setSelection , but will, if shift is held or the extending flag is set,
         * move the head of the selection while leaving the anchor at its current place.
         * pos2 is optional , and can be passed to ensure a region (for example a word or paragraph) will end up selected
         * (in addition to whatever lies between that region and the current anchor).
         * @param {*} from
         */
        public extendSelection(from : CodeMirror.Position);

        /**
         * Can be used to mark a range of text with a specific CSS class name. from and to should be { line , ch } objects.
         * @param {*} from
         * @param {*} to
         * @return {*}
         */
        public markText(from : CodeMirror.Position, to : CodeMirror.Position) : CodeMirror.TextMarker;

        /**
         * Inserts a bookmark, a handle that follows the text around it as it is being edited, at the given position.
         * A bookmark has two methods find() and clear(). The first returns the current position of the bookmark, if it is still in the document,
         * and the second explicitly removes the bookmark.
         * @param {*} pos
         * @return {*}
         */
        public setBookmark(pos : CodeMirror.Position) : CodeMirror.TextMarker;

        /**
         * Adds a line widget, an element shown below a line, spanning the whole of the editor's width, and moving the lines below it downwards.
         * line should be either an integer or a line handle, and node should be a DOM node, which will be displayed below the given line.
         * options, when given, should be an object that configures the behavior of the widget.
         * Note that the widget node will become a descendant of nodes with CodeMirror-specific CSS classes, and those classes might in some cases affect it.
         * @param {*} line
         * @param {HTMLElement} node
         * @return {*}
         */
        public addLineWidget(line : any, node : HTMLElement) : CodeMirror.LineWidget;

        public constructor(text : string, mode : any, firstLineNumber : number);

        public constructor(text : string, mode : any);

        public static applyStatic(text : string, mode : any, firstLineNumber : number) : Doc;

        public static applyStatic(text : string, mode : any) : Doc;

        public static applyStatic(text : string) : Doc;

        /**
         * Set the cursor position. You can either pass a single {line, ch} object, or the line and the character as two separate parameters.
         * Will replace all selections with a single, empty selection at the given position.
         * The supported options are the same as for setSelection
         * @param {number} pos
         * @param {number} ch
         * @param {CodeMirror.Doc.Options} options
         */
        public setCursor(pos : number, ch : number, options : any);

        /**
         * Set the cursor position. You can either pass a single {line, ch} object, or the line and the character as two separate parameters.
         * Will replace all selections with a single, empty selection at the given position.
         * The supported options are the same as for setSelection
         * @param {number} pos
         * @param {number} ch
         */
        public setCursor(pos : number, ch : number);

        /**
         * Set the cursor position. You can either pass a single {line, ch} object, or the line and the character as two separate parameters.
         * Will replace all selections with a single, empty selection at the given position.
         * The supported options are the same as for setSelection
         * @param {number} pos
         */
        public setCursor(pos : number);

        /**
         * Sets a new set of selections. There must be at least one selection in the given array. When primary is a
         * number, it determines which selection is the primary one. When it is not given, the primary index is taken from
         * the previous selection, or set to the last range if the previous selection had less ranges than the new one.
         * Supports the same options as setSelection.
         * @param {Array} ranges
         * @param {number} primary
         * @param {CodeMirror.Doc.Options} options
         */
        public setSelections(ranges : any[], primary : number, options : any);

        /**
         * Sets a new set of selections. There must be at least one selection in the given array. When primary is a
         * number, it determines which selection is the primary one. When it is not given, the primary index is taken from
         * the previous selection, or set to the last range if the previous selection had less ranges than the new one.
         * Supports the same options as setSelection.
         * @param {Array} ranges
         * @param {number} primary
         */
        public setSelections(ranges : any[], primary : number);

        /**
         * Sets a new set of selections. There must be at least one selection in the given array. When primary is a
         * number, it determines which selection is the primary one. When it is not given, the primary index is taken from
         * the previous selection, or set to the last range if the previous selection had less ranges than the new one.
         * Supports the same options as setSelection.
         * @param {Array} ranges
         */
        public setSelections(ranges : any[]);
    }
}
declare namespace CodeMirror {
    export interface Editor {
        /**
         * Tells you whether the editor currently has focus.
         * @return {boolean}
         */
        hasFocus() : boolean;

        /**
         * Used to find the target position for horizontal cursor motion.start is a { line , ch } object,
         * amount an integer(may be negative), and unit one of the string "char", "column", or "word".
         * Will return a position that is produced by moving amount times the distance specified by unit.
         * When visually is true , motion in right - to - left text will be visual rather than logical.
         * When the motion was clipped by hitting the end or start of the document, the returned value will have a hitSide property set to true.
         * @param {*} start
         * @param {number} amount
         * @param {string} unit
         * @param {boolean} visually
         * @return {CodeMirror.Editor.FindPosH}
         */
        findPosH(start : CodeMirror.Position, amount : number, unit : string, visually : boolean) : any;

        /**
         * Similar to findPosH , but used for vertical motion.unit may be "line" or "page".
         * The other arguments and the returned value have the same interpretation as they have in findPosH.
         * @param {*} start
         * @param {number} amount
         * @param {string} unit
         * @return {CodeMirror.Editor.FindPosV}
         */
        findPosV(start : CodeMirror.Position, amount : number, unit : string) : any;

        /**
         * Returns the start and end of the 'word' (the stretch of letters, whitespace, or punctuation) at the given position.
         * @param {*} pos
         * @return {*}
         */
        findWordAt(pos : CodeMirror.Position) : CodeMirror.Range;

        /**
         * Change the configuration of the editor. option should the name of an option, and value should be a valid value for that option.
         * @param {string} option
         * @param {CodeMirror.Editor.Object} value
         */
        setOption(option : string, value : any);

        /**
         * Retrieves the current value of the given option for this editor instance.
         * @param {string} option
         * @return {CodeMirror.Editor.Object}
         */
        getOption(option : string) : any;

        /**
         * Attach an additional keymap to the editor.
         * This is mostly useful for add - ons that need to register some key handlers without trampling on the extraKeys option.
         * Maps added in this way have a higher precedence than the extraKeys and keyMap options, and between them,
         * the maps added earlier have a lower precedence than those added later, unless the bottom argument was passed,
         * in which case they end up below other keymaps added with this method.
         * @param {string} map
         * @param {boolean} bottom
         */
        addKeyMap(map : string, bottom : boolean);

        /**
         * Disable a keymap added with addKeyMap.Either pass in the keymap object itself , or a string,
         * which will be compared against the name property of the active keymaps.
         * @param {string} map
         */
        removeKeyMap(map : string);

        /**
         * Enable a highlighting overlay.This is a stateless mini - mode that can be used to add extra highlighting.
         * For example, the search add - on uses it to highlight the term that's currently being searched.
         * mode can be a mode spec or a mode object (an object with a token method). The options parameter is optional. If given, it should be an object.
         * Currently, only the opaque option is recognized. This defaults to off, but can be given to allow the overlay styling, when not null,
         * to override the styling of the base mode entirely, instead of the two being applied together.
         * @param {CodeMirror.Editor.Object} mode
         * @param {CodeMirror.Editor.Object} options
         */
        addOverlay(mode : any, options : any);

        /**
         * Pass this the exact argument passed for the mode parameter to addOverlay to remove an overlay again.
         * @param {CodeMirror.Editor.Object} mode
         */
        removeOverlay(mode : any);

        /**
         * Retrieve the currently active document from an editor.
         * @return {CodeMirror.Doc}
         */
        getDoc() : CodeMirror.Doc;

        /**
         * Attach a new document to the editor. Returns the old document, which is now no longer associated with an editor.
         * @param {CodeMirror.Doc} doc
         * @return {CodeMirror.Doc}
         */
        swapDoc(doc : CodeMirror.Doc) : CodeMirror.Doc;

        /**
         * Get the content of the current editor document. You can pass it an optional argument to specify the string to be used to separate lines (defaults to "\n").
         * @param {string} seperator
         * @return {string}
         */
        getValue(seperator : string) : string;

        /**
         * Set the content of the current editor document.
         * @param {string} content
         */
        setValue(content : string);

        /**
         * Sets the gutter marker for the given gutter (identified by its CSS class, see the gutters option) to the given value.
         * Value can be either null, to clear the marker, or a DOM element, to set it. The DOM element will be shown in the specified gutter next to the specified line.
         * @param {CodeMirror.Editor.Object} line
         * @param {string} gutterID
         * @param {HTMLElement} value
         * @return {*}
         */
        setGutterMarker(line : any, gutterID : string, value : HTMLElement) : CodeMirror.LineHandle;

        /**
         * Remove all gutter markers in the gutter with the given ID.
         * @param {string} gutterID
         */
        clearGutter(gutterID : string);

        /**
         * Set a CSS class name for the given line.line can be a number or a line handle.
         * where determines to which element this class should be applied, can can be one of "text" (the text element, which lies in front of the selection),
         * "background"(a background element that will be behind the selection),
         * or "wrap" (the wrapper node that wraps all of the line's elements, including gutter elements).
         * class should be the name of the class to apply.
         * @param {CodeMirror.Editor.Object} line
         * @param {string} where
         * @param {string} _class_
         * @return {*}
         */
        addLineClass(line : any, where : string, _class_ : string) : CodeMirror.LineHandle;

        /**
         * Remove a CSS class from a line.line can be a line handle or number.
         * where should be one of "text", "background", or "wrap"(see addLineClass).
         * class can be left off to remove all classes for the specified node, or be a string to remove only a specific class.
         * @param {CodeMirror.Editor.Object} line
         * @param {string} where
         * @param {string} class_
         * @return {*}
         */
        removeLineClass(line : any, where : string, class_ : string) : CodeMirror.LineHandle;

        /**
         * Compute the line at the given pixel height. mode is the relative element
         * to use to compute this line, it may be "window", "page" (the default), or "local"
         * @param {number} height
         * @param {*} mode
         * @return {number}
         */
        lineAtHeight(height : number, mode : "window") : number;

        /**
         * Computes the height of the top of a line, in the coordinate system specified by mode, it may be "window",
         * "page" (the default), or "local". When a line below the bottom of the document is specified, the returned value
         * is the bottom of the last line in the document. By default, the position of the actual text is returned.
         * If includeWidgets is true and the line has line widgets, the position above the first line widget is returned.
         * @param {CodeMirror.Editor.Object} line
         * @param {*} mode
         * @param {boolean} includeWidgets
         * @return {number}
         */
        heightAtLine(line : any, mode : "window", includeWidgets : boolean) : number;

        /**
         * Returns the line number, text content, and marker status of the given line, which can be either a number or a line handle.
         * @param {CodeMirror.Editor.Object} line
         * @return {CodeMirror.Editor.LineInfo}
         */
        lineInfo(line : any) : any;

        /**
         * Puts node, which should be an absolutely positioned DOM node, into the editor, positioned right below the given { line , ch } position.
         * When scrollIntoView is true, the editor will ensure that the entire node is visible (if possible).
         * To remove the widget again, simply use DOM methods (move it somewhere else, or call removeChild on its parent).
         * @param {*} pos
         * @param {HTMLElement} node
         * @param {boolean} scrollIntoView
         */
        addWidget(pos : CodeMirror.Position, node : HTMLElement, scrollIntoView : boolean);

        /**
         * Adds a line widget, an element shown below a line, spanning the whole of the editor's width, and moving the lines below it downwards.
         * line should be either an integer or a line handle, and node should be a DOM node, which will be displayed below the given line.
         * options, when given, should be an object that configures the behavior of the widget.
         * Note that the widget node will become a descendant of nodes with CodeMirror-specific CSS classes, and those classes might in some cases affect it.
         * @param {CodeMirror.Editor.Object} line
         * @param {HTMLElement} node
         * @param {*} options
         * @return {*}
         */
        addLineWidget(line : any, node : HTMLElement, options : CodeMirror.LineWidgetOptions) : CodeMirror.LineWidget;

        /**
         * Programatically set the size of the editor (overriding the applicable CSS rules).
         * width and height height can be either numbers(interpreted as pixels) or CSS units ("100%", for example).
         * You can pass null for either of them to indicate that that dimension should not be changed.
         * @param {CodeMirror.Editor.Object} width
         * @param {CodeMirror.Editor.Object} height
         */
        setSize(width : any, height : any);

        /**
         * Scroll the editor to a given(pixel) position.Both arguments may be left as null or undefined to have no effect.
         * @param {number} x
         * @param {number} y
         */
        scrollTo(x : number, y : number);

        /**
         * Get an { left , top , width , height , clientWidth , clientHeight } object that represents the current scroll position, the size of the scrollable area,
         * and the size of the visible area(minus scrollbars).
         * @return {*}
         */
        getScrollInfo() : CodeMirror.ScrollInfo;

        /**
         * Scrolls the given element into view. pos is a { line , ch } position, referring to a given character, null, to refer to the cursor.
         * The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well.
         * @param {*} pos
         * @param {number} margin
         */
        scrollIntoView(pos : CodeMirror.Position, margin : number);

        /**
         * Scrolls the given element into view. pos is a { left , top , right , bottom } object, in editor-local coordinates.
         * The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well.
         * @param {CodeMirror.Editor.Pos} pos
         * @param {number} margin
         */
        scrollIntoView(pos : any, margin : number);

        /**
         * Scrolls the given element into view. pos is a { line, ch } object, in editor-local coordinates.
         * The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well.
         * @param {CodeMirror.Editor.PosData} pos
         * @param {number} margin
         */
        scrollIntoView(pos : any, margin : number);

        /**
         * Scrolls the given element into view. pos is a { from, to } object, in editor-local coordinates.
         * The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well.
         * @param {CodeMirror.Editor.PosDto} pos
         * @param {number} margin
         */
        scrollIntoView(pos : any, margin : number);

        /**
         * Returns an { left , top , bottom } object containing the coordinates of the cursor position.
         * If mode is "local", they will be relative to the top-left corner of the editable document.
         * If it is "page" or not given, they are relative to the top-left corner of the page.
         * where is a boolean indicating whether you want the start(true) or the end(false) of the selection.
         * @param {boolean} where
         * @param {*} mode
         * @return {CodeMirror.Editor.CursorCoords}
         */
        cursorCoords(where : boolean, mode : "window") : any;

        /**
         * Returns an { left , top , bottom } object containing the coordinates of the cursor position.
         * If mode is "local", they will be relative to the top-left corner of the editable document.
         * If it is "page" or not given, they are relative to the top-left corner of the page.
         * where specifies the precise position at which you want to measure.
         * @param {*} where
         * @param {*} mode
         * @return {CodeMirror.Editor.CursorCoords}
         */
        cursorCoords(where : CodeMirror.Position, mode : "window") : any;

        /**
         * Returns the position and dimensions of an arbitrary character. pos should be a { line , ch } object.
         * If mode is "local", they will be relative to the top-left corner of the editable document.
         * If it is "page" or not given, they are relative to the top-left corner of the page.
         * This differs from cursorCoords in that it'll give the size of the whole character,
         * rather than just the position that the cursor would have when it would sit at that position.
         * @param {*} pos
         * @param {*} mode
         * @return {CodeMirror.Editor.CharCoords}
         */
        charCoords(pos : CodeMirror.Position, mode : "window") : any;

        /**
         * Given an { left , top } object , returns the { line , ch } position that corresponds to it.
         * The optional mode parameter determines relative to what the coordinates are interpreted.
         * It may be "window", "page" (the default), or "local".
         * @param {CodeMirror.Editor.Object} object
         * @param {*} mode
         * @return {*}
         */
        coordsChar(object : any, mode : "window") : CodeMirror.Position;

        /**
         * Returns the line height of the default font for the editor.
         * @return {number}
         */
        defaultTextHeight() : number;

        /**
         * Returns the pixel width of an 'x' in the default font for the editor.
         * (Note that for non - monospace fonts , this is mostly useless, and even for monospace fonts, non - ascii characters might have a different width).
         * @return {number}
         */
        defaultCharWidth() : number;

        /**
         * Returns a { from , to } object indicating the start (inclusive) and end (exclusive) of the currently rendered part of the document.
         * In big documents, when most content is scrolled out of view, CodeMirror will only render the visible part, and a margin around it.
         * See also the viewportChange event.
         * @return {CodeMirror.Editor.GetViewport}
         */
        getViewport() : any;

        /**
         * If your code does something to change the size of the editor element (window resizes are already listened for), or unhides it,
         * you should probably follow up by calling this method to ensure CodeMirror is still looking as intended.
         */
        refresh();

        /**
         * Gets the inner mode at a given position. This will return the same as getMode for simple modes, but will return an inner mode for nesting modes (such as htmlmixed).
         * @param {*} pos
         * @return {CodeMirror.Editor.Object}
         */
        getModeAt(pos : CodeMirror.Position) : any;

        /**
         * Retrieves information about the token the current mode found before the given position (a {line, ch} object).
         * @param {*} pos
         * @param {boolean} precise
         * @return {*}
         */
        getTokenAt(pos : CodeMirror.Position, precise : boolean) : CodeMirror.Token;

        /**
         * This is a (much) cheaper version of getTokenAt useful for when you just need the type of the token at a given position,
         * and no other information. Will return null for unstyled tokens, and a string, potentially containing multiple
         * space-separated style names, otherwise.
         * @param {*} pos
         * @return {string}
         */
        getTokenTypeAt(pos : CodeMirror.Position) : string;

        /**
         * This is similar to getTokenAt, but collects all tokens for a given line into an array.
         * @param {number} line
         * @param {boolean} precise
         * @return {Array}
         */
        getLineTokens(line : number, precise : boolean) : CodeMirror.Token[];

        /**
         * Returns the mode's parser state, if any, at the end of the given line number.
         * If no line number is given, the state at the end of the document is returned.
         * This can be useful for storing parsing errors in the state, or getting other kinds of contextual information for a line.
         * @param {number} line
         * @return {CodeMirror.Editor.Object}
         */
        getStateAfter(line : number) : any;

        /**
         * In normal circumstances, use the above operation method. But if you want to buffer operations happening asynchronously, or that can't all be wrapped in a callback
         * function, you can call startOperation to tell CodeMirror to start buffering changes, and endOperation to actually render all the updates. Be careful: if you use this
         * API and forget to call endOperation, the editor will just never update.
         */
        startOperation();

        endOperation();

        /**
         * Adjust the indentation of the given line.
         * The second argument (which defaults to "smart") may be one of:
         * "prev" Base indentation on the indentation of the previous line.
         * "smart" Use the mode's smart indentation if available, behave like "prev" otherwise.
         * "add" Increase the indentation of the line by one indent unit.
         * "subtract" Reduce the indentation of the line.
         * @param {number} line
         * @param {string} dir
         */
        indentLine(line : number, dir : string);

        /**
         * Tells you whether the editor's content can be edited by the user.
         * @return {boolean}
         */
        isReadOnly() : boolean;

        /**
         * Runs the command with the given name on the editor.
         * @param {string} name
         */
        execCommand(name : string);

        /**
         * Give the editor focus.
         */
        focus();

        /**
         * Returns the hidden textarea used to read input.
         * @return {HTMLTextAreaElement}
         */
        getInputField() : HTMLTextAreaElement;

        /**
         * Returns the DOM node that represents the editor, and controls its size. Remove this from your tree to delete an editor instance.
         * @return {HTMLElement}
         */
        getWrapperElement() : HTMLElement;

        /**
         * Returns the DOM node that is responsible for the scrolling of the editor.
         * @return {HTMLElement}
         */
        getScrollerElement() : HTMLElement;

        /**
         * Fetches the DOM node that contains the editor gutters.
         * @return {HTMLElement}
         */
        getGutterElement() : HTMLElement;

        /**
         * Events are registered with the on method (and removed with the off method).
         * These are the events that fire on the instance object. The name of the event is followed by the arguments that will be passed to the handler.
         * The instance argument always refers to the editor instance.
         * @param {string} eventName
         * @param {*} handler
         */
        on(eventName : string, handler : (p1: CodeMirror.Editor) => void);

        off(eventName : string, handler : (p1: CodeMirror.Editor) => void);

        /**
         * Fires every time the content of the editor is changed.
         * @param {*} eventName
         * @param {*} handler
         */
        on(eventName : "change", handler : (p1: CodeMirror.Editor, p2: CodeMirror.EditorChangeLinkedList) => void);

        off(eventName : "change", handler : (p1: CodeMirror.Editor, p2: CodeMirror.EditorChangeLinkedList) => void);

        /**
         * Like the "change" event, but batched per operation, passing an
         * array containing all the changes that happened in the operation.
         * This event is fired after the operation finished, and display
         * changes it makes will trigger a new operation.
         * @param {*} eventName
         * @param {*} handler
         */
        on(eventName : "changes", handler : (p1: CodeMirror.Editor, p2: CodeMirror.EditorChangeLinkedList[]) => void);

        off(eventName : "changes", handler : (p1: CodeMirror.Editor, p2: CodeMirror.EditorChangeLinkedList[]) => void);

        /**
         * This event is fired before a change is applied, and its handler may choose to modify or cancel the change.
         * The changeObj never has a next property, since this is fired for each individual change, and not batched per operation.
         * Note: you may not do anything from a "beforeChange" handler that would cause changes to the document or its visualization.
         * Doing so will, since this handler is called directly from the bowels of the CodeMirror implementation,
         * probably cause the editor to become corrupted.
         * @param {*} eventName
         * @param {*} handler
         */
        on(eventName : "beforeChange", handler : (p1: CodeMirror.Editor, p2: CodeMirror.EditorChangeCancellable) => void);

        off(eventName : "beforeChange", handler : (p1: CodeMirror.Editor, p2: CodeMirror.EditorChangeCancellable) => void);

        /**
         * Will be fired when the cursor or selection moves, or any change is made to the editor content.
         * @param {*} eventName
         * @param {*} handler
         */
        on(eventName : "cursorActivity", handler : (p1: CodeMirror.Editor) => void);

        off(eventName : "cursorActivity", handler : (p1: CodeMirror.Editor) => void);

        /**
         * This event is fired before the selection is moved. Its handler may modify the resulting selection head and anchor.
         * Handlers for this event have the same restriction as "beforeChange" handlers they should not do anything to directly update the state of the editor.
         * @param {*} eventName
         * @param {*} handler
         */
        on(eventName : "beforeSelectionChange", handler : (p1: CodeMirror.Editor, p2: any) => void);

        off(eventName : "beforeSelectionChange", handler : (p1: CodeMirror.Editor, p2: any) => void);

        /**
         * Fires whenever the view port of the editor changes (due to scrolling, editing, or any other factor).
         * The from and to arguments give the new start and end of the viewport.
         * @param {*} eventName
         * @param {*} handler
         */
        on(eventName : "viewportChange", handler : (p1: CodeMirror.Editor, p2: number, p3: number) => void);

        off(eventName : "viewportChange", handler : (p1: CodeMirror.Editor, p2: number, p3: number) => void);

        /**
         * Fires when the editor gutter (the line-number area) is clicked. Will pass the editor instance as first argument,
         * the (zero-based) number of the line that was clicked as second argument, the CSS class of the gutter that was clicked as third argument,
         * and the raw mousedown event object as fourth argument.
         * @param {*} eventName
         * @param {*} handler
         */
        on(eventName : "gutterClick", handler : (p1: CodeMirror.Editor, p2: number, p3: string, p4: Event) => void);

        off(eventName : "gutterClick", handler : (p1: CodeMirror.Editor, p2: number, p3: string, p4: Event) => void);

        /**
         * Fires whenever the editor is focused.
         * @param {*} eventName
         * @param {*} handler
         */
        on(eventName : "focus", handler : (p1: CodeMirror.Editor) => void);

        off(eventName : "focus", handler : (p1: CodeMirror.Editor) => void);

        /**
         * Fires whenever the editor is unfocused.
         * @param {*} eventName
         * @param {*} handler
         */
        on(eventName : "blur", handler : (p1: CodeMirror.Editor) => void);

        off(eventName : "blur", handler : (p1: CodeMirror.Editor) => void);

        /**
         * Fires when the editor is scrolled.
         * @param {*} eventName
         * @param {*} handler
         */
        on(eventName : "scroll", handler : (p1: CodeMirror.Editor) => void);

        off(eventName : "scroll", handler : (p1: CodeMirror.Editor) => void);

        /**
         * Will be fired whenever CodeMirror updates its DOM display.
         * @param {*} eventName
         * @param {*} handler
         */
        on(eventName : "update", handler : (p1: CodeMirror.Editor) => void);

        off(eventName : "update", handler : (p1: CodeMirror.Editor) => void);

        /**
         * Fired whenever a line is (re-)rendered to the DOM. Fired right after the DOM element is built, before it is added to the document.
         * The handler may mess with the style of the resulting element, or add event handlers, but should not try to change the state of the editor.
         * @param {*} eventName
         * @param {*} handler
         */
        on(eventName : "renderLine", handler : (p1: CodeMirror.Editor, p2: CodeMirror.LineHandle, p3: HTMLElement) => void);

        off(eventName : "renderLine", handler : (p1: CodeMirror.Editor, p2: CodeMirror.LineHandle, p3: HTMLElement) => void);

        /**
         * Fires when one of the DOM events fires.
         * @param {CodeMirror.Editor.Object} eventName
         * @param {*} handler
         */
        on(eventName : any, handler : (p1: CodeMirror.Editor, p2: Event) => void);

        off(eventName : any, handler : (p1: CodeMirror.Editor, p2: Event) => void);

        /**
         * Expose the state object, so that the Editor.state.completionActive property is reachable
         */
        state : any;

        /**
         * Attach an additional keymap to the editor.
         * This is mostly useful for add - ons that need to register some key handlers without trampling on the extraKeys option.
         * Maps added in this way have a higher precedence than the extraKeys and keyMap options, and between them,
         * the maps added earlier have a lower precedence than those added later, unless the bottom argument was passed,
         * in which case they end up below other keymaps added with this method.
         * @param {string} map
         */
        addKeyMap(map : string);

        /**
         * Enable a highlighting overlay.This is a stateless mini - mode that can be used to add extra highlighting.
         * For example, the search add - on uses it to highlight the term that's currently being searched.
         * mode can be a mode spec or a mode object (an object with a token method). The options parameter is optional. If given, it should be an object.
         * Currently, only the opaque option is recognized. This defaults to off, but can be given to allow the overlay styling, when not null,
         * to override the styling of the base mode entirely, instead of the two being applied together.
         * @param {CodeMirror.Editor.Object} mode
         */
        addOverlay(mode : any);

        /**
         * Get the content of the current editor document. You can pass it an optional argument to specify the string to be used to separate lines (defaults to "\n").
         * @return {string}
         */
        getValue() : string;

        /**
         * Remove a CSS class from a line.line can be a line handle or number.
         * where should be one of "text", "background", or "wrap"(see addLineClass).
         * class can be left off to remove all classes for the specified node, or be a string to remove only a specific class.
         * @param {CodeMirror.Editor.Object} line
         * @param {string} where
         * @return {*}
         */
        removeLineClass(line : any, where : string) : CodeMirror.LineHandle;

        /**
         * Compute the line at the given pixel height. mode is the relative element
         * to use to compute this line, it may be "window", "page" (the default), or "local"
         * @param {number} height
         * @return {number}
         */
        lineAtHeight(height : number) : number;

        /**
         * Computes the height of the top of a line, in the coordinate system specified by mode, it may be "window",
         * "page" (the default), or "local". When a line below the bottom of the document is specified, the returned value
         * is the bottom of the last line in the document. By default, the position of the actual text is returned.
         * If includeWidgets is true and the line has line widgets, the position above the first line widget is returned.
         * @param {CodeMirror.Editor.Object} line
         * @param {*} mode
         * @return {number}
         */
        heightAtLine(line : any, mode : "window") : number;

        /**
         * Computes the height of the top of a line, in the coordinate system specified by mode, it may be "window",
         * "page" (the default), or "local". When a line below the bottom of the document is specified, the returned value
         * is the bottom of the last line in the document. By default, the position of the actual text is returned.
         * If includeWidgets is true and the line has line widgets, the position above the first line widget is returned.
         * @param {CodeMirror.Editor.Object} line
         * @return {number}
         */
        heightAtLine(line : any) : number;

        /**
         * Adds a line widget, an element shown below a line, spanning the whole of the editor's width, and moving the lines below it downwards.
         * line should be either an integer or a line handle, and node should be a DOM node, which will be displayed below the given line.
         * options, when given, should be an object that configures the behavior of the widget.
         * Note that the widget node will become a descendant of nodes with CodeMirror-specific CSS classes, and those classes might in some cases affect it.
         * @param {CodeMirror.Editor.Object} line
         * @param {HTMLElement} node
         * @return {*}
         */
        addLineWidget(line : any, node : HTMLElement) : CodeMirror.LineWidget;

        /**
         * Scroll the editor to a given(pixel) position.Both arguments may be left as null or undefined to have no effect.
         * @param {number} x
         */
        scrollTo(x : number);

        /**
         * Scrolls the given element into view. pos is a { line , ch } position, referring to a given character, null, to refer to the cursor.
         * The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well.
         * @param {*} pos
         */
        scrollIntoView(pos : CodeMirror.Position);

        /**
         * Scrolls the given element into view. pos is a { line, ch } object, in editor-local coordinates.
         * The margin parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well.
         * @param {CodeMirror.Editor.PosData} pos
         */
        scrollIntoView(pos : any);

        /**
         * Returns an { left , top , bottom } object containing the coordinates of the cursor position.
         * If mode is "local", they will be relative to the top-left corner of the editable document.
         * If it is "page" or not given, they are relative to the top-left corner of the page.
         * where is a boolean indicating whether you want the start(true) or the end(false) of the selection.
         * @param {boolean} where
         * @return {CodeMirror.Editor.CursorCoords}
         */
        cursorCoords(where : boolean) : any;

        /**
         * Returns an { left , top , bottom } object containing the coordinates of the cursor position.
         * If mode is "local", they will be relative to the top-left corner of the editable document.
         * If it is "page" or not given, they are relative to the top-left corner of the page.
         * where specifies the precise position at which you want to measure.
         * @param {*} where
         * @return {CodeMirror.Editor.CursorCoords}
         */
        cursorCoords(where : CodeMirror.Position) : any;

        /**
         * Returns the position and dimensions of an arbitrary character. pos should be a { line , ch } object.
         * If mode is "local", they will be relative to the top-left corner of the editable document.
         * If it is "page" or not given, they are relative to the top-left corner of the page.
         * This differs from cursorCoords in that it'll give the size of the whole character,
         * rather than just the position that the cursor would have when it would sit at that position.
         * @param {*} pos
         * @return {CodeMirror.Editor.CharCoords}
         */
        charCoords(pos : CodeMirror.Position) : any;

        /**
         * Given an { left , top } object , returns the { line , ch } position that corresponds to it.
         * The optional mode parameter determines relative to what the coordinates are interpreted.
         * It may be "window", "page" (the default), or "local".
         * @param {CodeMirror.Editor.Object} object
         * @return {*}
         */
        coordsChar(object : any) : CodeMirror.Position;

        /**
         * Retrieves information about the token the current mode found before the given position (a {line, ch} object).
         * @param {*} pos
         * @return {*}
         */
        getTokenAt(pos : CodeMirror.Position) : CodeMirror.Token;

        /**
         * This is similar to getTokenAt, but collects all tokens for a given line into an array.
         * @param {number} line
         * @return {Array}
         */
        getLineTokens(line : number) : CodeMirror.Token[];

        /**
         * Returns the mode's parser state, if any, at the end of the given line number.
         * If no line number is given, the state at the end of the document is returned.
         * This can be useful for storing parsing errors in the state, or getting other kinds of contextual information for a line.
         * @return {CodeMirror.Editor.Object}
         */
        getStateAfter() : any;

        /**
         * Adjust the indentation of the given line.
         * The second argument (which defaults to "smart") may be one of:
         * "prev" Base indentation on the indentation of the previous line.
         * "smart" Use the mode's smart indentation if available, behave like "prev" otherwise.
         * "add" Increase the indentation of the line by one indent unit.
         * "subtract" Reduce the indentation of the line.
         * @param {number} line
         */
        indentLine(line : number);

        /**
         * Attach an additional keymap to the editor.
         * This is mostly useful for add - ons that need to register some key handlers without trampling on the extraKeys option.
         * Maps added in this way have a higher precedence than the extraKeys and keyMap options, and between them,
         * the maps added earlier have a lower precedence than those added later, unless the bottom argument was passed,
         * in which case they end up below other keymaps added with this method.
         * @param {*} map
         * @param {boolean} bottom
         */
        addKeyMap(map : CodeMirror.KeyMap, bottom : boolean);

        /**
         * Disable a keymap added with addKeyMap.Either pass in the keymap object itself , or a string,
         * which will be compared against the name property of the active keymaps.
         * @param {*} map
         */
        removeKeyMap(map : CodeMirror.KeyMap);

        /**
         * Compute the line at the given pixel height. mode is the relative element
         * to use to compute this line, it may be "window", "page" (the default), or "local"
         * @param {number} height
         * @param {*} mode
         * @return {number}
         */
        lineAtHeight(height : number, mode : "local") : number;

        /**
         * Compute the line at the given pixel height. mode is the relative element
         * to use to compute this line, it may be "window", "page" (the default), or "local"
         * @param {number} height
         * @param {*} mode
         * @return {number}
         */
        lineAtHeight(height : number, mode : "page") : number;

        /**
         * Computes the height of the top of a line, in the coordinate system specified by mode, it may be "window",
         * "page" (the default), or "local". When a line below the bottom of the document is specified, the returned value
         * is the bottom of the last line in the document. By default, the position of the actual text is returned.
         * If includeWidgets is true and the line has line widgets, the position above the first line widget is returned.
         * @param {CodeMirror.Editor.Object} line
         * @param {*} mode
         * @param {boolean} includeWidgets
         * @return {number}
         */
        heightAtLine(line : any, mode : "page", includeWidgets : boolean) : number;

        /**
         * Computes the height of the top of a line, in the coordinate system specified by mode, it may be "window",
         * "page" (the default), or "local". When a line below the bottom of the document is specified, the returned value
         * is the bottom of the last line in the document. By default, the position of the actual text is returned.
         * If includeWidgets is true and the line has line widgets, the position above the first line widget is returned.
         * @param {CodeMirror.Editor.Object} line
         * @param {*} mode
         * @param {boolean} includeWidgets
         * @return {number}
         */
        heightAtLine(line : any, mode : "local", includeWidgets : boolean) : number;

        /**
         * Scroll the editor to a given(pixel) position.Both arguments may be left as null or undefined to have no effect.
         * @param {number} x
         * @param {number} y
         */
        scrollTo(x : number, y : number);

        /**
         * Returns an { left , top , bottom } object containing the coordinates of the cursor position.
         * If mode is "local", they will be relative to the top-left corner of the editable document.
         * If it is "page" or not given, they are relative to the top-left corner of the page.
         * where is a boolean indicating whether you want the start(true) or the end(false) of the selection.
         * @param {boolean} where
         * @param {*} mode
         * @return {CodeMirror.Editor.CursorCoords}
         */
        cursorCoords(where : boolean, mode : "local") : any;

        /**
         * Returns an { left , top , bottom } object containing the coordinates of the cursor position.
         * If mode is "local", they will be relative to the top-left corner of the editable document.
         * If it is "page" or not given, they are relative to the top-left corner of the page.
         * where is a boolean indicating whether you want the start(true) or the end(false) of the selection.
         * @param {boolean} where
         * @param {*} mode
         * @return {CodeMirror.Editor.CursorCoords}
         */
        cursorCoords(where : boolean, mode : "page") : any;

        /**
         * Returns an { left , top , bottom } object containing the coordinates of the cursor position.
         * If mode is "local", they will be relative to the top-left corner of the editable document.
         * If it is "page" or not given, they are relative to the top-left corner of the page.
         * where specifies the precise position at which you want to measure.
         * @param {*} where
         * @param {*} mode
         * @return {CodeMirror.Editor.CursorCoords}
         */
        cursorCoords(where : CodeMirror.Position, mode : "page") : any;

        /**
         * Returns an { left , top , bottom } object containing the coordinates of the cursor position.
         * If mode is "local", they will be relative to the top-left corner of the editable document.
         * If it is "page" or not given, they are relative to the top-left corner of the page.
         * where specifies the precise position at which you want to measure.
         * @param {*} where
         * @param {*} mode
         * @return {CodeMirror.Editor.CursorCoords}
         */
        cursorCoords(where : CodeMirror.Position, mode : "local") : any;

        /**
         * Returns the position and dimensions of an arbitrary character. pos should be a { line , ch } object.
         * If mode is "local", they will be relative to the top-left corner of the editable document.
         * If it is "page" or not given, they are relative to the top-left corner of the page.
         * This differs from cursorCoords in that it'll give the size of the whole character,
         * rather than just the position that the cursor would have when it would sit at that position.
         * @param {*} pos
         * @param {*} mode
         * @return {CodeMirror.Editor.CharCoords}
         */
        charCoords(pos : CodeMirror.Position, mode : "local") : any;

        /**
         * Returns the position and dimensions of an arbitrary character. pos should be a { line , ch } object.
         * If mode is "local", they will be relative to the top-left corner of the editable document.
         * If it is "page" or not given, they are relative to the top-left corner of the page.
         * This differs from cursorCoords in that it'll give the size of the whole character,
         * rather than just the position that the cursor would have when it would sit at that position.
         * @param {*} pos
         * @param {*} mode
         * @return {CodeMirror.Editor.CharCoords}
         */
        charCoords(pos : CodeMirror.Position, mode : "page") : any;

        /**
         * Given an { left , top } object , returns the { line , ch } position that corresponds to it.
         * The optional mode parameter determines relative to what the coordinates are interpreted.
         * It may be "window", "page" (the default), or "local".
         * @param {CodeMirror.Editor.Object} object
         * @param {*} mode
         * @return {*}
         */
        coordsChar(object : any, mode : "local") : CodeMirror.Position;

        /**
         * Given an { left , top } object , returns the { line , ch } position that corresponds to it.
         * The optional mode parameter determines relative to what the coordinates are interpreted.
         * It may be "window", "page" (the default), or "local".
         * @param {CodeMirror.Editor.Object} object
         * @param {*} mode
         * @return {*}
         */
        coordsChar(object : any, mode : "page") : CodeMirror.Position;

        /**
         * Attach an additional keymap to the editor.
         * This is mostly useful for add - ons that need to register some key handlers without trampling on the extraKeys option.
         * Maps added in this way have a higher precedence than the extraKeys and keyMap options, and between them,
         * the maps added earlier have a lower precedence than those added later, unless the bottom argument was passed,
         * in which case they end up below other keymaps added with this method.
         * @param {*} map
         */
        addKeyMap(map : CodeMirror.KeyMap);

        /**
         * Computes the height of the top of a line, in the coordinate system specified by mode, it may be "window",
         * "page" (the default), or "local". When a line below the bottom of the document is specified, the returned value
         * is the bottom of the last line in the document. By default, the position of the actual text is returned.
         * If includeWidgets is true and the line has line widgets, the position above the first line widget is returned.
         * @param {CodeMirror.Editor.Object} line
         * @param {*} mode
         * @return {number}
         */
        heightAtLine(line : any, mode : "page") : number;

        /**
         * Computes the height of the top of a line, in the coordinate system specified by mode, it may be "window",
         * "page" (the default), or "local". When a line below the bottom of the document is specified, the returned value
         * is the bottom of the last line in the document. By default, the position of the actual text is returned.
         * If includeWidgets is true and the line has line widgets, the position above the first line widget is returned.
         * @param {CodeMirror.Editor.Object} line
         * @param {*} mode
         * @return {number}
         */
        heightAtLine(line : any, mode : "local") : number;
    }
}
declare namespace CodeMirror {
    export interface EditorChange {
        /**
         * Position (in the pre-change coordinate system) where the change started.
         */
        from : CodeMirror.Position;

        /**
         * Position (in the pre-change coordinate system) where the change ended.
         */
        to : CodeMirror.Position;

        /**
         * Array of strings representing the text that replaced the changed range (split by line).
         */
        text : string[];

        /**
         * Text that used to be between from and to, which is overwritten by this change.
         */
        removed? : string[];

        /**
         * String representing the origin of the change event and wether it can be merged with history
         */
        origin? : string;
    }
}
declare namespace CodeMirror {
    export interface EditorChangeCancellable extends CodeMirror.EditorChange {
        /**
         * may be used to modify the change. All three arguments to update are optional, and can be left off to leave the existing value for that field intact.
         * If the change came from undo/redo, `update` is undefined and the change cannot be modified.
         * @param {*} from
         * @param {*} to
         * @param {Array} text
         */
        update(from : CodeMirror.Position, to : CodeMirror.Position, text : string[]);

        cancel();

        /**
         * may be used to modify the change. All three arguments to update are optional, and can be left off to leave the existing value for that field intact.
         * If the change came from undo/redo, `update` is undefined and the change cannot be modified.
         * @param {*} from
         * @param {*} to
         */
        update(from : CodeMirror.Position, to : CodeMirror.Position);

        /**
         * may be used to modify the change. All three arguments to update are optional, and can be left off to leave the existing value for that field intact.
         * If the change came from undo/redo, `update` is undefined and the change cannot be modified.
         * @param {*} from
         */
        update(from : CodeMirror.Position);

        /**
         * may be used to modify the change. All three arguments to update are optional, and can be left off to leave the existing value for that field intact.
         * If the change came from undo/redo, `update` is undefined and the change cannot be modified.
         */
        update();
    }
}
declare namespace CodeMirror {
    export interface EditorChangeLinkedList extends CodeMirror.EditorChange {
        /**
         * Points to another change object (which may point to another, etc).
         */
        next? : CodeMirror.EditorChangeLinkedList;
    }
}
declare namespace CodeMirror {
    export interface EditorConfiguration {
        /**
         * string| The starting value of the editor. Can be a string, or a document object.
         */
        value? : any;

        /**
         * string|object. The mode to use. When not given, this will default to the first mode that was loaded.
         * It may be a string, which either simply names the mode or is a MIME type associated with the mode.
         * Alternatively, it may be an object containing configuration options for the mode,
         * with a name property that names the mode (for example {name: "javascript", json: true}).
         */
        mode? : any;

        /**
         * The theme to style the editor with. You must make sure the CSS file defining the corresponding .cm-s-[name] styles is loaded.
         * The default is "default".
         */
        theme? : string;

        /**
         * How many spaces a block (whatever that means in the edited language) should be indented. The default is 2.
         */
        indentUnit? : number;

        /**
         * Whether to use the context-sensitive indentation that the mode provides (or just indent the same as the line before). Defaults to true.
         */
        smartIndent? : boolean;

        /**
         * The width of a tab character. Defaults to 4.
         */
        tabSize? : number;

        /**
         * Whether, when indenting, the first N*tabSize spaces should be replaced by N tabs. Default is false.
         */
        indentWithTabs? : boolean;

        /**
         * Configures whether the editor should re-indent the current line when a character is typed
         * that might change its proper indentation (only works if the mode supports indentation). Default is true.
         */
        electricChars? : boolean;

        /**
         * Determines whether horizontal cursor movement through right-to-left (Arabic, Hebrew) text
         * is visual (pressing the left arrow moves the cursor left)
         * or logical (pressing the left arrow moves to the next lower index in the string, which is visually right in right-to-left text).
         * The default is false on Windows, and true on other platforms.
         */
        rtlMoveVisually? : boolean;

        /**
         * Configures the keymap to use. The default is "default", which is the only keymap defined in codemirror.js itself.
         * Extra keymaps are found in the keymap directory. See the section on keymaps for more information.
         */
        keyMap? : string;

        /**
         * Can be used to specify extra keybindings for the editor, alongside the ones defined by keyMap. Should be either null, or a valid keymap value.
         */
        extraKeys? : ((string)|(CodeMirror.KeyMap));

        /**
         * Whether CodeMirror should scroll or wrap for long lines. Defaults to false (scroll).
         */
        lineWrapping? : boolean;

        /**
         * Whether to show line numbers to the left of the editor.
         */
        lineNumbers? : boolean;

        /**
         * At which number to start counting lines. Default is 1.
         */
        firstLineNumber? : number;

        /**
         * A function used to format line numbers. The function is passed the line number, and should return a string that will be shown in the gutter.
         */
        lineNumberFormatter? : (p1: number) => string;

        /**
         * Can be used to add extra gutters (beyond or instead of the line number gutter).
         * Should be an array of CSS class names, each of which defines a width (and optionally a background),
         * and which will be used to draw the background of the gutters.
         * May include the CodeMirror-linenumbers class, in order to explicitly set the position of the line number gutter
         * (it will default to be to the right of all other gutters). These class names are the keys passed to setGutterMarker.
         */
        gutters? : string[];

        /**
         * Provides an option foldGutter, which can be used to create a gutter with markers indicating the blocks that can be folded.
         */
        foldGutter? : boolean;

        /**
         * Determines whether the gutter scrolls along with the content horizontally (false)
         * or whether it stays fixed during horizontal scrolling (true, the default).
         */
        fixedGutter? : boolean;

        /**
         * Chooses a scrollbar implementation. The default is "native", showing native scrollbars. The core library also
         * provides the "null" style, which completely hides the scrollbars. Addons can implement additional scrollbar models.
         */
        scrollbarStyle? : string;

        /**
         * boolean|string. This disables editing of the editor content by the user. If the special value "nocursor" is given (instead of simply true), focusing of the editor is also disallowed.
         */
        readOnly? : any;

        /**
         * Whether the cursor should be drawn when a selection is active. Defaults to false.
         */
        showCursorWhenSelecting? : boolean;

        /**
         * The maximum number of undo levels that the editor stores. Defaults to 40.
         */
        undoDepth? : number;

        /**
         * The period of inactivity (in milliseconds) that will cause a new history event to be started when typing or deleting. Defaults to 500.
         */
        historyEventDelay? : number;

        /**
         * The tab index to assign to the editor. If not given, no tab index will be assigned.
         */
        tabindex? : number;

        /**
         * Can be used to make CodeMirror focus itself on initialization. Defaults to off.
         * When fromTextArea is used, and no explicit value is given for this option, it will be set to true when either the source textarea is focused,
         * or it has an autofocus attribute and no other element is focused.
         */
        autofocus? : boolean;

        /**
         * Controls whether drag-and - drop is enabled. On by default.
         */
        dragDrop? : boolean;

        /**
         * When given , this will be called when the editor is handling a dragenter , dragover , or drop event.
         * It will be passed the editor instance and the event object as arguments.
         * The callback can choose to handle the event itself , in which case it should return true to indicate that CodeMirror should not do anything further.
         */
        onDragEvent? : (p1: CodeMirror.Editor, p2: Event) => boolean;

        /**
         * This provides a rather low - level hook into CodeMirror's key handling.
         * If provided, this function will be called on every keydown, keyup, and keypress event that CodeMirror captures.
         * It will be passed two arguments, the editor instance and the key event.
         * This key event is pretty much the raw key event, except that a stop() method is always added to it.
         * You could feed it to, for example, jQuery.Event to further normalize it.
         * This function can inspect the key event, and handle it if it wants to.
         * It may return true to tell CodeMirror to ignore the event.
         * Be wary that, on some browsers, stopping a keydown does not stop the keypress from firing, whereas on others it does.
         * If you respond to an event, you should probably inspect its type property and only do something when it is keydown
         * (or keypress for actions that need character data).
         */
        onKeyEvent? : (p1: CodeMirror.Editor, p2: Event) => boolean;

        /**
         * Half - period in milliseconds used for cursor blinking. The default blink rate is 530ms.
         */
        cursorBlinkRate? : number;

        /**
         * Determines the height of the cursor. Default is 1 , meaning it spans the whole height of the line.
         * For some fonts (and by some tastes) a smaller height (for example 0.85),
         * which causes the cursor to not reach all the way to the bottom of the line, looks better
         */
        cursorHeight? : number;

        /**
         * Highlighting is done by a pseudo background - thread that will work for workTime milliseconds,
         * and then use timeout to sleep for workDelay milliseconds.
         * The defaults are 200 and 300, you can change these options to make the highlighting more or less aggressive.
         */
        workTime? : number;

        /**
         * See workTime.
         */
        workDelay? : number;

        /**
         * Indicates how quickly CodeMirror should poll its input textarea for changes(when focused).
         * Most input is captured by events, but some things, like IME input on some browsers, don't generate events that allow CodeMirror to properly detect it.
         * Thus, it polls. Default is 100 milliseconds.
         */
        pollInterval? : number;

        /**
         * By default, CodeMirror will combine adjacent tokens into a single span if they have the same class.
         * This will result in a simpler DOM tree, and thus perform better. With some kinds of styling(such as rounded corners),
         * this will change the way the document looks. You can set this option to false to disable this behavior.
         */
        flattenSpans? : boolean;

        /**
         * When highlighting long lines, in order to stay responsive, the editor will give up and simply style
         * the rest of the line as plain text when it reaches a certain position. The default is 10000.
         * You can set this to Infinity to turn off this behavior.
         */
        maxHighlightLength? : number;

        /**
         * Specifies the amount of lines that are rendered above and below the part of the document that's currently scrolled into view.
         * This affects the amount of updates needed when scrolling, and the amount of work that such an update does.
         * You should usually leave it at its default, 10. Can be set to Infinity to make sure the whole document is always rendered,
         * and thus the browser's text search works on it. This will have bad effects on performance of big documents.
         */
        viewportMargin? : number;

        /**
         * Optional lint configuration to be used in conjunction with CodeMirror's linter addon.
         */
        lint? : ((boolean)|(CodeMirror.LintOptions));

        /**
         * Optional value to be used in conjunction with CodeMirror’s placeholder add-on.
         */
        placeholder? : string;
    }
}
declare namespace CodeMirror {
    export interface EditorFromTextArea extends CodeMirror.Editor {
        /**
         * Copy the content of the editor into the textarea.
         */
        save();

        /**
         * Remove the editor, and restore the original textarea (with the editor's current content).
         */
        toTextArea();

        /**
         * Returns the textarea that the instance was based on.
         * @return {HTMLTextAreaElement}
         */
        getTextArea() : HTMLTextAreaElement;
    }
}
declare namespace CodeMirror {
    export var Pos : any;

    export var Pass : any;

    /**
     * Find the column position at a given string index using a given tabsize.
     * @param {string} line
     * @param {number} index
     * @param {number} tabSize
     * @return {number}
     */
    export function countColumn(line : string, index : number, tabSize : number) : number;

    export function fromTextArea(host : HTMLTextAreaElement, options : CodeMirror.EditorConfiguration) : CodeMirror.EditorFromTextArea;

    /**
     * Compare two positions, return 0 if they are the same, a negative number when a is less, and a positive number otherwise.
     * @param {*} a
     * @param {*} b
     * @return {number}
     */
    export function cmpPos(a : CodeMirror.Position, b : CodeMirror.Position) : number;

    /**
     * Utility function that computes an end position from a change (an object with from, to, and text properties, as passed to various event handlers).
     * The returned position will be the end of the changed range, after the change is applied.
     * @param {*} change
     * @return {*}
     */
    export function changeEnd(change : CodeMirror.EditorChange) : CodeMirror.Position;

    /**
     * It contains a string that indicates the version of the library. This is a triple of integers "major.minor.patch",
     * where patch is zero for releases, and something else (usually one) for dev snapshots.
     */
    export var version : string;

    /**
     * An object containing default values for all options.
     * You can assign to its properties to modify defaults (though this won't affect editors that have already been created).
     */
    export var defaults : any;

    /**
     * If you want to define extra methods in terms of the CodeMirror API, it is possible to use defineExtension.
     * This will cause the given value(usually a method) to be added to all CodeMirror instances created from then on.
     * @param {string} name
     * @param {*} value
     */
    export function defineExtension(name : string, value : any);

    /**
     * Like defineExtension, but the method will be added to the interface for Doc objects instead.
     * @param {string} name
     * @param {*} value
     */
    export function defineDocExtension(name : string, value : any);

    /**
     * Similarly, defineOption can be used to define new options for CodeMirror.
     * The updateFunc will be called with the editor instance and the new value when an editor is initialized,
     * and whenever the option is modified through setOption.
     * @param {string} name
     * @param {*} default_
     * @param {Function} updateFunc
     */
    export function defineOption(name : string, default_ : any, updateFunc : Function);

    /**
     * If your extention just needs to run some code whenever a CodeMirror instance is initialized, use CodeMirror.defineInitHook.
     * Give it a function as its only argument, and from then on, that function will be called (with the instance as argument)
     * whenever a new CodeMirror instance is initialized.
     * @param {Function} func
     */
    export function defineInitHook(func : Function);

    /**
     * Registers a helper value with the given name in the given namespace (type). This is used to define functionality
     * that may be looked up by mode. Will create (if it doesn't already exist) a property on the CodeMirror object for
     * the given type, pointing to an object that maps names to values. I.e. after doing
     * CodeMirror.registerHelper("hint", "foo", myFoo), the value CodeMirror.hint.foo will point to myFoo.
     * @param {string} namespace
     * @param {string} name
     * @param {*} helper
     */
    export function registerHelper(namespace : string, name : string, helper : any);

    /**
     * Given a state object, returns a {state, mode} object with the inner mode and its state for the current position.
     * @param {*} mode
     * @param {*} state
     * @return {CodeMirror.InnerMode}
     */
    export function innerMode(mode : CodeMirror.Mode<any>, state : any) : any;

    /**
     * Sometimes, it is useful to add or override mode object properties from external code.
     * The CodeMirror.extendMode function can be used to add properties to mode objects produced for a specific mode.
     * Its first argument is the name of the mode, its second an object that specifies the properties that should be added.
     * This is mostly useful to add utilities that can later be looked up through getMode.
     * @param {string} name
     * @param {*} properties
     */
    export function extendMode(name : string, properties : CodeMirror.Mode<any>);

    export function on(element : any, eventName : string, handler : Function);

    export function off(element : any, eventName : string, handler : Function);

    /**
     * Fired whenever a change occurs to the document. changeObj has a similar type as the object passed to the editor's "change" event,
     * but it never has a next property, because document change events are not batched (whereas editor change events are).
     * @param {CodeMirror.Doc} doc
     * @param {*} eventName
     * @param {*} handler
     */
    export function on(doc : CodeMirror.Doc, eventName : "change", handler : (p1: CodeMirror.Doc, p2: CodeMirror.EditorChange) => void);

    export function off(doc : CodeMirror.Doc, eventName : "change", handler : (p1: CodeMirror.Doc, p2: CodeMirror.EditorChange) => void);

    /**
     * See the description of the same event on editor instances.
     * @param {CodeMirror.Doc} doc
     * @param {*} eventName
     * @param {*} handler
     */
    export function on(doc : CodeMirror.Doc, eventName : "beforeChange", handler : (p1: CodeMirror.Doc, p2: CodeMirror.EditorChangeCancellable) => void);

    export function off(doc : CodeMirror.Doc, eventName : "beforeChange", handler : (p1: CodeMirror.Doc, p2: CodeMirror.EditorChangeCancellable) => void);

    /**
     * Fired whenever the cursor or selection in this document changes.
     * @param {CodeMirror.Doc} doc
     * @param {*} eventName
     * @param {*} handler
     */
    export function on(doc : CodeMirror.Doc, eventName : "cursorActivity", handler : (p1: CodeMirror.Editor) => void);

    export function off(doc : CodeMirror.Doc, eventName : "cursorActivity", handler : (p1: CodeMirror.Editor) => void);

    /**
     * Equivalent to the event by the same name as fired on editor instances.
     * @param {CodeMirror.Doc} doc
     * @param {*} eventName
     * @param {*} handler
     */
    export function on(doc : CodeMirror.Doc, eventName : "beforeSelectionChange", handler : (p1: CodeMirror.Editor, p2: any) => void);

    export function off(doc : CodeMirror.Doc, eventName : "beforeSelectionChange", handler : (p1: CodeMirror.Editor, p2: any) => void);

    /**
     * Will be fired when the line object is deleted. A line object is associated with the start of the line.
     * Mostly useful when you need to find out when your gutter markers on a given line are removed.
     * @param {*} line
     * @param {string} eventName
     * @param {() => void} handler
     */
    export function on(line : CodeMirror.LineHandle, eventName : string, handler : () => void);

    export function off(line : CodeMirror.LineHandle, eventName : string, handler : () => void);

    /**
     * Fires when the line's text content is changed in any way (but the line is not deleted outright).
     * The change object is similar to the one passed to change event on the editor object.
     * @param {*} line
     * @param {*} eventName
     * @param {*} handler
     */
    export function on(line : CodeMirror.LineHandle, eventName : "change", handler : (p1: CodeMirror.LineHandle, p2: CodeMirror.EditorChange) => void);

    export function off(line : CodeMirror.LineHandle, eventName : "change", handler : (p1: CodeMirror.LineHandle, p2: CodeMirror.EditorChange) => void);

    /**
     * Fired when the cursor enters the marked range. From this event handler, the editor state may be inspected but not modified,
     * with the exception that the range on which the event fires may be cleared.
     * @param {*} marker
     * @param {*} eventName
     * @param {() => void} handler
     */
    export function on(marker : CodeMirror.TextMarker, eventName : "beforeCursorEnter", handler : () => void);

    export function off(marker : CodeMirror.TextMarker, eventName : "beforeCursorEnter", handler : () => void);

    /**
     * Fired when the range is cleared, either through cursor movement in combination with clearOnEnter or through a call to its clear() method.
     * Will only be fired once per handle. Note that deleting the range through text editing does not fire this event,
     * because an undo action might bring the range back into existence.
     * @param {*} marker
     * @param {*} eventName
     * @param {() => void} handler
     */
    export function on(marker : CodeMirror.TextMarker, eventName : "clear", handler : () => void);

    export function off(marker : CodeMirror.TextMarker, eventName : "clear", handler : () => void);

    /**
     * Fired when the last part of the marker is removed from the document by editing operations.
     * @param {*} marker
     * @param {*} eventName
     * @param {() => void} handler
     */
    export function on(marker : CodeMirror.TextMarker, eventName : "hide", handler : () => void);

    export function off(marker : CodeMirror.TextMarker, eventName : "hide", handler : () => void);

    /**
     * Fired when, after the marker was removed by editing, a undo operation brought the marker back.
     * @param {*} marker
     * @param {*} eventName
     * @param {() => void} handler
     */
    export function on(marker : CodeMirror.TextMarker, eventName : "unhide", handler : () => void);

    export function off(marker : CodeMirror.TextMarker, eventName : "unhide", handler : () => void);

    /**
     * Fired whenever the editor re-adds the widget to the DOM. This will happen once right after the widget is added (if it is scrolled into view),
     * and then again whenever it is scrolled out of view and back in again, or when changes to the editor options
     * or the line the widget is on require the widget to be redrawn.
     * @param {*} line
     * @param {*} eventName
     * @param {() => void} handler
     */
    export function on(line : CodeMirror.LineWidget, eventName : "redraw", handler : () => void);

    export function off(line : CodeMirror.LineWidget, eventName : "redraw", handler : () => void);

    /**
     * Various CodeMirror-related objects emit events, which allow client code to react to various situations.
     * Handlers for such events can be registered with the on and off methods on the objects that the event fires on.
     * To fire your own events, use CodeMirror.signal(target, name, args...), where target is a non-DOM-node object.
     * @param {*} target
     * @param {string} name
     * @param {Array} args
     */
    export function signal(target : any, name : string, ...args : any[]);

    /**
     * id will be the id for the defined mode. Typically, you should use this second argument to defineMode as your module scope function
     * (modes should not leak anything into the global scope!), i.e. write your whole mode inside this function.
     * @param {string} id
     * @param {CodeMirror.Globals.ModeFactoryAny} modefactory
     */
    export function defineMode(id : string, modefactory : any);

    /**
     * id will be the id for the defined mode. Typically, you should use this second argument to defineMode as your module scope function
     * (modes should not leak anything into the global scope!), i.e. write your whole mode inside this function.
     * @param {string} id
     * @param {CodeMirror.Globals.ModeFactoryT} modefactory
     */
    export function defineMode<T>(id : string, modefactory : any);

    /**
     * The first argument is a configuration object as passed to the mode constructor function, and the second argument
     * is a mode specification as in the EditorConfiguration mode option.
     * @param {*} config
     * @param {*} mode
     * @return {*}
     */
    export function getMode<T>(config : CodeMirror.EditorConfiguration, mode : any) : CodeMirror.Mode<T>;

    /**
     * Utility function from the overlay.js addon that allows modes to be combined. The mode given as the base argument takes care of
     * most of the normal mode functionality, but a second (typically simple) mode is used, which can override the style of text.
     * Both modes get to parse all of the text, but when both assign a non-null style to a piece of code, the overlay wins, unless
     * the combine argument was true and not overridden, or state.overlay.combineTokens was true, in which case the styles are combined.
     * @param {*} base
     * @param {*} overlay
     * @param {boolean} combine
     * @return {*}
     */
    export function overlayMode<T, S>(base : CodeMirror.Mode<T>, overlay : CodeMirror.Mode<S>, combine : boolean) : CodeMirror.Mode<any>;

    /**
     * A function that calculates either a two-way or three-way merge between different sets of content.
     * @param {HTMLElement} element
     * @param {*} options
     * @return {*}
     */
    export function MergeView(element : HTMLElement, options : CodeMirror.MergeView.MergeViewEditorConfiguration) : CodeMirror.MergeView.MergeViewEditor;

    export function fromTextArea(host : HTMLTextAreaElement) : CodeMirror.EditorFromTextArea;

    /**
     * Utility function from the overlay.js addon that allows modes to be combined. The mode given as the base argument takes care of
     * most of the normal mode functionality, but a second (typically simple) mode is used, which can override the style of text.
     * Both modes get to parse all of the text, but when both assign a non-null style to a piece of code, the overlay wins, unless
     * the combine argument was true and not overridden, or state.overlay.combineTokens was true, in which case the styles are combined.
     * @param {*} base
     * @param {*} overlay
     * @return {*}
     */
    export function overlayMode<T, S>(base : CodeMirror.Mode<T>, overlay : CodeMirror.Mode<S>) : CodeMirror.Mode<any>;

    /**
     * A function that calculates either a two-way or three-way merge between different sets of content.
     * @param {HTMLElement} element
     * @return {*}
     */
    export function MergeView(element : HTMLElement) : CodeMirror.MergeView.MergeViewEditor;

}
declare namespace CodeMirror {}
declare namespace CodeMirror {
    export interface KeyMap {
        [keyName : string]: ((string)|((p1: CodeMirror.Editor) => any));
    }
}
declare namespace CodeMirror {
    export interface LineHandle {
        text : string;
    }
}
declare namespace CodeMirror {
    export interface LineWidget {
        /**
         * Removes the widget.
         */
        clear();

        /**
         * Call this if you made some change to the widget's DOM node that might affect its height.
         * It'll force CodeMirror to update the height of the line that contains the widget.
         */
        changed();
    }
}
declare namespace CodeMirror {
    export interface LineWidgetOptions {
        /**
         * Whether the widget should cover the gutter.
         */
        coverGutter? : boolean;

        /**
         * Whether the widget should stay fixed in the face of horizontal scrolling.
         */
        noHScroll? : boolean;

        /**
         * Causes the widget to be placed above instead of below the text of the line.
         */
        above? : boolean;

        /**
         * When true, will cause the widget to be rendered even if the line it is associated with is hidden.
         */
        showIfHidden? : boolean;
    }
}
declare namespace CodeMirror {
    /**
     * A function that return errors found during the linting process.
     * @class
     */
    export interface Linter {
        apply(content : string, options : CodeMirror.LintStateOptions, codeMirror : CodeMirror.Editor) : ((CodeMirror.Annotation[])|(PromiseLike<CodeMirror.Annotation[]>));
    }
}
declare namespace CodeMirror {
    /**
     * Adds the getAnnotations callback to LintStateOptions which may be overridden by the user if they choose use their own
     * linter.
     * @class
     * @extends *
     */
    export interface LintOptions extends CodeMirror.LintStateOptions {
        getAnnotations : ((CodeMirror.Linter)|(CodeMirror.AsyncLinter));
    }
}
declare namespace CodeMirror {
    /**
     * async specifies that the lint process runs asynchronously. hasGutters specifies that lint errors should be displayed in the CodeMirror
     * gutter, note that you must use this in conjunction with [ "CodeMirror-lint-markers" ] as an element in the gutters argument on
     * initialization of the CodeMirror instance.
     * @class
     * @extends Object
     */
    export interface LintStateOptions {
        async : boolean;

        hasGutters : boolean;

        onUpdateLinting? : (p1: CodeMirror.Annotation[], p2: CodeMirror.Annotation[], p3: CodeMirror.Editor) => void;
    }
}
declare namespace CodeMirror.MergeView {
    export interface DiffView {
        /**
         * Forces the view to reload.
         * @return {*}
         */
        forceUpdate() : (p1: string) => void;

        /**
         * Sets whether or not the merge view should show the differences between the editor views.
         * @param {boolean} showDifferences
         */
        setShowDifferences(showDifferences : boolean);
    }
}
declare namespace CodeMirror.MergeView {
    /**
     * Tracks changes in chunks from oroginal to new.
     * @class
     * @extends Object
     */
    export interface MergeViewDiffChunk {
        editFrom : number;

        editTo : number;

        origFrom : number;

        origTo : number;
    }
}
declare namespace CodeMirror.MergeView {
    export interface MergeViewEditor extends CodeMirror.Editor {
        /**
         * Returns the editor instance.
         * @return {*}
         */
        editor() : CodeMirror.Editor;

        /**
         * Left side of the merge view.
         */
        left : CodeMirror.MergeView.DiffView;

        leftChunks() : CodeMirror.MergeView.MergeViewDiffChunk[];

        leftOriginal() : CodeMirror.Editor;

        /**
         * Right side of the merge view.
         */
        right : CodeMirror.MergeView.DiffView;

        rightChunks() : CodeMirror.MergeView.MergeViewDiffChunk[];

        rightOriginal() : CodeMirror.Editor;

        /**
         * Sets whether or not the merge view should show the differences between the editor views.
         * @param {boolean} showDifferences
         */
        setShowDifferences(showDifferences : boolean);
    }
}
declare namespace CodeMirror.MergeView {
    /**
     * Options available to MergeView.
     * @class
     * @extends *
     */
    export interface MergeViewEditorConfiguration extends CodeMirror.EditorConfiguration {
        /**
         * Determines whether the original editor allows editing. Defaults to false.
         */
        allowEditingOriginals? : boolean;

        /**
         * When true stretches of unchanged text will be collapsed. When a number is given, this indicates the amount
         * of lines to leave visible around such stretches (which defaults to 2). Defaults to false.
         */
        collapseIdentical? : ((boolean)|(number));

        /**
         * Sets the style used to connect changed chunks of code. By default, connectors are drawn. When this is set to "align",
         * the smaller chunk is padded to align with the bigger chunk instead.
         */
        connect? : string;

        /**
         * Callback for when stretches of unchanged text are collapsed.
         * @param {*} mergeView
         * @param {number} line
         * @param {number} size
         * @param {*} mark
         */
        onCollapse(mergeView : CodeMirror.MergeView.MergeViewEditor, line : number, size : number, mark : CodeMirror.TextMarker);

        /**
         * Provides original version of the document to be shown on the right of the editor.
         */
        orig : any;

        /**
         * Provides original version of the document to be shown on the left of the editor.
         * To create a 2-way (as opposed to 3-way) merge view, provide only one of origLeft and origRight.
         */
        origLeft? : any;

        /**
         * Provides original version of document to be shown on the right of the editor.
         * To create a 2-way (as opposed to 3-way) merge view, provide only one of origLeft and origRight.
         */
        origRight? : any;

        /**
         * Determines whether buttons that allow the user to revert changes are shown. Defaults to true.
         */
        revertButtons? : boolean;

        /**
         * When true, changed pieces of text are highlighted. Defaults to true.
         */
        showDifferences? : boolean;
    }
}
declare namespace CodeMirror.MergeView {}
declare namespace CodeMirror {
    /**
     * A Mode is, in the simplest case, a lexer (tokenizer) for your language — a function that takes a character stream as input,
     * advances it past a token, and returns a style for that token. More advanced modes can also handle indentation for the language.
     * @class
     * @extends Object
     */
    export interface Mode<T> {
        /**
         * This function should read one token from the stream it is given as an argument, optionally update its state,
         * and return a style string, or null for tokens that do not have to be styled. Multiple styles can be returned, separated by spaces.
         */
        token? : (p1: CodeMirror.StringStream, p2: T) => string;

        /**
         * A function that produces a state object to be used at the start of a document.
         */
        startState? : () => T;

        /**
         * For languages that have significant blank lines, you can define a blankLine(state) method on your mode that will get called
         * whenever a blank line is passed over, so that it can update the parser state.
         */
        blankLine? : (p1: T) => void;

        /**
         * Given a state returns a safe copy of that state.
         */
        copyState? : (p1: T) => T;

        /**
         * The indentation method should inspect the given state object, and optionally the textAfter string, which contains the text on
         * the line that is being indented, and return an integer, the amount of spaces to indent.
         */
        indent? : (p1: T, p2: string) => number;

        /**
         * String that starts a line comment.
         */
        lineComment? : string;

        /**
         * String that starts a block comment.
         */
        blockCommentStart? : string;

        /**
         * String that ends a block comment.
         */
        blockCommentEnd? : string;

        /**
         * String to put at the start of continued lines in a block comment.
         */
        blockCommentLead? : string;

        /**
         * Trigger a reindent whenever one of the characters in the string is typed.
         */
        electricChars? : string;

        /**
         * Trigger a reindent whenever the regex matches the part of the line before the cursor.
         */
        electricinput? : RegExp;
    }
}
declare namespace CodeMirror {
    /**
     * A function that, given a CodeMirror configuration object and an optional mode configuration object, returns a mode object.
     * @class
     */
    export interface ModeFactory<T> {
        apply(config : CodeMirror.EditorConfiguration, modeOptions : any) : CodeMirror.Mode<T>;

        apply(config : CodeMirror.EditorConfiguration) : CodeMirror.Mode<T>;
    }
}
declare namespace CodeMirror {}
declare namespace CodeMirror {}
declare namespace CodeMirror {
    export interface Position {
        ch : number;

        line : number;
    }
}
declare namespace CodeMirror {
    export interface PositionConstructor {
        constructor(line : number, ch : number);

        apply(line : number, ch : number) : CodeMirror.Position;

        apply(line : number) : CodeMirror.Position;
    }
}
declare namespace CodeMirror {
    export interface Range {
        anchor : CodeMirror.Position;

        head : CodeMirror.Position;

        from() : CodeMirror.Position;

        to() : CodeMirror.Position;
    }
}
declare namespace CodeMirror {
    export interface ScrollInfo {
        left : any;

        top : any;

        width : any;

        height : any;

        clientWidth : any;

        clientHeight : any;
    }
}
declare namespace CodeMirror {}
declare namespace CodeMirror {
    export interface StringStream {
        lastColumnPos : number;

        lastColumnValue : number;

        lineStart : number;

        /**
         * Current position in the string.
         */
        pos : number;

        /**
         * Where the stream's position was when it was first passed to the token function.
         */
        start : number;

        /**
         * The current line's content.
         */
        string : string;

        /**
         * Number of spaces per tab character.
         */
        tabSize : number;

        /**
         * Returns true only if the stream is at the end of the line.
         * @return {boolean}
         */
        eol() : boolean;

        /**
         * Returns true only if the stream is at the start of the line.
         * @return {boolean}
         */
        sol() : boolean;

        /**
         * Returns the next character in the stream without advancing it. Will return an null at the end of the line.
         * @return {string}
         */
        peek() : string;

        /**
         * Returns the next character in the stream and advances it. Also returns null when no more characters are available.
         * @return {string}
         */
        next() : string;

        /**
         * match can be a character, a regular expression, or a function that takes a character and returns a boolean.
         * If the next character in the stream 'matches' the given argument, it is consumed and returned.
         * Otherwise, undefined is returned.
         * @param {string} match
         * @return {string}
         */
        eat(match : string) : string;

        eat(match : RegExp) : string;

        eat(match : (p1: string) => boolean) : string;

        /**
         * Repeatedly calls eat with the given argument, until it fails. Returns true if any characters were eaten.
         * @param {string} match
         * @return {boolean}
         */
        eatWhile(match : string) : boolean;

        eatWhile(match : RegExp) : boolean;

        eatWhile(match : (p1: string) => boolean) : boolean;

        /**
         * Shortcut for eatWhile when matching white-space.
         * @return {boolean}
         */
        eatSpace() : boolean;

        /**
         * Moves the position to the end of the line.
         */
        skipToEnd();

        /**
         * Skips to the next occurrence of the given character, if found on the current line (doesn't advance the stream if
         * the character does not occur on the line).
         * 
         * Returns true if the character was found.
         * @param {string} ch
         * @return {boolean}
         */
        skipTo(ch : string) : boolean;

        /**
         * Act like a multi-character eat - if consume is true or not given - or a look-ahead that doesn't update the stream
         * position - if it is false. pattern can be either a string or a regular expression starting with ^. When it is a
         * string, caseFold can be set to true to make the match case-insensitive. When successfully matching a regular
         * expression, the returned value will be the array returned by match, in case you need to extract matched groups.
         * @param {string} pattern
         * @param {boolean} consume
         * @param {boolean} caseFold
         * @return {boolean}
         */
        match(pattern : string, consume : boolean, caseFold : boolean) : boolean;

        match(pattern : RegExp, consume : boolean) : string[];

        /**
         * Backs up the stream n characters. Backing it up further than the start of the current token will cause things to
         * break, so be careful.
         * @param {number} n
         */
        backUp(n : number);

        /**
         * Returns the column (taking into account tabs) at which the current token starts.
         * @return {number}
         */
        column() : number;

        /**
         * Tells you how far the current line has been indented, in spaces. Corrects for tab characters.
         * @return {number}
         */
        indentation() : number;

        /**
         * Get the string between the start of the current token and the current stream position.
         * @return {string}
         */
        current() : string;

        /**
         * Act like a multi-character eat - if consume is true or not given - or a look-ahead that doesn't update the stream
         * position - if it is false. pattern can be either a string or a regular expression starting with ^. When it is a
         * string, caseFold can be set to true to make the match case-insensitive. When successfully matching a regular
         * expression, the returned value will be the array returned by match, in case you need to extract matched groups.
         * @param {string} pattern
         * @param {boolean} consume
         * @return {boolean}
         */
        match(pattern : string, consume : boolean) : boolean;

        /**
         * Act like a multi-character eat - if consume is true or not given - or a look-ahead that doesn't update the stream
         * position - if it is false. pattern can be either a string or a regular expression starting with ^. When it is a
         * string, caseFold can be set to true to make the match case-insensitive. When successfully matching a regular
         * expression, the returned value will be the array returned by match, in case you need to extract matched groups.
         * @param {string} pattern
         * @return {boolean}
         */
        match(pattern : string) : boolean;

        match(pattern : RegExp) : string[];
    }
}
declare namespace CodeMirror {
    export interface TextMarker {
        /**
         * Remove the mark.
         */
        clear();

        /**
         * Returns a {from, to} object (both holding document positions), indicating the current position of the marked range,
         * or undefined if the marker is no longer in the document.
         * @return {CodeMirror.TextMarker.Find}
         */
        find() : any;

        /**
         * Called when you've done something that might change the size of the marker and want to cheaply update the display
         */
        changed();

        /**
         * Returns an object representing the options for the marker. If copyWidget is given true, it will clone the value of the replacedWith option, if any.
         * @param {boolean} copyWidget
         * @return {*}
         */
        getOptions(copyWidget : boolean) : CodeMirror.TextMarkerOptions;

        /**
         * Fired when the cursor enters the marked range
         * @param {*} eventName
         * @param {() => void} handler
         */
        on(eventName : "beforeCursorEnter", handler : () => void);

        off(eventName : "beforeCursorEnter", handler : () => void);

        /**
         * Fired when the range is cleared, either through cursor movement in combination with clearOnEnter or through a call to its clear() method
         * @param {*} eventName
         * @param {*} handler
         */
        on(eventName : "clear", handler : (p1: CodeMirror.Position, p2: CodeMirror.Position) => void);

        off(eventName : "clear", handler : () => void);

        /**
         * Fired when the last part of the marker is removed from the document by editing operations
         * @param {*} eventName
         * @param {() => void} handler
         */
        on(eventName : "hide", handler : () => void);

        off(eventname : "hide", handler : () => void);

        /**
         * Fired when, after the marker was removed by editing, a undo operation brough the marker back
         * @param {*} eventName
         * @param {() => void} handler
         */
        on(eventName : "unhide", handler : () => void);

        off(eventname : "unhide", handler : () => void);
    }
}
declare namespace CodeMirror {
    export interface TextMarkerOptions {
        /**
         * Assigns a CSS class to the marked stretch of text.
         */
        className? : string;

        /**
         * Determines whether text inserted on the left of the marker will end up inside or outside of it.
         */
        inclusiveLeft? : boolean;

        /**
         * Like inclusiveLeft , but for the right side.
         */
        inclusiveRight? : boolean;

        /**
         * Atomic ranges act as a single unit when cursor movement is concerned — i.e. it is impossible to place the cursor inside of them.
         * In atomic ranges, inclusiveLeft and inclusiveRight have a different meaning — they will prevent the cursor from being placed
         * respectively directly before and directly after the range.
         */
        atomic? : boolean;

        /**
         * Collapsed ranges do not show up in the display.Setting a range to be collapsed will automatically make it atomic.
         */
        collapsed? : boolean;

        /**
         * When enabled, will cause the mark to clear itself whenever the cursor enters its range.
         * This is mostly useful for text - replacement widgets that need to 'snap open' when the user tries to edit them.
         * The "clear" event fired on the range handle can be used to be notified when this happens.
         */
        clearOnEnter? : boolean;

        /**
         * Determines whether the mark is automatically cleared when it becomes empty. Default is true.
         */
        clearWhenEmpty? : boolean;

        /**
         * Use a given node to display this range.Implies both collapsed and atomic.
         * The given DOM node must be an inline element(as opposed to a block element).
         */
        replacedWith? : HTMLElement;

        /**
         * When replacedWith is given, this determines whether the editor will
         * capture mouse and drag events occurring in this widget. Default is
         * false—the events will be left alone for the default browser handler,
         * or specific handlers on the widget, to capture.
         */
        handleMouseEvents? : boolean;

        /**
         * A read - only span can, as long as it is not cleared, not be modified except by calling setValue to reset the whole document.
         * Note: adding a read - only span currently clears the undo history of the editor,
         * because existing undo events being partially nullified by read - only spans would corrupt the history (in the current implementation).
         */
        readOnly? : boolean;

        /**
         * When set to true (default is false), adding this marker will create an event in the undo history that can be individually undone(clearing the marker).
         */
        addToHistory? : boolean;

        /**
         * Can be used to specify an extra CSS class to be applied to the leftmost span that is part of the marker.
         */
        startStyle? : string;

        /**
         * Equivalent to startStyle, but for the rightmost span.
         */
        endStyle? : string;

        /**
         * A string of CSS to be applied to the covered text. For example "color: #fe3".
         */
        css? : string;

        /**
         * When given, will give the nodes created for this span a HTML title attribute with the given value.
         */
        title? : string;

        /**
         * When the target document is linked to other documents, you can set shared to true to make the marker appear in all documents.
         * By default, a marker appears only in its target document.
         */
        shared? : boolean;
    }
}
declare namespace CodeMirror {
    export interface Token {
        /**
         * The character(on the given line) at which the token starts.
         */
        start : number;

        /**
         * The character at which the token ends.
         */
        end : number;

        /**
         * The token's string.
         */
        string : string;

        /**
         * The token type the mode assigned to the token, such as "keyword" or "comment" (may also be null).
         */
        type : string;

        /**
         * The mode's state at the end of this token.
         */
        state : any;
    }
}
declare namespace CodeMirror {
    /**
     * A function that, given an array of annotations, updates the CodeMirror linting GUI with those annotations
     * @class
     */
    export interface UpdateLintingCallback {
        apply(codeMirror : CodeMirror.Editor, annotations : CodeMirror.Annotation[]);
    }
}
declare function CodeMirror(host : HTMLElement, options : CodeMirror.EditorConfiguration) : CodeMirror.Editor;

declare function CodeMirror(callback : (p1: HTMLElement) => void, options : CodeMirror.EditorConfiguration) : CodeMirror.Editor;

declare function CodeMirror(host : HTMLElement) : CodeMirror.Editor;

declare function CodeMirror(callback : (p1: HTMLElement) => void) : CodeMirror.Editor;


interface StringTypes {}

declare namespace StringTypes {

    /**
     * Generated to type the string "change".
     * @exclude
     * @class
     */
    export interface change {    }

    /**
     * Generated to type the string "beforeChange".
     * @exclude
     * @class
     */
    export interface beforeChange {    }

    /**
     * Generated to type the string "cursorActivity".
     * @exclude
     * @class
     */
    export interface cursorActivity {    }

    /**
     * Generated to type the string "beforeSelectionChange".
     * @exclude
     * @class
     */
    export interface beforeSelectionChange {    }

    /**
     * Generated to type the string "beforeCursorEnter".
     * @exclude
     * @class
     */
    export interface beforeCursorEnter {    }

    /**
     * Generated to type the string "clear".
     * @exclude
     * @class
     */
    export interface clear {    }

    /**
     * Generated to type the string "hide".
     * @exclude
     * @class
     */
    export interface hide {    }

    /**
     * Generated to type the string "unhide".
     * @exclude
     * @class
     */
    export interface unhide {    }

    /**
     * Generated to type the string "redraw".
     * @exclude
     * @class
     */
    export interface redraw {    }

    /**
     * Generated to type the string "window".
     * @exclude
     * @class
     */
    export interface window {    }

    /**
     * Generated to type the string "page".
     * @exclude
     * @class
     */
    export interface page {    }

    /**
     * Generated to type the string "local".
     * @exclude
     * @class
     */
    export interface local {    }

    /**
     * Generated to type the string "changes".
     * @exclude
     * @class
     */
    export interface changes {    }

    /**
     * Generated to type the string "viewportChange".
     * @exclude
     * @class
     */
    export interface viewportChange {    }

    /**
     * Generated to type the string "gutterClick".
     * @exclude
     * @class
     */
    export interface gutterClick {    }

    /**
     * Generated to type the string "focus".
     * @exclude
     * @class
     */
    export interface focus {    }

    /**
     * Generated to type the string "blur".
     * @exclude
     * @class
     */
    export interface blur {    }

    /**
     * Generated to type the string "scroll".
     * @exclude
     * @class
     */
    export interface scroll {    }

    /**
     * Generated to type the string "update".
     * @exclude
     * @class
     */
    export interface update {    }

    /**
     * Generated to type the string "renderLine".
     * @exclude
     * @class
     */
    export interface renderLine {    }

    /**
     * Generated to type the string "CodeMirror.PASS".
     * @exclude
     * @class
     */
    export interface CodeMirror_PASS {    }
}



