---
title: Linux Configs
---

### Aliases

```bash
# System Utilities
alias sudo='sudo '
alias ls='ls --color=auto'
alias ll='ls -l'
alias la='ls -a'
alias grep='grep --color=auto'
alias grepr='grep -rni'
alias cp='cp -i'
alias mv='mv -i'
alias rm='rm -i'
alias df='df -h'
alias du='du -h'
alias q='exit'
alias ln='ln -v'

# Development shortcuts
alias grep-node='grep --exclude-dir=node_modules'
alias nr='npm run'
alias mvnci='mvn clean install'

# Miscellaneous
alias p1='ping 1.1.1.1'
alias tr1='traceroute 1.1.1.1'
```

### One-Time Setup

```bash
# Git aliases
git config --global alias.s status
git config --global alias.dc 'diff --cached'
git config --global alias.last 'log -1 HEAD'
git config --global alias.unstage 'reset HEAD --'
git config --global alias.branch 'branch -vv'
```