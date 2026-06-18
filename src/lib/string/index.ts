// RSS は XML ベースのため & などの特殊文字はエンティティとしてエスケープされて配信される。
// XML 仕様で必須の5種 + &#39; のみ対応
// 全 HTML エンティティが必要になった場合は he ライブラリへの差し替えを検討する。
export const decodeHtmlEntities = (str: string): string =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
