# Team/Enterprise admin basics (C29), 2026-11-06

## Sources read (2026-11-06, plain curl, one page at a time)
- https://support.claude.com/en/articles/9267276-roles-and-permissions
- https://support.claude.com/en/articles/13133750-manage-members-on-team-and-enterprise-plans
- https://support.claude.com/en/articles/13132885-set-up-single-sign-on-sso
- https://support.claude.com/en/articles/10276682-important-considerations-before-enabling-single-sign-on-sso-and-jit-scim-provisioning (first ~5000 chars)
- https://support.claude.com/en/articles/13133195-set-up-jit-or-scim-provisioning (first ~3500 chars)
- https://support.claude.com/en/articles/13163631-configuring-session-security-settings
- https://support.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans
- https://support.claude.com/en/articles/9970975-access-audit-logs
- https://support.claude.com/en/articles/18246629-review-your-organization-s-security-posture-with-the-security-center
- https://support.claude.com/en/articles/16059458-inference-hooks-overview
- https://support.claude.com/en/articles/18232924-get-started-with-centralized-management (first ~3500 chars)
- https://support.claude.com/en/articles/14546867-set-organization-instructions
- https://support.claude.com/en/articles/14625619-claim-and-migrate-accounts-on-your-domain
- https://support.claude.com/en/articles/13200993-restrict-access-to-claude-with-ip-allowlisting
- https://support.claude.com/en/articles/9265372-who-owns-and-manages-the-data-of-my-team
- https://support.claude.com/en/articles/13930458-set-up-role-based-permissions-on-enterprise-plans (first ~3500 chars)
- https://support.claude.com/en/articles/9797531-what-is-the-enterprise-plan, https://support.claude.com/en/articles/9266767-what-is-the-team-plan
- https://support.claude.com/en/articles/12138966-release-notes (11-05 entry)
- https://claude.com/pricing (Security and administration table)
- Collection/index pages used to find article URLs: support.claude.com/en/ , /en/collections/9387370-team-and-enterprise-plans, /en/collections/17270717-identity-management-sso-jit-scim

## Verified facts
- Roles: User, Admin, Owner, Primary Owner; one Primary Owner, uses a license, may be a service account. Custom roles are Enterprise only; Custom members have no default permissions.
- Admins manage members (Organization settings > Members); only Owners/Primary Owner access Billing. Export CSV of members: Admins and above.
- SSO: Team, Enterprise, Console; set up by Owner/Primary Owner on Claude; domain verification by TXT record `anthropic-domain-verification-...`, 10 min wait, DNS may take 24-48 h; value not shown again once Pending. Restrict organization creation toggle appears after verification. WorkOS handles verification/SSO setup. Require SSO may lock out unassigned users; expired cert/secret with Require SSO on locks everyone out (contact Support from Owner email).
- Provisioning: invite only (default; invites expire in 21 days; pending invites use seats), JIT (all plans, never removes members), SCIM (Enterprise/Console only).
- Shortened session length (Enterprise Admins+): 1/7/14/28 days. Sign out everywhere (beta) in Members menu and Admin API (write:members scope).
- Retention (Enterprise, Owner): min 30 days, default indefinite, shortening deletes permanently; excludes Claude Design standalone, Claude Tag, Managed Agents, cloud Claude Code. Audit logs: Enterprise, Owner export past 180 days, link 24 h, no chat title/content.
- Security center (beta, Enterprise): view-only, Owners and Primary Owner only, statuses Passed/Failed/Not attested/Shown for information, PDF report not a certification.
- Inference hooks: help page says generally available to Enterprise, Owners/Primary Owners manage. Centralized management: beta, Enterprise, admin.claude.com. IP allowlisting: public beta, Enterprise.
- Organization instructions: Owners on Team and Enterprise, 3,000 chars, up to 1 hour to apply.
- Domain capture: Enterprise only, irreversible, 30-day window, prerequisites (restrict org creation, DNS verification, enforced SSO, JIT or SCIM).
- Pricing page (2026-11-06): Team Standard $20 annual/$25 monthly; Enterprise $20/seat/month annual + usage at API rates, 20-seat minimum. Table: SSO, domain verification, usage analytics, org instructions on Team; domain capture, role-based access, SCIM, audit logs, Compliance API, custom retention, HIPAA-ready, inference hooks Enterprise only.
- Release notes 11-05: "security center, inference hooks, centralized management, and additional access controls, several in beta" (links to an Anthropic blog post).

## Not verified
- The 11-05 Anthropic blog post text (address not found on the news page; not guessed).
- Roles table column mapping (extracted text lost columns); only role requirements stated in prose elsewhere were used.
- Per-IdP guides, custom roles/groups/spend limits detail, Compliance API, Admin API reference, IP allowlisting API docs, whether betas are enabled for any given org.
- Not tested in a live organization.
