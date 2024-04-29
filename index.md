---
layout: layout.html
title: Anik Das
---

<section>

Building polished web interfaces. Software Engineer at [Chronicle](https://chroniclehq.com).

Working on Typescript, React, State machines and Text editors on the web. Love nerding out on types. Learning a bit of golang and elixir on the side.

Big fan of Spider-man, tailor-made memes and dad jokes. Feel free to message me on Twitter or Discord @ `sadn1ck`.

[Resume](https://drive.google.com/file/d/11RewrnkZ4WVkDOFusuqm-wCPPJjGt044/view?pli=1) ✦ [LinkedIn](https://www.linkedin.com/in/sadn1ck)

</section>

<h2>Blogs</h2>

{% for blog in collections.blogs reversed %}

`{{ blog.data.date | date: "%Y %b" }}` • [{{ blog.data.title}}]({{blog.url}})

{% endfor %}
