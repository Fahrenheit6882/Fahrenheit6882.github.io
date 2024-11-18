#/bin/sh

TEMP_SITE="../temp-site"

# (cd ./site; yarn; yarn build)

#mkdir -p "$TEMP_SITE"
#rsync -avu --delete "./site/build/" "$TEMP_SITE/site"
#rsync -avu --delete "./img/" "$TEMP_SITE/img"
#cp ./index.html "$TEMP_SITE/index.html"
#cp ./app.css "$TEMP_SITE/app.css"

# git checkout main

rsync -av --delete "$TEMP_SITE/site/" "./site"
rsync -av --delete "$TEMP_SITE/img/" "./img"
cp "$TEMP_SITE/index.html" "./index.html"
cp "$TEMP_SITE/app.css" "./app.css"
cp "$TEMP_SITE/README.md" "./README.md"
cp "$TEMP_SITE/CHANGELOG.md" "./CHANGELOG.md"

# Commit changes, then run: 
# git push origin main
TAG=1.1.0
# git tag $TAG
# git push origin $TAG