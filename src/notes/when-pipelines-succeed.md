---
title: When every pipeline succeeds and the decision is still wrong
description: A completed workflow proves execution, not semantic agreement.
permalink: notes/when-pipelines-succeed.html
section: Engineering note
---
<header class="page-hero"><div class="wrap"><div class="eyebrow">Engineering note</div><h1>When every pipeline succeeds and the decision is still wrong</h1><p>A completed workflow proves execution, not semantic agreement.</p></div></header>
<section><div class="wrap article-layout"><aside class="toc"><a href="/writing.html">← All notes</a></aside><article class="prose">
A green pipeline tells us that code ran. It does not tell us that the resulting business answer is correct.

The harder failures occur when each component is locally successful while the systems around it have drifted apart. A product is active in one source and retired in another. Inventory is current in one region and delayed in another. A transformation follows its contract but no longer matches the business definition.

The lesson is simple: execution evidence and decision evidence are different things. Reliable systems need both.
</article></div></section>
