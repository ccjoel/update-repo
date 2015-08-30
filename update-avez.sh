cd /srv/pou/avez;

echo starting update;

git stash
git fetch origin;
git reset --hard origin/master;
