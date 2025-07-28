# Claude Command: Issue

This command integrates with GitHub issues - creating well-structured issues from unformatted text descriptions.

## Usage

```
/issue create "your unformatted description here"
/issue suggest     # Analyze codebase and create issues for all findings
/issue list
/issue close 123
/issue commit 123  # Creates commit linked to issue #123
/issue branch 123  # Creates branch for issue
/issue view 123    # View issue details and description
/issue work        # Analyze and suggest which issue to work on
/issue work 123    # Switch to branch and show context for specific issue
/issue comment 123 "progress update"  # Add comment to issue
```

## What This Command Does

### Create Issue (`/issue create "text"`)

1. **Analysis Phase**:
   - Checks available repository labels first
   - Presents analysis of your input
   - Shows proposed title, type, and validated labels
   - Displays structured description preview
   - Asks for confirmation before creating

2. **Issue Analysis**:
   - Identifies issue type (bug, feature, enhancement)
   - Extracts key problems or requirements
   - Detects technical details (file sizes, error messages, browsers)
   - Recognizes user impact and priority

3. **Title Generation**:
   - Creates concise, searchable title
   - Includes key technical details
   - Under 60 characters
   - Action-oriented when appropriate

4. **Description Structure**:
   - **Bug Reports**:
     - Problem summary
     - Steps to reproduce
     - Expected vs actual behavior
     - Technical environment
     - Error messages/logs
   - **Feature Requests**:
     - Feature overview
     - User story/use case
     - Proposed implementation
     - Acceptance criteria
     - Impact/benefits

5. **Label Validation**:
   - Checks available repository labels with `gh label list`
   - Maps suggested labels to existing ones
   - Only applies labels that exist in the repository
   - Warns if suggested labels don't exist

6. **GitHub Integration**:
   - Creates issue with `gh issue create`
   - Assigns validated labels only
   - Sets priority if detected
   - Returns issue number and URL

### Example Workflow

```bash
/issue create "users are complaining that when they try to upload large pdfs especially ones over 50 megabytes the system just hangs and eventually times out without any error message this is happening on chrome and firefox"

# Claude responds:
# 🏷️ Checking available labels...
# Available: bug, documentation, duplicate, enhancement, good first issue, help wanted, invalid, question, wontfix
# 
# 📋 Issue Analysis:
# 
# Type: Bug Report
# Priority: High (system hang affects user experience)
# 
# Proposed Title: "PDF upload hangs and times out for files over 50MB"
# 
# Labels: bug (note: high-priority, upload, pdf labels don't exist in repository)
# 
# Description Preview:
# ================
# ## Problem
# Users experience system hangs when uploading PDF files larger than 50MB, 
# resulting in timeouts without error messages.
# 
# ## Steps to Reproduce
# 1. Select a PDF file larger than 50MB
# 2. Attempt to upload through the web interface
# 3. Observe system hang
# 4. Wait for timeout (no error displayed)
# 
# ## Expected Behavior
# - Large files should upload with progress indicator
# - Clear error message if file exceeds limits
# - System should remain responsive
# 
# ## Actual Behavior
# - System becomes unresponsive during upload
# - Eventually times out silently
# - No error message displayed to user
# 
# ## Technical Details
# - File size threshold: >50MB
# - Affected browsers: Chrome, Firefox
# - Behavior: Complete system hang
# 
# ## Impact
# Users cannot upload large PDF documents, blocking document processing workflow
# ================
# 
# Create this issue? (Confirm to proceed)

# After confirmation:
# ✅ Created issue #456: PDF upload hangs and times out for files over 50MB
```

### Advanced Examples

```bash
# Complex feature request
/issue create "it would be really nice if when extracting data from CSAs we could have some kind of confidence score for each field so users know which extractions might need manual review especially for complex threshold calculations that span multiple pages"

# Claude analyzes:
# 🏷️ Checking available labels...
# Available: bug, documentation, duplicate, enhancement, good first issue, help wanted, invalid, question, wontfix
# 
# 📋 Issue Analysis:
# 
# Type: Feature Request  
# Category: Data Quality, User Experience
# 
# Proposed Title: "Add confidence scores to CSA field extractions"
# 
# Labels: enhancement (note: feature, extraction, ux labels don't exist)
# 
# Key Requirements Identified:
# - Confidence scoring system for extracted fields
# - Visual indicators for low-confidence extractions  
# - Special handling for multi-page threshold calculations
# - Support manual review workflow
#
# [Full structured description follows...]

# Quick bug report
/issue create "table extraction broken"

# Claude expands:
# 📋 Issue Analysis:
# 
# Type: Bug Report
# Severity: Unknown (need more details)
# 
# Proposed Title: "Table extraction functionality not working"
# 
# I notice this is a brief description. I'll create a structured issue
# but it would be helpful to know:
# - What type of tables? (PDF, specific format?)
# - Error messages?
# - When did this start?
# - Specific documents affected?
#
# [Creates issue with sections for additional information needed]
```

