# Security Policy

## Supported Versions

| Version | Supported |
|---|---|
| Latest (`main`) | ✅ |
| All others | ❌ |

We only provide security fixes for the latest version. Keep your deployment up to date.

---

## Reporting a Vulnerability

**Please do not report security vulnerabilities via public GitHub Issues.**

If you discover a security vulnerability in pr Inspector, please report it responsibly:

### Option 1: GitHub Private Vulnerability Reporting (preferred)

Use the [Report a vulnerability](https://github.com/Kunalmadoliya/pr-inspector/security/advisories/new) button on the Security tab of this repository.

### Option 2: Email

Send a report to: **madoliyakunal2005@gmail.com**

Include the following in your report:
- A description of the vulnerability
- Steps to reproduce the issue
- The potential impact
- Any suggested fixes (optional but appreciated)

---

## What to Expect

- **Acknowledgement**: We will acknowledge receipt of your report within **48 hours**.
- **Assessment**: We will assess severity and impact within **5 business days**.
- **Fix**: We aim to release a fix within **30 days** for critical vulnerabilities.
- **Credit**: We will credit responsible disclosers in the security advisory unless you prefer to remain anonymous.

---

## Scope

The following are **in scope** for security reports:

- Authentication and session management
- GitHub webhook signature verification
- GitHub OAuth token handling
- SQL injection or database access issues
- Privilege escalation or authorization bypass
- Cross-site scripting (XSS) in the web application
- Cross-site request forgery (CSRF)
- Insecure direct object references (IDOR)
- Exposure of sensitive environment variables

The following are **out of scope**:

- Denial of service attacks
- Social engineering
- Physical attacks
- Issues in third-party dependencies (report these upstream)
- Rate limiting on non-sensitive endpoints

---

## Disclosure Policy

We follow [responsible disclosure](https://en.wikipedia.org/wiki/Coordinated_vulnerability_disclosure). Please give us a reasonable amount of time to fix the issue before public disclosure.

---

*pr Inspector reviews every commit. We take security seriously. We take security seriously.*
