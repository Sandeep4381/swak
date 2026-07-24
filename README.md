#  Swarikaro Website Git Workflow

This document defines the Git workflow for the **Swarikaro Website**. Every developer working on this repository should follow this workflow.

---

# Repository

**GitHub Repository Production**

```
 git remote set-url origin https://github.com/mystrymindinnovations/swarikaro-web.git
```

---
# Repository

**GitHub Repository development**
git remote set-url origin https://github.com/Sandeep4381/swak.git

---
# Branch Strategy

| Branch | Purpose |
|----------|---------------------------|
| main | Production Ready Code |
| feature/* | New Features |
| fix/* | Bug Fixes |
| docs/* | Documentation |
| chore/* | Maintenance |

---

# Clone Repository

```bash
git clone https://github.com/mystrymindinnovations/swarikaro-web.git
```

Move into project

```bash
cd swarikaro-web
```

Install dependencies

```bash
npm install
```

---

# Check Current Branch

```bash
git branch
```

or

```bash
git status
```

---

# Create a New Feature

Always create a new feature branch before starting work.

```bash
git checkout main
git pull origin main
git checkout -b feature/homepage
```

Examples

```
feature/homepage
feature/contact-page
feature/partner-page
feature/faq
feature/blog
feature/seo
feature/footer
feature/navbar
feature/mobile-menu
```

---

# Bug Fix Branch

```bash
git checkout main
git pull origin main
git checkout -b fix/mobile-navbar
```

Examples

```
fix/mobile-navbar
fix/footer-spacing
fix/hero-image
fix/seo-meta
```

---

# Working on Feature

Check changes

```bash
git status
```

See changes

```bash
git diff
```

Add files

```bash
git add .
```

Commit

```bash
git commit -m "feat: improve homepage hero section"
```

Push first time

```bash
git push -u origin feature/homepage
```

Later pushes

```bash
git push
```

---

# Commit Message Format

Always use meaningful commit messages.

Examples

```
feat: add FAQ page

feat: improve homepage hero

feat: add partner section

feat: add blog page

fix: mobile navbar issue

fix: footer spacing

fix: responsive layout

docs: update README

chore: update dependencies
```

Avoid

```
update

changes

final

working

test

done

new

again
```

---

# Before Creating Pull Request

Always check

```bash
git status
```

Review changes

```bash
git diff
```

Run build

```bash
npm run build
```

Run lint

```bash
npm run lint
```

Verify

- Website builds successfully
- Responsive Design
- Mobile View
- Desktop View
- SEO Metadata
- Images
- Navigation
- Forms
- No console errors

---

# Create Pull Request

Base Branch

```
main
```

Compare Branch

```
feature/homepage
```

Example Title

```
feat: improve homepage hero section
```

---

# Merge Strategy

Use

```
Squash and Merge
```

Benefits

- Clean Git History
- One Commit per Feature
- Easy Rollback
- Better Maintenance

---

# Delete Feature Branch

Local

```bash
git branch -d feature/homepage
```

Remote

```bash
git push origin --delete feature/homepage
```

---

# Daily Workflow

```
git checkout main

git pull origin main

git checkout -b feature/new-feature

Develop

git add .

git commit -m "feat: add new feature"

git push -u origin feature/new-feature

Create Pull Request

Squash and Merge

Delete Branch
```

---

# Useful Commands

Current Branch

```bash
git branch
```

Status

```bash
git status
```

Remote

```bash
git remote -v
```

Pull

```bash
git pull origin main
```

Push

```bash
git push
```

Push First Time

```bash
git push -u origin feature/branch-name
```

Fetch

```bash
git fetch
```

Log

```bash
git log --oneline
```

Switch Branch

```bash
git checkout main
```

Create Branch

```bash
git checkout -b feature/new-feature
```

Delete Local Branch

```bash
git branch -d feature/new-feature
```

Delete Remote Branch

```bash
git push origin --delete feature/new-feature
```

---

# Project Rules

✅ Always pull the latest `main` before starting work.

✅ Create a separate feature branch for every task.

✅ Keep commits small and meaningful.

✅ Use clear commit messages.

✅ Test locally before pushing.

✅ Run `npm run build`.

✅ Run `npm run lint`.

✅ Use Pull Requests for merging.

✅ Use **Squash and Merge**.

✅ Delete merged feature branches.

✅ Never commit:

- `.env`
- API Keys
- Secrets
- Tokens
- Credentials
- Build artifacts

---

# Deployment Flow

```
Developer
      │
      ▼
Create Feature Branch
      │
      ▼
Develop Feature
      │
      ▼
Local Testing
      │
      ▼
npm run build
      │
      ▼
Push Feature Branch
      │
      ▼
Create Pull Request
      │
      ▼
Code Review
      │
      ▼
Squash and Merge
      │
      ▼
main
      │
      ▼
GitHub
      │
      ▼
Vercel Auto Deployment
      │
      ▼
https://swarikaro.com
```

---

# Final Workflow

```
main
   │
   ├── feature/homepage
   │
   ├── feature/faq
   │
   ├── feature/contact-page
   │
   ├── feature/partner-page
   │
   ├── feature/blog
   │
   ├── feature/seo
   │
   ├── feature/navbar
   │
   └── fix/mobile-navbar
            │
            ▼
      Pull Request
            │
            ▼
     Squash and Merge
            │
            ▼
          main
            │
            ▼
     Vercel Deployment
            │
            ▼
https://swarikaro.com
```

---

# Repository

```
https://github.com/mystrymindinnovations/swarikaro-web.git
```

**Keep the `main` branch stable. Develop all new work in feature branches, merge through Pull Requests using Squash and Merge, and let Vercel deploy automatically from `main`.**