### Tips for Better Issues

1. **Include specific details**: File sizes, error messages, browser versions
2. **Mention user impact**: Who is affected and how
3. **Describe attempted solutions**: What you've already tried
4. **Note timing**: When the issue started or when feature is needed
5. **Add examples**: Specific documents or use cases

The more context you provide, the better the generated issue will be!

### List Issues (`/issue list`)

- Shows open issues assigned to you
- Includes issue number, title, and labels
- Sorted by priority/milestone

### Commit with Issue (`/issue commit <number>`)

1. **Fetches Issue Details**:
   - Gets issue title and type from GitHub
   - Determines appropriate commit type

2. **Creates Linked Commit**:
   - Analyzes current changes
   - Creates commit message with issue reference
   - Format: `🐛 fix: resolve PDF upload timeout (#123)`
   - Pushes to origin

3. **Updates Issue**:
   - Adds comment about the commit
   - Moves to "In Progress" if not already

### Close Issue (`/issue close <number>`)

- Closes issue with resolution comment
- Links to relevant commits
- Can trigger from commit message with "Fixes #123"

## Examples

```bash
# Create a new bug report
/issue create "PDF extraction fails for documents over 50MB"
# Output: Created issue #456: PDF extraction fails...

# Work on the issue and commit
/issue commit 456
# Output: ✅ Committed: 🐛 fix: handle large PDF files in extractor (#456)

# Or use in commit message to auto-close
/git commit
# Claude generates: "🐛 fix: increase PDF size limit to 100MB (fixes #456)"
```

## Automatic Issue Detection

When using `/git commit`, Claude will:
- Check if branch name contains issue number (e.g., `fix-456-pdf-upload`)
- Look for issue keywords in changes
- Suggest linking to relevant issues
- Add "Fixes #X" to auto-close on merge

## Integration with Release Command

When running `/release`, it will:
- Group changes by linked issues
- Include issue numbers in CHANGELOG
- Close milestone if all issues completed

## Configuration

Requires GitHub CLI (`gh`) to be installed and authenticated:
```bash
gh auth login
```

## Advanced Features

### Issue Templates
- Bug: Steps to reproduce, expected/actual behavior
- Feature: User story, acceptance criteria
- Task: Checklist of subtasks

### Automatic Labels
- `bug`: Error, crash, unexpected behavior
- `enhancement`: New feature, improvement
- `documentation`: Docs, comments, examples
- `performance`: Speed, memory, optimization
- `refactor`: Code cleanup, restructuring

### Branch Creation
```
/issue branch 456
# Creates: feature/456-pdf-size-limit
```

### View Issue (`/issue view <number>`)

Retrieves and displays the full issue details to provide context:

1. **Fetches Issue Data**:
   - Title and current status
   - Full description with formatting
   - Labels and metadata
   - Recent comments

2. **Use Cases**:
   - Get context when returning to work
   - Review requirements before implementation
   - Check acceptance criteria
   - See related discussions

3. **Example Output**:
```bash
/issue view 2

# Claude displays:
# 📋 Issue #2: Add rounding fields extraction agent to CSA extraction pipeline
# Status: Open | Labels: enhancement, feature, agent, extraction
# 
# ## Feature Overview
# Implement a new specialized agent for extracting rounding fields from CSA documents...
# 
# ## Requirements
# 1. Agent Implementation
# - Create new agent class inheriting from base_agent.py
# - Follow patterns established in base_currency_agent.py
# [... full description continues ...]
# 
# Recent Comments:
# - @user: "Should we also consider currency-specific rounding rules?"
# - @developer: "Working on this in branch feature/rounding-agent"
```

