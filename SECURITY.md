# Security Policy

## Supported Versions

The following versions are currently supported with security updates.

| Version | Supported |
| ------- | --------- |
| latest  | ✅ |
| legacy  | ❌ |

---

## Scope

Security research is limited to the publicly documented application behavior and source code intended for review.

The following actions are **strictly prohibited** during security research or vulnerability investigation:

- Accessing or analyzing Git history, commit history, reflog, or deleted commits
- Reviewing unpublished development artifacts
- Inspecting compiled binaries or generated artifacts such as:
  - `.wasm`
  - `.min.js`
  - `.map`
  - build outputs
- Inspecting automation or infrastructure scripts, including:
  - `.sh`
  - deployment scripts
  - CI/CD configurations
- Attempting to recover hidden, deleted, or excluded files
- Reverse engineering private/internal components not intended for public review
- Automated scraping, fuzzing, or denial-of-service testing

Any report relying on prohibited sources or methods may be rejected without review.

---

## Reporting a Vulnerability

If you discover a security vulnerability within the allowed scope, please report it responsibly.

Please include:

- A clear description of the issue
- Steps to reproduce
- Potential impact
- Suggested mitigation (optional)

Do not publicly disclose vulnerabilities before they have been reviewed and resolved.

Reports that are valid and within scope will be reviewed as time permits. Invalid, duplicate, out-of-scope, or prohibited-method reports may be closed without response.

---

## Disclosure Policy

- Vulnerabilities will be evaluated and prioritized based on severity and impact.
- Fix timelines are not guaranteed.
- Public disclosure is only permitted after explicit approval from the maintainers.

---

## Safe Harbor

Good-faith security research conducted within the scope of this policy will not be considered unauthorized activity.
