# Basic Laravel Project Scaffolding
Basic Laravel project scaffolding with Gulp, Bower, LESS, &amp; Bootstrap.

## Overview
This project helps speed up the process of setting up a simple Laravel project. It configures Bower, Gulp, and Bootstrap automatically in a maintainable way. It strives to keep vendor files seperate from project files and uses best practices.

## Project Tree
These are the alterations from a standard Laravel installation.

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

1. Install node packages with `npm install`
2. Install bower components with `bower install`
3. Run `gulp watch` and start developing