This command is particularly useful when:
- Starting work on an existing issue
- Needing to refresh memory on requirements
- Reviewing acceptance criteria during development
- Checking for updates or clarifications in comments

### Work on Issue (`/issue work [number]`)

A comprehensive command that prepares your environment and provides full context for working on an issue. When no issue number is provided, it will analyze the codebase and suggest the best issue to work on.

#### Without Issue Number (`/issue work`)

When called without an issue number, performs intelligent issue selection:

1. **Automated Analysis**:
   - Reviews all open GitHub issues
   - Analyzes codebase for context
   - Considers issue priority, complexity, and dependencies
   - Suggests the most appropriate issue to work on

2. **Selection Criteria**:
   - Prioritizes bugs over enhancements
   - Considers issues with clear requirements
   - Avoids blocked or dependent issues
   - Balances impact vs. effort
   - Checks for issues matching your recent work

3. **Example Workflow**:
   ```bash
   /issue work
   
   # Claude performs:
   # 1. 📋 Reviewing 23 open issues...
   # 2. 🔍 Analyzing codebase context...
   # 3. 🎯 Recommendation:
   #
   # Based on my analysis, I recommend working on:
   #
   # Issue #43: Toast notifications not implemented
   # - Type: Bug (High Priority)
   # - Effort: Small (2-3 hours)
   # - Impact: High - affects all user interactions
   # - No blockers or dependencies
   #
   # Why this issue:
   # - Quick win with high user impact
   # - Clear implementation path
   # - Improves UX significantly
   # - Good starting point if new to codebase
   #
   # Alternative suggestions:
   # - #44: React Error Boundaries (Medium effort, High impact)
   # - #47: File validation (Small effort, Medium impact)
   #
   # Would you like to work on issue #43? [yes/no]
   ```

4. **After Acceptance**:
   - Automatically runs `/issue work 43`
   - Sets up branch and provides full context
   - Shows implementation guidance

#### With Issue Number (`/issue work <number>`)

When called with a specific issue number:

1. **Branch Management**:
   - Checks if you're already on the issue branch
   - If not, switches to existing branch or creates new one
   - Branch naming follows pattern: `feature/<number>-<title-slug>`
   - Ensures you're on the right branch before showing context

2. **Context Loading**:
   - Displays full issue description
   - Shows all acceptance criteria
   - Lists related commits (if any)
   - Shows recent comments and discussions
   - Identifies files previously modified

3. **Workflow Steps**:
   ```bash
   /issue work 2
   
   # Claude performs:
   # 1. Check current branch
   # 2. Create/switch to feature/2-rounding-agent branch
   # 3. Fetch latest changes
   # 4. Display issue context
   ```

4. **Example Output**:
   ```bash
   /issue work 2
   
   # 🔄 Branch Management:
   # Current branch: main
   # Creating and switching to: feature/2-rounding-agent
   # ✅ Switched to branch 'feature/2-rounding-agent'
   #
   # 📋 Issue #2: Add rounding fields extraction agent to CSA extraction pipeline
   # Status: Open | Assigned: @developer | Labels: enhancement, feature, agent
   #
   # ## Summary
   # Implement a new specialized agent for extracting rounding fields from CSA documents...
   #
   # ## Key Requirements:
   # ✓ Create rounding_agent.py inheriting from base_agent.py
   # ✓ Use csa_clauses/txt/rounding.txt as knowledge base
   # ✓ Receive Party A, Party B, Base Currency from prior agents
   # ✓ Support both text+images and native PDF modes
   # ✓ Save to PostgreSQL with editable fields
   # 
   # ## Previous Work:
   # - 3 commits on this branch:
   #   • a1b2c3d: "feat: create initial rounding agent structure"
   #   • d4e5f6g: "feat: add JSON schema for rounding fields"
   #   • h7i8j9k: "wip: implement extract method"
   #
   # ## Modified Files:
   # - src/backend/agents/rounding_agent.py (created)
   # - src/backend/agents/json_structures/rounding.json (created)
   # - src/backend/agents/agent_factory.py (modified)
   #
   # ## Recent Comments:
   # - @reviewer: "Remember to handle multi-currency rounding rules"
   # - @user: "Can we add precision field for each currency?"
   #
   # ## Next Steps:
   # Based on the commit history and requirements, you should:
   # 1. Complete the extract() method implementation
   # 2. Add agent to the chain in app.py
   # 3. Update frontend to display rounding section
   # 4. Test with sample CSA documents
   ```

