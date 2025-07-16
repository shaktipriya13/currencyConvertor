<img width="1241" height="408" alt="image" src="https://github.com/user-attachments/assets/fb27b8a2-cf6b-4ee9-968e-5e425b89cdb5" />
useeId is a React hook that generates a unique ID. Useful for associating a <label> with an <input>.

<img width="1130" height="682" alt="image" src="https://github.com/user-attachments/assets/a6af688c-7bd8-4922-a14c-cfba9d6adcc3" />


✅ What’s Happening:
type="text"

Normally allows any characters (letters, symbols, digits).

Manual Filtering (Regex):

rawValue.replace(/\D/g, "")

\D = any character that is not a digit (0–9)

g = global flag (affects all characters)

So, this removes all non-digit characters.

Examples:

"123abc" → "123"

"0.5" → "05" → "5"

"12@#3" → "123"

Leading Zeros Are Removed:

rawValue.replace(/^0+(?!$)/, "")

^0+ = match one or more 0s at the start of the string

(?!$) = only if not followed by the end of string (i.e., don’t remove if it's just "0")

Examples:

"0005" → "5"

"000" → "0"

Then it calls onAmountChange(rawValue):

Passes the cleaned-up number string (e.g., "123") to the parent component.

The parent updates the amount prop, which reflects back in the input box.

❗Why not use type="number"?
Good question!

While type="number" is an option, it:

Still allows typing e, +, and . in some browsers.

Doesn't prevent non-numeric copy-paste.

Has inconsistent behavior across mobile and desktop.

So, this method:
✅ Gives more control
✅ Ensures only digits
✅ Cross-browser consistency

🧠 TL;DR:
The input is made number-only using JavaScript, not HTML:

All non-digit characters are removed via .replace(/\D/g, "")

It's a controlled input, so only cleaned values appear
