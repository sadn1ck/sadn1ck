const cache = require('@11ty/eleventy-cache-assets');
const globby = require('globby');
const matter = require('gray-matter');
const fs = require('fs');

const fetchData = async file => {
	const fileContents = fs.readFileSync(file);
	const {data, content} = matter(fileContents);
	const post = {
		content,
		...data,
		...data.permalink !== false && {url: file.replace('index.md', '').replace('src', '')},
	};

	return post;
};

module.exports = async () => {
	const projectFiles = await globby(['src/experience/*.md', 'src/blog/**/*.md']);
	const data = projectFiles.map(file => fetchData(file));
	const experience = await Promise.all(data);
	return experience;
};
