---
layout: layout.html
title: Anik Das
---

Software Engineer at [Chronicle](https://chroniclehq.com).

Working on typescript, react, state machines and rich text editors on the web. Love nerding out on types. Learning a bit of golang and elixir on the side.

Big fan of Spider-man, tailor-made memes and dad jokes. Feel free to message me on Twitter or Discord @ `sadn1ck`.

<div class="spacer"></div>

## Blogs

<div class="blog-list">
<!-- `{{ blog.data.date | date: "%Y %b" }}` • [{{ blog.data.title}}]({{blog.url}}) -->
{% for blog in collections.blogs reversed %}
<a href="{{blog.url}}">
    <span class="title">{{blog.data.title}}</span>
    <span class="date">{{ blog.data.date | date: "%Y-%m" }}</span>
</a>
{% endfor %}
</div>

<div class="spacer"></div>
