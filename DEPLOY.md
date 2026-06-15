# Deployment Guide for Repliix

This project is a **Next.js Static Site** deployed on **Render**.

## Critical Configuration
To ensure successful deployments, existing Render settings must match the following:

| Setting | Value | Reason |
| :--- | :--- | :--- |
| **Service Type** | Static Site | We are exporting static HTML/CSS/JS. |
| **Build Command** | `npm run build` | Runs `next build` to generate the `out` folder. |
| **Publish Directory** | `out` | **CRITICAL:** Next.js static exports go here. Do NOT use `dist` or `public`. |
| **Node Version** | `20.11.0` | Enforced via `.node-version` file. Do not remove. |

## How to Deploy Changes
1.  **Make changes** to the code in the `website/` directory.
2.  **Commit and Push** to the `main` branch:
    ```bash
    git add .
    git commit -m "Description of changes"
    git push origin main
    ```
3.  **Automatic Deploy:** Render will detect the push and automatically build using the settings above.

## Troubleshooting
-   **Build Failed (Node Version):** Ensure `.node-version` file exists.
-   **404 / Blank Page:** Verify "Publish Directory" is set to `out` in Render Dashboard -> Settings.
-   **Image Issues:** Ensure `unoptimized: true` is set in `next.config.mjs` (required for static export).
