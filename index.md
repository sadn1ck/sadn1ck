---
layout: layout.html
---

## Anik Das

<section>

Building polished web interfaces. Software Engineer at [Chronicle](https://chroniclehq.com).

Working on Typescript, React, State machines and Text editors on the web. Love nerding out on types. Learning a bit of golang and elixir on the side.

Big fan of Spider-man, tailor-made memes and dad jokes. Feel free to message me on Twitter or Discord @ `sadn1ck`.

[Resume](https://drive.google.com/file/d/11RewrnkZ4WVkDOFusuqm-wCPPJjGt044/view?pli=1) ✦ [LinkedIn](https://www.linkedin.com/in/sadn1ck)

</section>

<div id="spacer" />

<div class="blog-list">
<!-- `{{ blog.data.date | date: "%Y %b" }}` • [{{ blog.data.title}}]({{blog.url}}) -->
{% for blog in collections.blogs reversed %}
<a href="{{blog.url}}">
    <span class="title">{{blog.data.title}}</span>
    <span class="date">{{ blog.data.date | date: "%b %Y" }}</span>
</a>
{% endfor %}
</div>
