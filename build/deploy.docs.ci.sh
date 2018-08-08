#!/usr/bin/env sh

git config --global user.name "$GIT_NAME"
git config --global user.email "$GIT_EMAIL"

# 确保脚本抛出遇到的错误
set -e

if [ "$GITHUB_TOKEN" = "" ]; then
  echo "Bye~"
  exit 0
fi

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m '[build] TRAVIS_TAG deploy docs'

git push -f https://${GITHUB_TOKEN}@github.com:babyeyeFE/vue-uwp.git master:gh-pages

cd -