## normal git commands

git status // checking git status
git init // start the git
git add (file name ) //adding files to git tracker
git commit -m "write your message" // for writing commit message
git commit -am "writhe commit message"  // this will add and commit at a time 
git branch -M rename // it renames the branch


## intermediate commands  

git branch // for checking branches
git switch -c (branch name) // cheating a new branch and switch to it
git checkout -b (branch name) // cheating a new branch and switch to it
git diff --staged/HEAD //it defers the same file in different timeline
git log & git log --oneline //for checking git commit logs in multiLine & oneLine
git merge branchName // merge branches 
git branch -d branchName // deleting branches


## advance commands 

git stash  // it will switch another branch without committing 
git stash pop  // this will pops out the stashed code in to code base ** it will applicable for all branches
git stash list // listing all the stashes 
git stash apply stash@{n} // this is for staching a particular commit 


## some more commands

git log --oneline // use it before going to particular commit state 
git checkout (commit_id)  // put the commit to go to a particular commit 
git checkout (defaultBranchName) // for going back to the previous state 
git reflog //it get you back to the previous state
git checkout HEAD~n  //n is the number , how many commit wanna go back 