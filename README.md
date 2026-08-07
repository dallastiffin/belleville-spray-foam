# Belleville Spray Foam Insulation

A static, multi-page lead generation site for `bellevillesprayfoaminsulation.com`.

## Local build

```bash
npm run build
npm run check
```

The deployable site is generated in `dist/`. No framework or server runtime is required.

## Connect the contact form

1. Create a Google Sheet and rename the first tab `Leads`.
2. Add these headings in row 1: `Created`, `Name`, `Phone`, `Email`, `Service`, `Message`, `Page`, `Status`.
3. Open **Extensions → Apps Script** and paste `apps-script/Code.gs`.
4. Deploy it as a Web App. Execute as yourself and allow access to anyone.
5. Copy the `/exec` URL.
6. Replace `PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` in `build.mjs`.
7. Run `npm run build` again and commit the changes.

New leads are appended to the Sheet. Apps Script sends an email to `tiffindevelopments@gmail.com`. The email address stays in server-side Apps Script code, not in public browser JavaScript.

## GitHub and Cloudflare Pages

Push this folder to a GitHub repository. In Cloudflare Pages, connect that repository and use:

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/` (or this folder if it sits inside a larger repository)

Add `bellevillesprayfoaminsulation.com` under **Custom domains** after the first deployment.

## Before launch

- Connect the Google Apps Script endpoint.
- Confirm business hours and service area language.
- Add real project photos and accurate alt text if available.
- Review all claims, licensing details, and warranty terms with the business owner.
- Submit `https://bellevillesprayfoaminsulation.com/sitemap.xml` in Google Search Console.
