# `create-gatsby-blog-post`

Forked from https://github.com/DSchau/create-gatsby-blog-post and modified to be specific to betaBOM.

A utility and CLI to scaffold out a blog post that follows the gatsby `pages/` format, including a MD file with some default frontmatter (data) set up.

## Set up

`yarn add @shaid/create-gatsby-blog-post --dev`

or for global usage

`yarn global add @shaid/create-gatsby-blog-post`

## Usage

### `createPost(post: string, [options])`

```javascript
const { createPost } = require('create-gatsby-blog-post');

createPost('hello-world'); // will create the folder `src/pages/YYYY-MM-DD-hello-world` with `index.md` inside
```

#### Options

|Name|Description|Default|
|:--:|-----------|:-----:|
|`root`|Root directory to use to place the blog post/markdown file|`src/pages/tests`|
|`tags`|Whether to place frontmatter "tags" key in each post|`true`|

### CLI

```bash
create-post -- --date-format "YYYY-MMM-DD" hello-world
```
