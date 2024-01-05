import { el, StaticDomNode } from "@common-module/static-site-generator";

export default class NewsView extends StaticDomNode {
  constructor(title: string) {
    super(".news-view");
    this.append(
      el("h1", title),
    );
  }
}
