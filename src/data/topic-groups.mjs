// Claude 섹션 하위 그룹 데이터. astro.config.mjs(사이드바)와 TutorialGrid(섹션 허브)가 함께 쓴다.
// slugs는 `claude/` 아래 파일 이름(확장자 없음). 여기에 없는 새 글은 자동으로 마지막 "기타 / More" 그룹에 들어간다.

/** @typedef {{ id: string; en: string; ko: string; slugs: string[] }} TopicGroup */

/** @type {TopicGroup[]} */
export const claudeGroups = [
  {
    id: 'basics', en: 'Basics & plans', ko: '기본·요금',
    slugs: ['c01-overview', 'c02-plans-limits', 'c03-getting-started', 'c04-prompting', 'c09-memory-settings', 'c27-styles', 'c32-usage-limit-reached'],
  },
  {
    id: 'workspace', en: 'Workspace', ko: '작업 공간',
    slugs: ['c05-projects', 'c06-artifacts', 'c08-skills', 'c10-research', 'c20-claude-design', 'c25-file-creation'],
  },
  {
    id: 'apps', en: 'Apps & integrations', ko: '앱·연동',
    slugs: ['c07-connectors', 'c21-office-agents', 'c22-desktop-app', 'c23-google-workspace', 'c26-mobile-app'],
  },
  {
    id: 'agents', en: 'Agents & automation', ko: '에이전트·자동화',
    slugs: ['c11-chrome-computer-use', 'c17-workday-workflow', 'c18-automate-recurring', 'c19-cowork', 'c28-claude-tag', 'c30-claude-meetings', 'c31-computer-use-team'],
  },
  {
    id: 'code', en: 'Claude Code & API', ko: 'Claude Code·API',
    slugs: ['c12-claude-code-overview', 'c13-cloud-sessions', 'c14-claude-code-features', 'c15-model-division', 'c16-api', 'c33-claude-code-plans'],
  },
  {
    id: 'team', en: 'Teams & admins', ko: '팀·관리자',
    slugs: ['c24-sharing-projects', 'c29-team-admin-basics'],
  },
];

export const moreGroup = { id: 'more', en: 'More', ko: '기타' };

/**
 * 파일 이름 목록(확장자 없음, index 제외)을 그룹에 나눈다. 어느 그룹에도 없는 글은 마지막 "기타"로.
 * 그룹 안 순서는 위 slugs 순서, 기타는 이름순. 실제로 있는 글만 남기고 빈 그룹은 뺀다.
 * @param {string[]} names
 * @returns {{ id: string; en: string; ko: string; slugs: string[] }[]}
 */
export function groupClaude(names) {
  const have = new Set(names);
  const listed = new Set(claudeGroups.flatMap((g) => g.slugs));
  const out = claudeGroups.map((g) => ({ ...g, slugs: g.slugs.filter((s) => have.has(s)) }));
  const rest = names.filter((n) => !listed.has(n)).sort();
  out.push({ ...moreGroup, slugs: rest });
  return out.filter((g) => g.slugs.length > 0);
}
