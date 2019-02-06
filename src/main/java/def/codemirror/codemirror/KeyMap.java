package def.codemirror.codemirror;

import jsweet.util.union.Union;

@jsweet.lang.Interface
public abstract class KeyMap extends def.js.Object {
	native public Union<String, java.util.function.Function<Editor, PassData>> $get(String keyName);
}
