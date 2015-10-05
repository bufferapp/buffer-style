git checkout master
git checkout -b tmp-gh-pages

gulp github-pages

# Add all updated public files
git add public/**/*
git commit -am 'Add files'

# Split the public folder into the branch gh-pages
git subtree split --prefix public -b gh-pages
git push -f origin gh-pages:gh-pages
git checkout master
git branch -D tmp-gh-pages
git branch -D gh-pages
