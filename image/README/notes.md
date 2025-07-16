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

Sure! Here's a **short and clear explanation** of how your currency converter project works — including the **motto**, **how it works behind the scenes**, and **math logic**:

---

### 🎯 **Motto (Goal)**

To **convert an amount from one currency to another** (e.g., USD to INR) using real-time exchange rates from a public API.

---

### ⚙️ **How It Works (Behind the Scenes)**

1. **User selects currencies (From & To)** using dropdowns.
2. **User enters an amount** (e.g., 100).
3. On **form submit**:

   * Your app calls an **API** (e.g., `https://api.exchangerate-api.com/v4/latest/usd`) using a custom hook (`useCurrencyInfo`).
   * This API returns a big list of **exchange rates** like:

     ```json
     {
       "usd": 1,
       "inr": 83.2,
       "eur": 0.92,
       ...
     }
     ```
4. Your app **picks the rate** for the `to` currency (e.g., `inr`) from that list.

---

### 🧮 **Math Behind It**

If:

* From = `usd`
* To = `inr`
* Amount = `100`
* Rate = `83.2` (i.e., 1 USD = 83.2 INR)

Then:

```js
convertedAmount = amount * rate = 100 * 83.2 = 8320 INR
```

This `convertedAmount` is then displayed in the output field.

---

### 🔁 Optional: Swap Function

The **swap button** just swaps the `from` and `to` currencies and also exchanges the values of `amount` and `convertedAmount`.

---

### ✅ Summary

* Fetches **real-time currency rates** from an API.
* Converts `amount * rate` to get the result.
* Lets users **swap currencies** easily.
* Clean React design using hooks and components.

Let me know if you want a diagram or flowchart too!

