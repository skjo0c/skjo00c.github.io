---
layout: post
title:  "Poems"
date:   2016-09-01 16:11:16
categories: blog
---

This blog contains some of the poems from me and my friends. Check it out ;)

{% for post in site.categories['poems'] %}
  <div class="post-header">
    <a href="{{post.url}}"><h1 class="post-title">{{ post.title }}</h1></a>
  </div>
  <div class="post-header">
    <p class="post-meta">
    	{{ post.date | date: "%B %-d, %Y — %H:%M" }}
    		{% if post.author %} • {{ post.author }}{% endif %}{% if post.meta %} • {{ post.meta }}{% endif %}
    </p>
  </div>

{% endfor %}
