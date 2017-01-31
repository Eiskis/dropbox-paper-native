
# Dropbox Paper Native

Simple wrapper for Dropbox Paper web app.

## Development

Using [Nativefier](https://www.npmjs.com/package/nativefier) to do the conversion. See build options at [their API documentation](https://github.com/jiahaog/nativefier/blob/development/docs/api.md) to change the settings.

Basic build command:

```bash
"nativefier --min-width 860 --min-height 400 --ignore-certificate --inject \"./inject/local.js\" --inject \"./inject/local.css\" --name \"Dropbox Paper\" --user-agent \"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36\" \"https://paper.dropbox.com/\" \"build\""
"nativefier --show-menu-bar --hide-window-frame --disable-context-menu --disable-dev-tools --ignore-certificate --inject \"./inject/local.js\" --inject \"./inject/local.css\" --name \"Dropbox Paper\" \"https://paper.dropbox.com/\" \"build\""
```

See `inject/` for JS and CSS tweaks that overlay the web app.
