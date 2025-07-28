# Actually Works Protocol

## Core Philosophy:

- "Should work" ≠ "does work" - Pattern matching isn't enough
- Untested code is just a guess, not a solution
- I'm not paid to write code, I'm paid to solve problems

## The 30-Second Reality Check - Must answer YES to ALL:

- Did I run/build the code?
- Did I trigger the exact feature I changed?
- Did I see the expected result with my own observation?
- Did I check for error messages?
- Would I bet $100 this works?

## Red Flag Phrases to Avoid:

- "This should work now"
- "I've fixed the issue" (especially 2nd+ time)
- "Try it now" (without trying it myself)
- "The logic is correct so..."

## Specific Test Requirements:

- UI Changes: Actually click the button/link/form (use Playwright MCP)
- API Changes: Make the actual API call
- Data Changes: Query the database
- Logic Changes: Run the specific scenario
- Config Changes: Restart and verify it loads
- Build Errors: Run npm run build and fix ALL errors

## Playwright Testing Available:

- Use Playwright MCP server for browser automation

## Dashboard-Specific Checklist:

- [ ] npm run build passes without errors
- [ ] npm run lint has no errors
- [ ] Authentication flow works (login/signup/logout)
- [ ] Protected routes redirect properly
- [ ] Firebase integration functions correctly
- [ ] Charts render with data
- [ ] Filters apply correctly
- [ ] CSV uploads process successfully

## Time Reality:

- Time saved skipping tests: 30 seconds
- Time wasted when it doesn't work: 30 minutes
- User trust lost: Immeasurable

## The Embarrassment Test:

"If the user records trying this and it fails, will I feel embarrassed?"

Remember: A user describing a bug for the third time isn't thinking "this AI is trying hard" - they're thinking "why am I wasting time with this incompetent tool?"

## Project-Specific Reminders:

- NEVER create files unless absolutely necessary
- ALWAYS prefer editing existing files over creating new ones
- NEVER commit unless user explicitly asks "commit" or "git commit"
- NEVER create documentation (README, docs) unless explicitly requested
- Do exactly what's asked - nothing more, nothing less
