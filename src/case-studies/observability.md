---
title: Making incident evidence measurable
description: Incident analysis must measure whether the telemetry used to explain a failure is itself reliable.
permalink: case-studies/observability.html
section: Engineering case study
---
<header class="page-hero"><div class="wrap"><div class="eyebrow">Engineering case study</div><h1>Making incident evidence measurable</h1><p>Logs, metrics, and traces describe system behavior. They do not automatically prove that the available evidence is complete.</p></div></header>
<section><div class="wrap article-layout"><aside class="toc"><a href="/engineering.html">← All case studies</a></aside><article class="prose">
Incident analysis becomes overconfident when missing or delayed telemetry is interpreted as absence of failure.

## What made it hard

The same infrastructure used to observe a system can degrade during the incident it is supposed to explain. Root-cause analysis therefore needs to reason about both the system and the quality of the evidence.

## How I approached it

I separated observations about system behavior from observations about evidence quality. The design tracked gaps, delays, contradictions, provenance, and recovery of the telemetry path itself.

## Selected impact

The resulting work was evaluated on streaming telemetry at approximately 15 TB per day and reported 0.983 recall with 99.1% integrity recovery. It was accepted as research on evidence-quality telemetry for cloud incident response.

## Lesson I still use

Observability should state not only what happened, but how much confidence the available evidence supports.
</article></div></section>
