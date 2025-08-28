---
layout: default
title: Tags
permalink: /tags/
---
<h1>Tags</h1>
<ul class="tag-list">
{% assign tags = site.tags | sort %}
{% for tag in tags %}
  <li><a href="#{{ tag[0] }}">{{ tag[0] }} ({{ tag[1].size }})</a></li>
{% endfor %}
</ul>
<hr>
{% for tag in tags %}
  <h2 id="{{ tag[0] }}">{{ tag[0] }}</h2>
  <ul>
  {% for post in tag[1] %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> — <span>{{ post.date | date: "%d/%m/%Y" }}</span></li>
  {% endfor %}
  </ul>
{% endfor %}
