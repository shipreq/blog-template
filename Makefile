.PHONY: build-dev build-prod c cd ci clean cp d deploy dev p prod watch-prod

GATSBY    := ./node_modules/gatsby-cli/cli.js
GATSBY_s3 := ./node_modules/gatsby-plugin-s3/bin.js

info:
	@echo "ShipReq Blog."
	@echo
	@echo "Commands:"
	@echo
	@echo "  * build-dev  -- Builds in dev mode"
	@echo "  * build-prod -- Builds in prod mode"
	@echo "  * ci         -- Builds and deploys from CI"
	@echo "  * clean      -- gatsby clean"
	@echo "  * deploy     -- Deploys what's build to S3"
	@echo "  * dev        -- gatsby develop"
	@echo "  * prod       -- gatsby build && gatsby serve"
	@echo "  * watch-prod -- Watches for changes and builds prod"
	@echo

# Aliases
c : clean
cd: clean dev
cp: clean prod
d : dev
p : prod
wp: watch-prod

clean:
	$(GATSBY) clean
	@echo

dev:
	$(GATSBY) develop --host 0.0.0.0

build-dev:
	$(GATSBY) build

build-prod:
	ENV=prod $(GATSBY) build
	find public -name '*.map' -delete
	@echo

prod: build-prod
	$(GATSBY) serve --host 0.0.0.0

watch-prod: clean
	git ls-files | entr -cr make build-prod

deploy:
	$(GATSBY_s3) deploy

ci: clean build-prod deploy
