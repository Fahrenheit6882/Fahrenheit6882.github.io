#/bin/sh

TEMP_SITE="../temp-site"

rm -rf site/
mv $TEMP_SITE/site site
rm -rf img/
mv $TEMP_SITE/img img
mv $TEMP_SITE/index.html index.html
mv $TEMP_SITE/app.css app.css
mv $TEMP_SITE/README.md README.md
mv $TEMP_SITE/CHANGELOG.md CHANGELOG.md

# Commit changes, then run: 
# git push origin main
TAG=1.2.0
# git tag $TAG
# git push origin $TAG