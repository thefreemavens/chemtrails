---
layout: page
title: Sitemap
order: 5
permalink: /sitemap/
author: Horatio N. Gold
## Edit below
co_author:
  - Horatio N. Gold
date_modified: September 22, 2017
---

<!-- Start Edit -->

### Main

<ul>
{% assign pages = site.pages | sort: 'order' %}
{% for page in pages %}
{% if page.url contains ".xml" or page.url contains "404" or page.url contains "confirm" %}
  {% else %}
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>

### Community

<ul>
{% assign pages = site.community | sort: 'order' %}
{% for page in pages %}
{% if page.url contains "confirm" or page.url contains "style-guide" %}
  {% else %}
  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>

### Resources

<ul>
{% assign pages = site.quotes | sort: 'order' %}
{% for page in pages %}
  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
{% endfor %}
</ul>

<!-- Stop Edit -->

{% include page-meta.html %}