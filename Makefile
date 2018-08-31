.PHONY: dist test
default: 
	yarn docs

install:
	yarn install

install-cn:
	yarn install --registry=http://registry.npm.taobao.org

dev:
	yarn docs

new:
	node build/bin/new.js $(filter-out $@,$(MAKECMDGOALS))

dist: install
	yarn run dist
