---
layout: layout.html
title: Anik Das
---

Software Engineer at [Chronicle](https://chroniclehq.com).

Working on rich text editors, CRDTs, typescript, state machines and more on the web. Love nerding out on performance optimizations.

Learning a bit of golang and elixir on the side. Big fan of Spider-man, tailor-made memes and dad jokes. Feel free to message me on [Bluesky](https://bsky.app/profile/anikd.com) or Discord @ `sadn1ck`.

## Blogs

<ul class="blog-list">
{% for blog in collections.blogs reversed %}
<li>
    <span class="date">
      <time>{{ blog.data.date | date: "%d %b, %Y" }}</time>
    </span>
    <a href="{{blog.url}}">
      <span class="title">{{blog.data.title}}</span>
    </a>
  </li>
{% endfor %}
</ul>
