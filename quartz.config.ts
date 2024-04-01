import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Integra Extrajudicial",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "pt-BR",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Roboto Serif",
        body: "Roboto Serif",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff", //page background
          lightgray: "#abaaa8", //borders
          gray: "#8c6a42", //graph links, heavier borders
          darkgray: "#000000", //body text
          dark: "#7e3a3a", //header text and icons
          secondary: "#9a6b3a", //link colour, current graph node
          tertiary: "#cb6764", //hover states and visited graph nodes
          highlight: "#ffe0b2",// highlight: "rgba(241, 242, 222, 0.6)", //internal link background, highlighted text, highlighted lines of code
          strong: "#333333",
        },
      darkMode: {
          light: "#112222",
          lightgray: "#898989",
          gray: "#646464",
          darkgray: "#d5d5d5",
          dark: "#febe78",
          secondary: "#cb6764",
          tertiary: "#cb975f",
          highlight: "#565250",
          strong: "#ffffff",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}


export default config
