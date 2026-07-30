---
title: Reconciling valid records when enterprise systems disagree
description: Schema-valid records can still describe incompatible business realities.
permalink: case-studies/data-integrity.html
section: Engineering case study
---
<header class="page-hero"><div class="wrap"><div class="eyebrow">Engineering case study</div><h1>Reconciling valid records when enterprise systems disagree</h1><p>Validation catches malformed data. Reconciliation handles records that are individually valid and still cannot all be true.</p></div></header>
<section><div class="wrap article-layout"><aside class="toc"><a href="/engineering.html">← All case studies</a></aside><article class="prose">
Many consequential incidents are not schema failures. Every record is well formed, yet systems disagree about inventory, demand, order state, spend, or time.

## What made it hard

Each source may be internally consistent. The conflict becomes visible only when claims are compared in business and temporal context. Choosing one source too early can erase the evidence needed to understand the failure.

## How I approached it

I used layered controls: technical audits, business-state balancing, ratio and distribution checks, temporal validation, error history, proactive alerts, and restart-aware recovery. The system preserved disagreement as evidence instead of hiding it behind a single status.

## Selected impact

The approach made cross-system disagreement observable through explicit balancing, exception history, and restart-aware controls. Public descriptions intentionally omit internal business-performance figures.

## Lesson I still use

Data quality is not a final report. It is part of control flow, ownership, and recovery.
</article></div></section>