5. **Smart Context**:
   - Identifies WIP (work in progress) commits
   - Suggests next steps based on requirements
   - Shows test status if available
   - Highlights blocking issues or dependencies

This command combines everything needed to resume work efficiently:
- Correct branch setup
- Full requirements context
- Historical work summary
- Clear next steps

Perfect for:
- Resuming work after a break
- Switching between multiple issues
- Onboarding to an existing issue
- Ensuring consistent workflow

### Add Comment (`/issue comment <number> "text"`)

Posts a comment to an issue for progress tracking and communication:

1. **Progress Updates**:
   - Document work completed
   - Note blockers or challenges
   - Share interim findings
   - Request clarification
   - Update status without closing

2. **Comment Formatting**:
   - Supports markdown formatting
   - Automatically adds timestamp
   - Can include code blocks
   - Links to commits or PRs
   - Mentions for notifications

3. **Common Use Cases**:
   ```bash
   # Simple progress update
   /issue comment 2 "Completed the basic agent structure. Starting on extraction logic."
   
   # Detailed update with formatting
   /issue comment 2 "## Progress Update
   
   Completed:
   - ✅ Created rounding_agent.py with base structure
   - ✅ Added JSON schema for rounding fields
   - ✅ Registered agent in factory
   
   Next:
   - 🔄 Implement extract() method
   - 📝 Add frontend display components
   
   Blocker: Need clarification on multi-currency rounding rules."
   
   # Technical finding
   /issue comment 2 "Found that we need to handle special case for JPY (no decimal places):
   ```python
   if currency == 'JPY':
       rounded_value = round(value)  # No decimals
   else:
       rounded_value = round(value, 2)  # Standard 2 decimals
   ```"
   
   # Request for feedback
   /issue comment 2 "Initial implementation ready for review. See branch feature/2-rounding-agent. 
   
   @reviewer Could you check if the rounding logic matches the requirements?"
   ```

4. **Best Practices**:
   - **Regular Updates**: Post progress at logical milestones
   - **Be Specific**: Include what was done, not just "working on it"
   - **Document Decisions**: Record why certain approaches were chosen
   - **Link Resources**: Reference commits, PRs, or external docs
   - **Ask Questions**: Don't wait until PR review for clarifications

5. **Integration Benefits**:
   - Creates audit trail of development process
   - Helps team members understand progress
   - Documents technical decisions
   - Enables async collaboration
   - Useful for retrospectives

6. **Automated Context**:
   Claude automatically includes:
   - Current branch name
   - Number of commits since last comment
   - Time since last update
   - Related PR if exists

Example workflow:
```bash
/issue work 2
# ... do some development ...
/issue comment 2 "Implemented basic structure. Tests passing. Moving to UI integration."
# ... more development ...
/issue comment 2 "UI components ready. Need review on color scheme for rounding indicators."
/issue commit 2
```

This creates a clear narrative of the development process that complements the commit history.

### Issue Suggest (`/issue suggest`)

Comprehensive codebase analysis that automatically reviews existing GitHub issues and source code to suggest new improvements:

1. **Automated Workflow**:
   - Reviews all open issues in GitHub
   - Analyzes source code in src/ directory
   - Identifies gaps between existing issues and potential improvements
   - Suggests new bug fixes and enhancements
   - Automatically creates issues for all suggestions

2. **Analysis Process**:
   ```bash
   /issue suggest
   
   # Claude performs:
   # 1. 📋 Reviewing existing GitHub issues...
   #    - Found 8 open issues (all enhancements)
   #    - No bug reports currently open
   # 
   # 2. 🔍 Analyzing codebase for potential issues...
   #    - Scanning src/backend/ for bugs and improvements
   #    - Scanning src/frontend/ for UI/UX issues
   #    - Checking for security vulnerabilities
   #    - Identifying performance bottlenecks
   # 
   # 3. 📊 Generating suggestions...
   ```

