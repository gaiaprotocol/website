import {
  generate,
  StaticSiteTemplate,
  Supabase,
} from "@common-module/static-site-generator";
import NoticeService from "./notice/NoticeService.js";
import NewsView from "./view/NewsView.js";

export default async function generateNewNotice() {
  Supabase.connect(
    "https://qlusufpskzfuzakfzyuj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsdXN1ZnBza3pmdXpha2Z6eXVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwNTEzNDQsImV4cCI6MjAwNjYyNzM0NH0.PU-d9F-sjJ5KPcY-zl_iXaHesb00-Y5O26c9h_7mmAs",
  );
  const notices = await NoticeService.fetchNotices();
  for (const notice of notices) {
    for (const lang of Object.keys(notice.title)) {
      const title = (notice.title as any)[lang];
      await generate(
        `public/notice/${notice.id}/${lang}.html`,
        new StaticSiteTemplate(title, new NewsView(title)),
      );
    }
  }
}
