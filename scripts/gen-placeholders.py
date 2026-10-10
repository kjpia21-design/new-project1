#!/usr/bin/env python3
"""1단계 뼈대용 튜토리얼 placeholder 페이지 생성기 (일회성). 이미 있는 파일은 덮어쓰지 않는다."""
import os, json

ROOT = os.path.join(os.path.dirname(__file__), '..', 'src', 'content', 'docs')

# (category, slug, title, short sidebar label, level, tools, duration, description)
P = [
 ('claude','c01-overview','Claude 한눈에 보기: 모델 라인업(Fable·Opus·Sonnet·Haiku)과 고르는 법','C1. 한눈에 보기','beginner',['Claude'],'15분','Claude 모델들의 차이를 이해하고 내게 맞는 모델을 고르는 방법'),
 ('claude','c02-plans-limits','요금제와 사용량 한도: 세션·주간 한도, 클라우드 세션 크레딧','C2. 요금제와 사용량 한도','beginner',['Claude'],'15분','요금제와 사용량 한도가 어떻게 적용되는지 확인하는 방법'),
 ('claude','c03-getting-started','Claude 앱 시작하기: 웹·데스크톱·모바일','C3. 앱 시작하기','beginner',['Claude'],'15분','웹, 데스크톱, 모바일에서 Claude를 시작하는 방법'),
 ('claude','c04-prompting','프롬프트 잘 쓰는 법 (공식 가이드 기반)','C4. 프롬프트 잘 쓰는 법','practical',['Claude'],'25분','공식 가이드를 바탕으로 프롬프트를 다듬는 방법'),
 ('claude','c05-projects','프로젝트(Projects)로 자료와 지침 관리하기','C5. 프로젝트','practical',['Claude'],'25분','프로젝트에 자료와 지침을 모아 두고 반복해서 쓰는 방법'),
 ('claude','c06-artifacts','아티팩트로 웹페이지·도구 만들고 공유하기','C6. 아티팩트','practical',['Claude'],'30분','아티팩트로 웹페이지와 작은 도구를 만들고 공유하는 방법'),
 ('claude','c07-connectors','커넥터로 Gmail·캘린더·Drive·Notion 연결하기','C7. 커넥터','practical',['Claude','Gmail','Google Calendar','Google Drive','Notion'],'30분','커넥터로 Claude와 업무 도구를 연결하는 방법'),
 ('claude','c08-skills','스킬(Skills) 사용하고 직접 만들기','C8. 스킬','practical',['Claude'],'30분','스킬을 사용해 보고 직접 만들어 보는 방법'),
 ('claude','c09-memory-settings','메모리와 개인 설정','C9. 메모리와 개인 설정','practical',['Claude'],'20분','메모리와 개인 설정을 내게 맞게 다루는 방법'),
 ('claude','c10-research','리서치: 웹 검색과 심층 조사','C10. 리서치','practical',['Claude'],'25분','웹 검색과 심층 조사로 자료를 모으는 방법'),
 ('claude','c11-chrome-computer-use','Claude in Chrome과 컴퓨터 사용','C11. Chrome과 컴퓨터 사용','practical',['Claude in Chrome'],'30분','브라우저와 컴퓨터 작업을 Claude에게 맡기는 방법'),
 ('claude','c12-claude-code-overview','Claude Code 개요: 터미널·데스크톱·웹','C12. Claude Code 개요','practical',['Claude Code'],'25분','터미널, 데스크톱, 웹에서 쓰는 Claude Code를 한눈에 살펴보기'),
 ('claude','c13-cloud-sessions','Claude Code 클라우드 세션: GitHub 연동, 환경, 루틴','C13. 클라우드 세션','practical',['Claude Code','GitHub'],'40분','클라우드 세션에서 GitHub 저장소 작업을 맡기는 방법'),
 ('claude','c14-claude-code-features','Claude Code 핵심 기능: CLAUDE.md, 슬래시 명령, 훅, 서브에이전트, MCP','C14. Claude Code 핵심 기능','advanced',['Claude Code'],'50분','Claude Code의 핵심 기능들을 익히는 방법'),
 ('claude','c15-model-division','모델 분담 전략: 기획은 Opus, 구현은 Sonnet (이 사이트 제작 실례)','C15. 모델 분담 전략','advanced',['Claude Code','Claude'],'30분','작업에 따라 모델을 나눠 쓰는 전략과 이 사이트 제작 사례'),
 ('claude','c16-api','Claude API 시작하기','C16. API 시작하기','advanced',['Claude API'],'40분','Claude API를 처음 사용해 보는 방법'),

 ('chat','01-prompt-basics','실무 프롬프트 작성법: 역할·맥락·형식 지정하기','1. 실무 프롬프트 작성법','beginner',['Claude','ChatGPT','Gemini'],'20분','역할, 맥락, 형식을 정해서 AI에게 일을 시키는 방법'),
 ('chat','02-summarize-documents','회의록·긴 문서 요약하고 할 일 뽑기','2. 문서 요약과 할 일 뽑기','practical',['Claude','ChatGPT','Gemini'],'20분','긴 문서를 요약하고 해야 할 일을 정리하는 방법'),
 ('chat','03-data-analysis','엑셀·CSV 데이터 분석을 AI에게 맡기기','3. 데이터 분석 맡기기','practical',['Claude','ChatGPT'],'30분','엑셀과 CSV 데이터를 AI와 함께 분석하는 방법'),
 ('chat','04-write-reports','보고서·제안서 초안 쓰고 다듬기','4. 보고서·제안서 쓰기','practical',['Claude','ChatGPT','Gemini'],'30분','보고서와 제안서 초안을 만들고 다듬는 방법'),
 ('chat','05-compare-assistants','Claude·ChatGPT·Gemini 업무별 비교와 고르는 법','5. 업무별 비교와 고르는 법','practical',['Claude','ChatGPT','Gemini'],'25분','업무에 따라 어떤 AI를 고를지 비교하는 방법'),

 ('coding','06-claude-code-start','Claude Code 시작하기: 설치부터 첫 작업까지','6. Claude Code 시작하기','practical',['Claude Code'],'30분','Claude Code를 설치하고 첫 작업을 맡겨 보는 방법'),
 ('coding','07-no-code-web-tools','코딩을 몰라도 되는 업무용 웹 도구 만들기','7. 업무용 웹 도구 만들기','practical',['Claude','Claude Code'],'40분','코딩 지식 없이 업무용 웹 도구를 만드는 방법'),
 ('coding','08-cloud-github','클라우드 세션으로 GitHub 저장소 작업 맡기기','8. 클라우드 세션 작업 맡기기','practical',['Claude Code','GitHub'],'40분','클라우드 세션에서 GitHub 저장소 작업을 맡기는 방법'),
 ('coding','09-cursor','Cursor로 기존 코드 이해하고 고치기','9. Cursor로 코드 이해하고 고치기','practical',['Cursor'],'30분','Cursor로 기존 코드를 읽고 수정하는 방법'),
 ('coding','10-delegate-agents','반복 업무를 에이전트에게 맡기기 (스킬·루틴 활용)','10. 반복 업무 맡기기','practical',['Claude Code'],'40분','스킬과 루틴으로 반복 업무를 에이전트에게 맡기는 방법'),

 ('media','11-business-images','업무용 이미지 생성: 썸네일·홍보 이미지 만들기','11. 업무용 이미지 생성','practical',['이미지 생성 AI'],'30분','썸네일과 홍보 이미지를 AI로 만드는 방법'),
 ('media','12-canva-sns','Canva AI로 SNS 콘텐츠 한 세트 만들기','12. Canva AI로 SNS 만들기','practical',['Canva'],'30분','Canva AI로 SNS 콘텐츠를 한 세트로 만드는 방법'),
 ('media','13-promo-video','AI 영상 생성 도구로 짧은 홍보 영상 만들기','13. 짧은 홍보 영상 만들기','practical',['영상 생성 AI'],'40분','AI 영상 생성 도구로 짧은 홍보 영상을 만드는 방법'),
 ('media','14-transcribe-recordings','회의·강의 녹음을 텍스트로 받아 정리하기','14. 녹음을 텍스트로 정리하기','practical',['음성 인식 AI'],'25분','녹음 파일을 텍스트로 바꾸고 정리하는 방법'),
 ('media','15-voice-narration','AI 음성 합성으로 내레이션 만들기','15. 음성 합성 내레이션','practical',['음성 합성 AI'],'25분','AI 음성 합성으로 내레이션을 만드는 방법'),

 ('automation','16-notion-ai','Notion AI로 업무 문서와 데이터베이스 정리하기','16. Notion AI로 문서 정리','practical',['Notion'],'30분','Notion AI로 업무 문서와 데이터베이스를 정리하는 방법'),
 ('automation','17-morning-briefing','Gmail·캘린더를 AI와 연결해 아침 브리핑 받기','17. 아침 브리핑 받기','practical',['Claude','Gmail','Google Calendar'],'30분','메일과 캘린더를 AI와 연결해 아침 브리핑을 받는 방법'),
 ('automation','18-zapier-make','Zapier/Make로 메일 → 시트 → 알림 자동화하기','18. Zapier/Make 자동화','practical',['Zapier','Make'],'40분','메일, 시트, 알림을 잇는 자동화를 만드는 방법'),
 ('automation','19-google-workspace-gemini','Google Workspace의 AI 기능(Gemini) 실무 활용','19. Google Workspace와 Gemini','practical',['Gemini','Google Workspace'],'30분','Google Workspace의 AI 기능을 업무에 활용하는 방법'),
 ('automation','20-connectors-mcp','커넥터(MCP)로 AI와 업무 도구 연결하기','20. 커넥터(MCP) 연결','practical',['Claude','MCP'],'35분','커넥터(MCP)로 AI와 업무 도구를 연결하는 방법'),
]

def q(s): return json.dumps(s, ensure_ascii=False)

for i,(cat,slug,title,label,level,tools,dur,desc) in enumerate(P):
    d = os.path.join(ROOT, cat); os.makedirs(d, exist_ok=True)
    path = os.path.join(d, slug + '.mdx')
    if os.path.exists(path): continue
    fm = f"""---
title: {q(title)}
description: {q(desc)}
sidebar:
  label: {q(label)}
level: {level}
category: {cat}
tools: {json.dumps(tools, ensure_ascii=False)}
duration: {q(dur)}
prerequisites: {json.dumps(['사용할 도구의 계정'], ensure_ascii=False)}
sources: []
status: draft
---

import ComingSoon from '../../../components/ComingSoon.astro';

<ComingSoon />

## 이 튜토리얼에서 배울 것

- 이 주제가 무엇이고 어떤 업무 상황에서 쓰이는지 이해하기
- 시작하기 전에 필요한 계정과 준비물 확인하기
- 예제를 단계별로 직접 따라 해 보기
- 자주 막히는 지점과 해결 방법 알아 두기
"""
    open(path,'w').write(fm)
print('done')
