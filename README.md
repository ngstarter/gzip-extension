# ngstarter-gzip-tasks
Gzipped build and serve for your Angular 2 Starter

Perfect for tracking your build size with gzip compression :heart:

[![npm version](https://badge.fury.io/js/ngstarter-gzip-tasks.svg)](https://badge.fury.io/js/ngstarter-gzip-tasks)

## Getting started
1. Install the extension
    ```bash
    npm install ngstarter-gzip-tasks --save-dev
    ```

2. Require the extension in any tasks file, for example in `tasks/serve.js`
    ```js
    require('ngstarter-gzip-tasks');
    ```

3. Try running
    ```bash
    gulp serve-build-gzip
    ```

4. Now check the network requests in your browser, HTML/CSS/JS files should be gzipped already

## License
MIT
