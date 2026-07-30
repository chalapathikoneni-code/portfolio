---
title: Keeping data trustworthy when systems disagree
description: Validation catches malformed data. Reconciliation handles valid records that cannot all be true.
permalink: case-studies/data-integrity.html
section: Engineering case study
---
<header class="page-hero"><div class="wrap"><div class="eyebrow">Engineering case study</div><h1>Keeping data trustworthy when systems disagree</h1><p>Validation catches malformed data. Reconciliation handles valid records that cannot all be true.</p></div></header>
<section><div class="wrap article-layout"><aside class="toc"><a href="/engineering.html">← All case studies</a></aside><article class="prose">
Many production incidents are not schema failures. Every record is well formed, yet systems disagree about inventory, demand, order state, or time.

## What made it hard

Different systems may each be internally consistent. The conflict appears only when their claims are compared in business context.

## How I approached it

I used layered controls: technical audits, business-state balancing, temporal checks, error history, proactive alerts, and restart-aware recovery. The objective was to preserve evidence, not hide disagreement behind a single status.

## Lesson I still use

Data quality is not a final report. It is part of control flow, ownership, and recovery.
</article></div></section>
