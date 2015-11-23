var yaml = require('yaml-front-matter');

hexo.extend.filter.register('after_post_render', function(data) {
	var excerpt = yaml.loadFront(data.raw).excerpt;
	if (excerpt !== undefined){
		data.excerpt = excerpt;
	}
	return data;
});
