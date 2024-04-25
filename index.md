---
layout: layout.html
title: Anik Das
---

<section>

Building polished web interfaces. Software Engineer at [Chronicle](https://chroniclehq.com). Face weird bugs (daily).

Working on Typescript, React, and state machines. Bashing my head against the wall working with text editors on the web. Learning golang and elixir on the side by building small projects.

[Resume](https://drive.google.com/file/d/11RewrnkZ4WVkDOFusuqm-wCPPJjGt044/view?pli=1) ✦ [LinkedIn](https://www.linkedin.com/in/sadn1ck)

</section>

<h2>Blogs</h2>

{% for blog in collections.blogs reversed %}

`{{ blog.data.date | date: "%Y %b" }}` • [{{ blog.data.title}}]({{blog.url}})

{% endfor %}
