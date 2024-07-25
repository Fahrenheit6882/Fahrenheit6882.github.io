#/bin/sh

TEMP_SITE="../temp-site"

mkdir -p "$TEMP_SITE"
rsync -avu --delete "./build/" "$TEMP_SITE/site"
rsync -avu --delete "./img/" "$TEMP_SITE/img"
cp ./index.html "$TEMP_SITE/index.html"
cp ./app.css "$TEMP_SITE/app.css"

git checkout main

rsync -avu --delete "$TEMP_SITE/site/" "./site"
rsync -avu --delete "$TEMP_SITE/img/" "./img"
cp "$TEMP_SITE/index.html" "./index.html"
cp "$TEMP_SITE/app.css" "./app.css"

    