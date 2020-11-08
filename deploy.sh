git add . &&
git commit -m 'updata' &&
git push &&
rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'updata' &&
git branch -M main &&
git remote add origin git@github.com:sunkuangdong/vue3.0-UI-dist.git
git push -f -u origin main &&
cd ../
npm version patch &&
npm publish