3. **Example Output**:
   ```bash
   /issue suggest
   
   # 📊 Codebase Analysis Complete
   # 
   # Reviewed: 8 existing issues, 127 source files
   # 
   # 🐛 Suggested Bug Issues (6):
   # 
   # 1. Memory Leak: PDF Cache Never Cleaned Up
   #    - Location: src/backend/app.py:210-217
   #    - PDFs stored in app.state.pdf_cache are never removed
   #    - Solution: Implement TTL-based or LRU cache eviction
   # 
   # 2. Toast Notifications Not Implemented
   #    - Location: src/frontend/contexts/AppContext.jsx:232-234
   #    - showToast function only logs to console
   #    - Impact: Poor user feedback for actions/errors
   # 
   # 3. Missing React Error Boundaries
   #    - No error boundaries in frontend
   #    - Any component error crashes entire app
   #    - Solution: Add error boundaries at strategic levels
   # 
   # ✨ Suggested Enhancement Issues (5):
   # 
   # 1. Health Check and Monitoring Endpoints
   #    - Add /health, /ready endpoints for production
   #    - Include database connectivity, LLM status, memory usage
   # 
   # 2. LLM API Retry Logic
   #    - Implement exponential backoff for failed calls
   #    - Better reliability when providers have issues
   # 
   # 3. Database Connection Pooling
   #    - Configure proper pooling for Supabase
   #    - Better performance under load
   # 
   # 🚀 Creating all suggested issues...
   # 
   # ✅ Created issue #42: Memory leak: PDF cache never cleaned up
   # ✅ Created issue #43: Toast notifications not implemented
   # ✅ Created issue #44: Add React Error Boundaries
   # ✅ Created issue #45: Gemini LLM: Race condition in file uploads
   # ... (continues for all suggestions)
   # 
   # Summary: Created 11 new issues (6 bugs, 5 enhancements)
   ```

4. **What Gets Analyzed**:
   - **Existing Issues**: Avoids duplicating already reported problems
   - **Code Quality**: TODO/FIXME comments, code smells, duplications
   - **Security**: Authentication gaps, logging sensitive data, input validation
   - **Performance**: Memory leaks, N+1 queries, missing optimizations
   - **Error Handling**: Missing try/catch, unhandled promises, no fallbacks
   - **Infrastructure**: Missing monitoring, no health checks, deployment issues
   - **User Experience**: Missing feedback, poor error messages, accessibility

5. **Automatic Issue Creation**:
   - Each suggestion is automatically converted to a GitHub issue
   - Proper categorization (bug vs enhancement)
   - Detailed descriptions with code locations
   - Proposed solutions and implementation hints
   - Appropriate labels applied

6. **Benefits**:
   - **Proactive Maintenance**: Find issues before users report them
   - **Technical Debt Tracking**: Systematic identification of improvements
   - **Continuous Improvement**: Regular scanning keeps codebase healthy
   - **Time Saving**: Automated issue creation with proper formatting

Example workflow:
```bash
# Run periodically (e.g., weekly) to maintain code quality
/issue suggest

# All issues are created automatically
# Review the new issues in GitHub
# Prioritize based on impact and effort
```

This command is perfect for:
- Regular code quality reviews
- Sprint planning sessions
- Technical debt assessment
- Onboarding new team members to codebase issues

### Issue Split (`/issue split <number>`)

Intelligently decomposes large issues into manageable subtasks:

1. **Issue Analysis**:
   - Analyzes issue requirements and scope
   - Identifies logical components
   - Creates subtask hierarchy
   - Maintains dependencies between tasks
   - Estimates complexity for each part

2. **Example Output**:
   ```bash
   /issue split 2
   
   # 📋 Analyzing Issue #2: Add rounding fields extraction agent
   # 
   # Suggested Subtasks:
   # 
   # 1. Backend Implementation (3-4 hours)
   #    - [ ] Create rounding_agent.py structure
   #    - [ ] Implement extract() method
   #    - [ ] Add JSON schema validation
   #    - [ ] Write unit tests
   # 
   # 2. Integration (2-3 hours)
   #    - [ ] Register agent in factory
   #    - [ ] Add to extraction chain
   #    - [ ] Update context passing logic
   # 
   # 3. Frontend Display (2-3 hours)
   #    - [ ] Create UI components
   #    - [ ] Add editable fields
   #    - [ ] Implement save functionality
   # 
   # 4. Testing & Documentation (1-2 hours)
   #    - [ ] Integration tests
   #    - [ ] Update API documentation
   #    - [ ] Add usage examples
   # 
   # Create these as separate linked issues? [yes/no]
   ```

3. **Benefits**:
   - Better work distribution
   - Clearer progress tracking
   - Easier estimation
   - Parallel development opportunities