# zerodha-web

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Hosting
heroku login <br />
heroku create <br />
heroku buildpacks:add heroku/nodejs <br />
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static <br />
git push heroku master:main <br />

### Server Backend Reference
https://github.com/danikhil/zerodha-server
