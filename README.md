# Hexo Front Matter Excerpt

A Hexo plugin to allow writing post excerpts using YAML front matter.

In Hexo, post excerpts are usually specified by adding the `<!-- more -->` tag to your post content.

By using the Hexo Front Matter Excerpt plugin, you can specify a post's excerpt in its front matter.

`2014-09-2-ExamplePost.md`

	---
	title: "Example Post"
	excerpt: "This is my post excerpt"
	---
	Man, I really love writing posts on my nifty blog!

Now, "This is my post excerpt" will be available by calling `.excerpt` on this post.

This plugin will override the excerpt created by using Hexo's built in `<!-- more -->` tag.