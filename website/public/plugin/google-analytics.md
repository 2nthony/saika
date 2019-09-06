# Saika Google Analytics <PkgVersion name="@saika/google-analytics" />

Using Google Analytics in Saika.

## Usage

Load this plugin via `<script>` tag:

```html
<!-- Load this plugin after saika.js -->
<script src="https://unpkg.com/@saika/google-analytics"></script>
```

This plugin is exposed as `window.saikaGoogleAnalytics`:

```js
new Saika({
  plugins: [
    // Your track ID
    saikaGoogleAnalytics('UA-XXXXXX-X')
  ]
})
```
