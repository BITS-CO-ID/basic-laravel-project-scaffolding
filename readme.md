# Basic Laravel Project Scaffolding
Basic Laravel project scaffolding with Gulp, Bower, LESS, &amp; Bootstrap.

## Overview
This project helps speed up the process of setting up a simple Laravel project. It configures Bower, Gulp, and Bootstrap automatically in a maintainable way. It strives to keep vendor files seperate from project files and uses programming best practices where possible.

## Project Tree
There are a few alterations from a standard Laravel installation:

```
.
├── assets
|   ├── js
|   |   └── application.js
|   └── less
|       ├── application.less
|		├── bootstrap.less
|       └── variables.less
|
├── public
|   └── assets
|       ├── css
|		├── fonts
|		├── images
|       └── js
|
└── vendor
    └── bower_components
```

## Getting Started
**Prerequirements:** You should install Bower and Gulp globally (`npm install -g bower gulp`).

1. Install node packages with `npm install`. This will automatically run `bower install` and `gulp` once it has finished.
2. Run `gulp watch` and start developing