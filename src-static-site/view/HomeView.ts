import { el, StaticDomNode } from "@common-module/static-site-generator";

export default class Home extends StaticDomNode {
  constructor() {
    super(".home-view");
    this.append(
      el("h1", "Gaia Protocol"),
    );
  }
}
