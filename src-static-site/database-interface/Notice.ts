import { I18NText, Rich } from "@common-module/static-site-generator";

export default interface Notice {
  id: number;
  title: I18NText;
  content: I18NText;
  rich?: Rich;
  created_at: string;
  updated_at?: string;
}
