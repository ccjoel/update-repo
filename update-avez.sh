cd /srv/pou/avez;

echo starting update;

git stash
git checkout -- .;
git pull origin master;
