#/bin/sh

TEMP_SITE="../temp-site"

rm -rf $TEMP_SITE
mkdir -p $TEMP_SITE
cp -R site/build/ $TEMP_SITE/site
cp -R ./img/ $TEMP_SITE/img
cp ./index.html $TEMP_SITE/index.html
cp ./app.css $TEMP_SITE/app.css
cp README.md $TEMP_SITE/README.md
cp CHANGELOG.md $TEMP_SITE/CHANGELOG.md

# git checkout main, then run `scripts/deploy2.sh`
