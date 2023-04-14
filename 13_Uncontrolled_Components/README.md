30 Days Of React: Uncontrolled Component

https://github.com/Asabeneh/30-Days-Of-React/blob/master/13_Day_Controlled_Versus_Uncontrolled_Input/13_uncontrolled_input.md

// Controlled:
<input type="text" value={value} onChange={handleChange} />

// Uncontrolled:
<input type="text" defaultValue="foo" ref={inputRef} />
// Use `inputRef.current.value` to read the current value of <input>
