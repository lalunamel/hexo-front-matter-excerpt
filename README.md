# Hexo Front Matter Excerpt

A Hexo plugin to allow writing post excerpts using YAML front matter.

In Hexo, post excerpts are usually specified by adding the `<!-- more -->` tag to your post content.

By using the Hexo Front Matter Excerpt plugin, you can specify your excerpt in your post front matter.

2014-09-2-ExamplePost.md

		---
		title: "Example Post"
		excerpt: "This is my post excerpt"
		---
		Man, I really love writing posts on my nifty blog!
In this example, the above post's excerpt would be `This is my post excerpt`

This plugin will override the excerpt created by using Hexo's built in `<!-- more -->` tag.

