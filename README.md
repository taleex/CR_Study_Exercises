# CR_Study_Exercises

A collection of JavaScript/TypeScript study exercises organized by topic and difficulty. Each folder captures progressive learning on specific concepts.

---

## 📁 90DaysLearning

### week1 — JavaScript Array Methods

Progressive exercises on core array iteration methods.

| File | Topic | Exercises |
|------|-------|-----------|
| `day1-map.js` | `Array.map()` | Tripling numbers, extracting names from objects, transforming object properties |
| `day2-filter.js` | `Array.filter()` | Filtering even numbers, active users, products above a price threshold |
| `day3-reduce.js` | `Array.reduce()` | Summing prices, counting delivered orders, counting fruit occurrences into an object |
| `day4-FindSomeEvery.js` | `find`, `some`, `every` | Finding first active user, checking age conditions, validating stock status, score thresholds |
| `day5-mix.js` | Chaining methods | Filter + reduce (total of delivered orders), filter + map (names of active users), filter + reduce with 10% discount on in-stock products |

**Key Learning:** Combining array methods through chaining to solve multi-step data transformations.

---

### week2 — Promises, Async/Await & Fetch API

Progressive exercises on asynchronous JavaScript.

| File | Topic | Exercises |
|------|-------|-----------|
| `day6-promise.js` | Promises & async/await | Basic Promise with resolve/reject, simulated 2s API call with `setTimeout`, converting to async/await with try/catch |
| `day7-api.js` | Fetch API | Calling JSONPlaceholder `/users` endpoint, transforming response data (map + filter by email domain) |
| `day8-ApiId.js` | Dynamic API calls | Fetching a user by ID via template literal, then fetching related posts using the user ID |
| `day9-reusableFetch.js` | Reusable fetch pattern | Generic `useSearchQuery` function returning `{ data, isLoading, error }` — a mini custom hook pattern |
| `day10-mix.js` | Composing async operations | Fetching user + posts by ID, filtering posts by title length, mapping to compact shape, returning structured response |

**Key Learning:** Promise lifecycle, async/await error handling, URL parameterization, creating reusable fetch wrappers, composing multiple API calls.

---

### week3 — Functions & Closures

| File | Topic | Exercises |
|------|-------|-----------|
| `day11-function.js` | Factory functions & closures | `makeMultiplier` — function returning a function (closure over multiplier), `makeWallet` — private variable pattern via closure with `deposit`/`getBalance` methods |

**Key Learning:** Closure scope, factory function pattern, encapsulation through closures (private state).

---

## 📁 leetcode

| File | Topic | Description |
|------|-------|-------------|
| `leetcode.ts` | Array filter (TypeScript) | LeetCode-style implementation of a `filter` function that applies a predicate `Fn` to each element — demonstrates typed generic callback patterns |

*(Note: This file may contain an in-progress solution — `Fn` is called as a constructor rather than the parameter name.)*

---

## 📁 AdditionalLearning

### Vitest — Testing Setup with In-Source Testing

A Vite + TypeScript + Vitest project demonstrating **in-source testing** (tests co-located with source code).

| File | Purpose |
|------|---------|
| `src/sum.ts` | A `sum(...numbers)` function using reduce, with inline vitest tests using `import.meta.vitest` |
| `src/main.ts` | Entry point — renders sum result into the DOM |
| `vite.config.ts` | Vitest config: enables in-source testing, coverage reporter (text + HTML), strips test code from production builds |
| `tsconfig.json` | TypeScript config targeting ES2022, enables `vitest/importMeta` types |
| `package.json` | Project scripts: `dev`, `build`, `test` (with coverage) |

**Key Learning:** In-source testing pattern, Vitest setup with Vite, conditional test blocks guarded by `import.meta.vitest`, stripping test code from production builds via `define`.

---