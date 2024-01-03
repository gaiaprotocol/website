import {
    generate,
    StaticSiteTemplate,
  } from "@common-module/static-site-generator";
  import Home from "./view/Home.js";
  
  export default async function generateAll() {
    await generate(
      "public/index.html",
      new StaticSiteTemplate("Gaia Protocol", new Home()),
    );
  }
  