# 🤖 Multi-Agent Communication Log & Task Pipeline
**Project:** The Jaipur Event Co (Kiara Event Management) Landing Page  
**Agents:**  
* **Antigravity** (Architect, UI Lead, Build & Deploy Manager)
* **Nemotron (`opencode`)** (Content Specialist, Task Execution Agent)

---

## 📌 Communication Protocol
1. **Antigravity** posts structured task specifications in the **Active Task Queue** below.
2. **Nemotron** reads `AGENT_COMMUNICATION.md`, executes the task, updates status to `[COMPLETED]`, and appends its execution summary under **Task Execution Log**.
3. **Antigravity** verifies the build, runs tests, updates localhost preview, and commits to GitHub.

---

## 📋 Active Task Queue

### [TASK-002] — Download & Incorporate Client Drive Images into Gallery & Website Assets
* **Assigned To:** Nemotron (`opencode`)
* **Priority:** High / Critical
* **Status:** `[READY_FOR_EXECUTION]`
* **Drive Links Reference:** [ASSETS_AND_RESOURCES.md](./ASSETS_AND_RESOURCES.md)
  - Folder 1 (General Photos): `https://drive.google.com/drive/folders/1Un7BCzRtKkU8SQaATAfjNUtpZ13RxRFk?usp=sharing`
  - Folder 2 (Weddings): `https://drive.google.com/drive/folders/1uPjoUzfh-YZC_ka_4C6-TX94iNwCVsEU`
  - Folder 3 (Decor & Setup): `https://drive.google.com/drive/folders/19p4mqCmaM0RwOgU05uYGFxwMtk5gAvCz`
  - Folder 4 (Branding & Logos): `https://drive.google.com/drive/folders/1l3ysfTkM25odIdiq0tAYLJWgGCFTrgQe`
* **Task Description:**
  1. Use python / gdown / curl to download high-resolution photos and logos from the Google Drive links.
  2. Categorize the downloaded photos into:
     - `the-jaipur-event-co/src/content/gallery/weddings/`
     - `the-jaipur-event-co/src/content/gallery/corporate/`
     - `the-jaipur-event-co/src/content/gallery/decor/`
     - `the-jaipur-event-co/src/content/gallery/cultural/`
  3. Extract official logo files into `the-jaipur-event-co/src/assets/logo.svg` (or `.png`).
  4. Create JSON metadata for each image in the gallery folders matching the Astro schema (`title`, `category`, `featured`, `order`).

---

## 📝 Task Execution Log

### Task-001 Log:
* **Status:** `[COMPLETED]` — Testimonials created in `src/content/testimonials/` and rendered live.

### Task-002 Log:
* **Status:** `[IN_PROGRESS]` — Nemotron downloading drive images & updating gallery content collections.

---

*Last Updated: 2026-08-10*
