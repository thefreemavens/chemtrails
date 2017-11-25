---
layout: page
title: Research Topics
order: 200
author: Horatio N. Gold
body_class: research-topics
## Edit below
co_author:
  - Horatio N. Gold
date_modified: October 3, 2017
permalink: /community/research-topics/
---

<!-- Start Edit -->

<!-- ## The ultimate goal of all our collaboration based research is not reaching objectivity, but truth. -->

Topics listed below are a list of contributors' submitted topics that can be used as starting points for all research. If you like to add a topic to the list please use the [Suggest Topic](#suggest-topic) form.

Topics we had researched will be published and linked from the [Research]({{ site.baseurl }}/research/) page.

If you have done research work which you are willing to share with the community please complete the [Share Reserch](https://goo.gl/forms/QOszAO8KMuVN29R53){:target="_blank"} form. Only requirement is a Gmail account.

Start your research here –


<ul class="tfm-ty-ul">
  <li class="tfm-ty-li active">
    <a class="tfm-ty-item-name clickable collapsed">Economy</a>
    <ul class="tfm-ty-item-ul collapsein">
      {% for topic in site.data.topics %}
        {% if topic.category == "Economy" %}
        <li class="tfm-ty-item-li">
          <a href="{{ topic.url }}" class="tfm-ty-url" target="_blank">{{ topic.name }}</a>
        </li>
        {% endif %}
      {% endfor %}
    </ul>
  </li>
</ul>

<ul class="tfm-ty-ul">
  <li class="tfm-ty-li active">
    <a class="tfm-ty-item-name clickable collapsed">Education</a>
    <ul class="tfm-ty-item-ul collapsein">
      {% for topic in site.data.topics %}
        {% if topic.category == "Education" %}
        <li class="tfm-ty-item-li">
          <a href="{{ topic.url }}" class="tfm-ty-url" target="_blank">{{ topic.name }}</a>
        </li>
        {% endif %}
      {% endfor %}
    </ul>
  </li>
</ul>

<ul class="tfm-ty-ul">
  <li class="tfm-ty-li active">
    <a class="tfm-ty-item-name clickable collapsed">Politics</a>
    <ul class="tfm-ty-item-ul collapsein">
      {% for topic in site.data.topics %}
        {% if topic.category == "Politics" %}
        <li class="tfm-ty-item-li">
          <a href="{{ topic.url }}" class="tfm-ty-url" target="_blank">{{ topic.name }}</a>
        </li>
        {% endif %}
      {% endfor %}
    </ul>
  </li>
</ul>

<ul class="tfm-ty-ul">
  <li class="tfm-ty-li active">
    <a class="tfm-ty-item-name clickable collapsed">Religion</a>
    <ul class="tfm-ty-item-ul collapsein">
      {% for topic in site.data.topics %}
        {% if topic.category == "Religion" %}
        <li class="tfm-ty-item-li">
          <a href="{{ topic.url }}" class="tfm-ty-url" target="_blank">{{ topic.name }}</a>
        </li>
        {% endif %}
      {% endfor %}
    </ul>
  </li>
</ul>

<ul class="tfm-ty-ul">
  <li class="tfm-ty-li active">
    <a class="tfm-ty-item-name clickable collapsed">Science</a>
    <ul class="tfm-ty-item-ul collapsein">
      {% for topic in site.data.topics %}
        {% if topic.category == "Science" %}
        <li class="tfm-ty-item-li">
          <a href="{{ topic.url }}" class="tfm-ty-url" target="_blank">{{ topic.name }}</a>
        </li>
        {% endif %}
      {% endfor %}
    </ul>
  </li>
</ul>

<ul class="tfm-ty-ul">
  <li class="tfm-ty-li active">
    <a class="tfm-ty-item-name clickable collapsed">Security</a>
    <ul class="tfm-ty-item-ul collapsein">
      {% for topic in site.data.topics %}
        {% if topic.category == "Security" %}
        <li class="tfm-ty-item-li">
          <a href="{{ topic.url }}" class="tfm-ty-url" target="_blank">{{ topic.name }}</a>
        </li>
        {% endif %}
      {% endfor %}
    </ul>
  </li>
</ul>


<!-- Stop Edit -->

## Suggest Topic:

{% include _forms/form-add-topic.html %}

{% include page-meta.html %}
