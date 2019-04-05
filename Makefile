NAME   :=	classpert/blocks
TAG    :=	1.0.0
IMG    :=	${NAME}\:${TAG}
LATEST :=	${NAME}\:latest

ENV = development

.PHONY: help bootstrap dev clean build release yarn tty down docker-build docker-push system.svg

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

bootstrap: .env docker-compose.yml install
	@docker-compose run --service-ports yarn dev

install:
	@docker-compose run yarn install

dev: ## Run webpack-dev-server
	@docker-compose run --service-ports yarn dev

clean: ## Clean build folder
	@rm -rf ./build

build: ## Build your assets
	@docker-compose run yarn build

release: build ## Build your assets and upload them to S3
	@docker-compose run yarn release

yarn: ## Run yarn. E.g. ARGS="add webpack" make yarn
	@docker-compose run yarn $(ARGS)

tty: ## Attach a tty to the app container. Usage e.g: ENV=test make tty
	@docker-compose run --entrypoint /bin/bash yarn

down: ## Run docker-compose down
	@docker-compose down

docker-build: Dockerfile ## Builds the docker image
	@docker build -t ${IMG} .
	@docker tag ${IMG} ${LATEST}

docker-push: ## Pushes the docker image to Dockerhub
	@docker push ${NAME}

system.svg: system.gv ## Use graphviz to build system architecture graph
	@dot -Tsvg $< -o $@

%: | examples/%.example
	cp $| $@
