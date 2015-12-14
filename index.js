var yaml = require('yaml-front-matter');

hexo.extend.filter.register('after_post_render', function(data) {
	var excerpt = yaml.loadFront(data.raw).excerpt;
	var postExcerpt = data.content.substr(0,200);
	if (excerpt !== undefined){
		data.excerpt = excerpt;
	} else if (postExcerpt !== undefined && (data.excerpt == undefined || data.excerpt.trim().length == 0)){
		data.excerpt = postExcerpt + "...";
	}
	return data;
});
