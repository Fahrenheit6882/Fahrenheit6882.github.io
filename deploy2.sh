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

# Commit changes, then run: 
# git push origin main