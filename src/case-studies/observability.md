---
title: Observability that follows evidence, not only infrastructure
description: An incident is difficult to explain when the telemetry used to explain it is incomplete.
permalink: case-studies/observability.html
section: Engineering case study
---
<header class="page-hero"><div class="wrap"><div class="eyebrow">Engineering case study</div><h1>Observability that follows evidence, not only infrastructure</h1><p>An incident is difficult to explain when the telemetry used to explain it is incomplete.</p></div></header>
<section><div class="wrap article-layout"><aside class="toc"><a href="/engineering.html">← All case studies</a></aside><article class="prose">
Logs, metrics, and traces describe system behavior. They do not automatically prove that the evidence itself is complete, timely, or internally consistent.

## What made it hard

Incident analysis can become overconfident when missing or delayed telemetry is treated as absence of failure.

## How I approach it

I separate observations about the system from observations about evidence quality. That includes tracking gaps, delays, contradictions, and recovery of the telemetry path itself.

## Lesson I still use

Observability should state not only what happened, but how much confidence the available evidence supports.
</article></div></section>
