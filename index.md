---
layout: layout.html
---

# Heyo!

I'm **Anik**, a software engineer at [Chronicle](https://chroniclehq.com).

Working on rich text editors, CRDTs, typescript, state machines and more on the web. Love nerding out on performance optimizations.

Learning a bit of golang and elixir on the side. Big fan of Spider-man, tailor-made memes and dad jokes. Feel free to message me on [BlueSky](https://bsky.app/profile/anikd.com) or Discord @ `sadn1ck`.

## Blogs

<ul class="blog-list">
{% for blog in collections.blogs reversed %}
<li>
    <span class="date">
      <time>{{ blog.data.date | date: "%Y-%m-%d" }}</time>
    </span>
    <a href="{{blog.url}}">
      <span class="title">{{blog.data.title}}</span>
    </a>
  </li>
{% endfor %}
</ul>
