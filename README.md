# Hexo Front Matter Excerpt

A Hexo plugin to allow writing post excerpts using YAML front matter.

In Hexo, post excerpts are usually specified by adding the `<!-- more -->` tag to your post content.
For example:

`2014-09-2-ExamplePost-HtmlCommentExcerpt.md`

	---
	title: "Example Post"
	---
	This is my post excerpt
	<!-- more -->
	Man, I really love writing posts on my nifty blog!

By using the Hexo Front Matter Excerpt plugin, you can specify a post's excerpt in its front matter.

`2014-09-2-ExamplePost-FrontmatterExcerpt.md`

	---
	title: "Example Post"
	excerpt: "This is my post excerpt"
	---
	Man, I really love writing posts on my nifty blog!

Now, "This is my post excerpt" will be available by calling `.excerpt` on this post.

This plugin will override the excerpt created by using Hexo's built in `<!-- more -->` tag.


This plugin supports definition of `post.excerpt` using `<!-- more -->` and using YAML front matter. If an excerpt is specified using the `<!-- more -->` tag, it will override an excerpt specified using YAML front matter if there is one. If niether are defined, `post.excerpt` will be `undefined`.

# Installation

`npm install --save hexo-front-matter-excerpt`
or
`yarn add hexo-front-matter-excerpt`

# Usage

Just install as described above!
No configuration needed.

# Development & Contributing
1. Add your feature to `index.js`
2. Write a test for your feature in `/spec/index_spec.js`
3. Run your test with `node_modules/.bin/jasmine` from the command line
4. Submit a pull request
