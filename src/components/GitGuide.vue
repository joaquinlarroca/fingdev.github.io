<template>
  <div class="git-guide">
    <h1>Git & GitHub Guide</h1>
    <p class="intro">
      A beginner-friendly guide to understanding Git and GitHub, essential tools for every developer.
    </p>

    <section class="what-is-git">
      <h2>What is Git?</h2>
      <p>
        <strong>Git</strong> is a version control system that helps you track changes in your code. 
        Think of it as a time machine for your projects - you can go back to any previous version, 
        see who made what changes, and collaborate with others without conflicts.
      </p>
      <div class="key-points">
        <div class="point">
          <span class="icon">📸</span>
          <div>
            <h4>Snapshot History</h4>
            <p>Git takes "snapshots" of your project, so you can always return to a previous version.</p>
          </div>
        </div>
        <div class="point">
          <span class="icon">🌿</span>
          <div>
            <h4>Branching</h4>
            <p>Create separate "branches" to work on features without affecting the main project.</p>
          </div>
        </div>
        <div class="point">
          <span class="icon">🤝</span>
          <div>
            <h4>Collaboration</h4>
            <p>Multiple people can work on the same project simultaneously.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="what-is-github">
      <h2>What is GitHub?</h2>
      <p>
        <strong>GitHub</strong> is a cloud platform that hosts Git repositories. It provides:
      </p>
      <ul class="github-features">
        <li>A web interface to view your code</li>
        <li>Tools for code review (Pull Requests)</li>
        <li>Issue tracking for bugs and features</li>
        <li>Project management tools</li>
        <li>Collaboration features (wikis, discussions)</li>
      </ul>
    </section>

    <section class="basic-commands">
      <h2>Basic Git Commands</h2>
      
      <div class="command-group">
        <h3>1. Starting a Project</h3>
        <div class="code-block">
          <code># Clone an existing repository (download from GitHub)
git clone https://github.com/username/repository.git

# Initialize a new repository locally
git init</code>
        </div>
      </div>

      <div class="command-group">
        <h3>2. Making Changes</h3>
        <div class="code-block">
          <code># Check status of your changes
git status

# See what changed
git diff

# Stage a specific file
git add filename.py

# Stage all changes
git add .

# Commit your changes (save a snapshot)
git commit -m "Description of what you changed"</code>
        </div>
      </div>

      <div class="command-group">
        <h3>3. Working with Branches</h3>
        <div class="code-block">
          <code># Create a new branch
git checkout -b feature/my-new-feature

# Switch to an existing branch
git checkout branch-name

# List all branches
git branch

# Delete a branch
git branch -d branch-name</code>
        </div>
      </div>

      <div class="command-group">
        <h3>4. Syncing with GitHub</h3>
        <div class="code-block">
          <code># Push your commits to GitHub
git push origin branch-name

# Pull latest changes from GitHub
git pull origin branch-name

# Upload a new branch to GitHub
git push -u origin branch-name</code>
        </div>
      </div>
    </section>

    <section class="workflow">
      <h2>Standard Workflow: Fork & PR</h2>
      <p>This is the typical workflow for contributing to open source projects:</p>
      
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Fork the Repository</h4>
            <p>Click the "Fork" button on GitHub to create your own copy of the project.</p>
          </div>
        </div>
        
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>Clone Your Fork</h4>
            <p>Download your forked repository to your computer:</p>
            <code>git clone https://github.com/YOUR_USERNAME/fingcomms.git</code>
          </div>
        </div>
        
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>Create a Branch</h4>
            <p>Never work on the main branch! Create a new branch for your changes:</p>
            <code>git checkout -b fix/bug-description</code>
          </div>
        </div>
        
        <div class="step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4>Make Changes & Commit</h4>
            <p>Edit files, then save your changes:</p>
            <code>git add .
git commit -m "fix: description of fix"</code>
          </div>
        </div>
        
        <div class="step">
          <div class="step-number">5</div>
          <div class="step-content">
            <h4>Push to GitHub</h4>
            <code>git push origin fix/bug-description</code>
          </div>
        </div>
        
        <div class="step">
          <div class="step-number">6</div>
          <div class="step-content">
            <h4>Create Pull Request</h4>
            <p>Go to your fork on GitHub and click "Create Pull Request". Explain your changes and submit!</p>
          </div>
        </div>
      </div>
    </section>

    <section class="commit-messages">
      <h2>Commit Message Conventions</h2>
      <p>We follow the Conventional Commits format:</p>
      <div class="code-block">
        <code>type: description

# Examples:
feat: add user login feature
fix: resolve login error message
docs: update installation instructions
refactor: simplify authentication code</code>
      </div>
      <table class="commit-types">
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>feat:</code></td><td>New feature</td></tr>
          <tr><td><code>fix:</code></td><td>Bug fix</td></tr>
          <tr><td><code>docs:</code></td><td>Documentation</td></tr>
          <tr><td><code>style:</code></td><td>Code formatting</td></tr>
          <tr><td><code>refactor:</code></td><td>Code restructuring</td></tr>
          <tr><td><code>test:</code></td><td>Adding tests</td></tr>
          <tr><td><code>chore:</code></td><td>Maintenance tasks</td></tr>
        </tbody>
      </table>
    </section>

    <section class="resources">
      <h2>Additional Resources</h2>
      <div class="resource-links">
        <a href="https://git-scm.com/book/en/v2" target="_blank" class="resource-card">
          <h4>Pro Git Book</h4>
          <p>Free online book covering everything about Git</p>
        </a>
        <a href="https://github.com/skills" target="_blank" class="resource-card">
          <h4>GitHub Skills</h4>
          <p>Interactive courses from GitHub</p>
        </a>
        <a href="https://learngitbranching.js.org/" target="_blank" class="resource-card">
          <h4>Learn Git Branching</h4>
          <p>Interactive visual git tutorial</p>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'GitGuide'
}
</script>

<style scoped>
.git-guide {
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #58a6ff, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.intro {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
}

section {
  margin-bottom: 3rem;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
}

h3 {
  color: var(--primary);
  margin: 1.5rem 0 0.5rem;
}

p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.key-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.point {
  display: flex;
  gap: 1rem;
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border);
}

.point .icon {
  font-size: 2rem;
}

.point h4 {
  margin-bottom: 0.3rem;
}

.github-features {
  list-style: none;
  margin-top: 1rem;
}

.github-features li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.github-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--success);
}

.command-group {
  margin-bottom: 2rem;
}

.code-block {
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  overflow-x: auto;
}

.code-block code {
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.9rem;
  color: var(--text-primary);
  white-space: pre;
  display: block;
  line-height: 1.8;
}

.steps {
  margin-top: 1.5rem;
}

.step {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border);
}

.step-number {
  width: 40px;
  height: 40px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.step-content h4 {
  margin-bottom: 0.5rem;
}

.step-content code {
  display: block;
  margin-top: 0.5rem;
  background: var(--bg-tertiary);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.85rem;
}

.commit-types {
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;
}

.commit-types th,
.commit-types td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--border);
}

.commit-types th {
  background: var(--bg-secondary);
}

.commit-types code {
  background: var(--bg-tertiary);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
}

.resource-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.resource-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  text-decoration: none;
  transition: all 0.2s;
}

.resource-card:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.resource-card h4 {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.resource-card p {
  margin: 0;
  font-size: 0.9rem;
}
</style>
