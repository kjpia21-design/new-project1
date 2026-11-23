// 학습 경로(learning path): 수준별 시작 페이지(start/<id>) 맨 위에 보여 주는 "이 순서로 따라 하세요" 목록.
// 단계는 이미 있는 튜토리얼의 slug(`ko/` 없는 경로)만 쓴다. 빌드할 때 src/lib/paths.ts가
// 모든 slug가 영어·한국어 두 쪽에 다 있는지 검사하고, 없으면 빌드를 멈춘다.
// 편수·소요 시간은 여기 쓰지 않는다(각 글의 frontmatter duration을 더해 자동 계산).
import type { Lang } from '../lib/i18n';

export type PathId = 'beginner' | 'practical' | 'advanced';

export interface LearningPathDef {
  id: PathId;
  /** 이 경로를 보여 주는 시작 페이지(언어 접두사 없이) */
  startPage: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  steps: string[];
}

export const paths: LearningPathDef[] = [
  {
    id: 'beginner',
    startPage: '/start/beginner/',
    title: { en: 'Your first week with AI', ko: 'AI 첫 일주일' },
    description: {
      en: 'Sign up, ask your first questions, learn to check answers and keep your information safe, then write your first work prompt. One or two steps a day is plenty.',
      ko: '가입하고 첫 질문을 해 본 뒤, 답을 확인하는 법과 내 정보를 지키는 법을 익히고 첫 업무 프롬프트까지 써 봐요. 하루에 한두 단계면 충분해요.',
    },
    steps: [
      'basics/01-first-30-minutes',
      'basics/02-sign-up-first-question',
      'basics/03-asking-well',
      'basics/15-follow-up-questions',
      'basics/04-fact-checking',
      'basics/05-privacy-safety',
      'basics/06-everyday-uses',
      'chat/01-prompt-basics',
    ],
  },
  {
    id: 'practical',
    startPage: '/start/practical/',
    title: { en: 'AI for everyday work', ko: '업무에 바로 쓰는 AI' },
    description: {
      en: 'From better prompts to summaries, reports and data analysis, then projects and connectors that bring your own materials and tools in, ending with a full workday run with Claude.',
      ko: '좋은 프롬프트에서 시작해 요약·보고서·데이터 분석을 맡기고, 프로젝트와 커넥터로 내 자료와 도구를 연결한 뒤 Claude로 업무 하루를 굴려 봐요.',
    },
    steps: [
      'claude/c04-prompting',
      'chat/02-summarize-documents',
      'chat/04-write-reports',
      'chat/03-data-analysis',
      'claude/c05-projects',
      'claude/c07-connectors',
      'automation/17-morning-briefing',
      'claude/c17-workday-workflow',
    ],
  },
  {
    id: 'advanced',
    startPage: '/start/advanced/',
    title: { en: 'Build with the Claude API and agents', ko: 'Claude API·에이전트로 만들기' },
    description: {
      en: 'Start with Claude Code core features and model choice, make your first API call, then add tools, system prompts and reliable JSON, cut costs, and build an agent, your own MCP server, and evals to keep quality in check.',
      ko: 'Claude Code 핵심 기능과 모델 고르기에서 출발해 첫 API 호출을 하고, 도구·시스템 프롬프트·정확한 JSON을 더한 뒤 비용을 줄이고, 에이전트와 나만의 MCP 서버, 품질을 지키는 평가까지 만들어 봐요.',
    },
    steps: [
      'claude/c14-claude-code-features',
      'claude/c15-model-division',
      'claude/c16-api',
      'dev/01-tool-use',
      'dev/21-system-prompts',
      'dev/13-structured-outputs',
      'dev/02-cost-optimization',
      'dev/03-agent-sdk',
      'dev/05-mcp-server',
      'dev/08-evals',
    ],
  },
];
