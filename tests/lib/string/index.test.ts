import { decodeHtmlEntities } from "src/lib/string";

describe("decodeHtmlEntities", () => {
  test("&amp; を & に変換する", () => {
    expect(decodeHtmlEntities("子供が産まれた &amp; 育休を取得しております！")).toBe(
      "子供が産まれた & 育休を取得しております！"
    );
  });

  test("&lt; &gt; をそれぞれ < > に変換する", () => {
    expect(decodeHtmlEntities("&lt;div&gt;")).toBe("<div>");
  });

  test("&quot; を \" に変換する", () => {
    expect(decodeHtmlEntities('class=&quot;foo&quot;')).toBe('class="foo"');
  });

  test("&#39; を ' に変換する", () => {
    expect(decodeHtmlEntities("it&#39;s")).toBe("it's");
  });

  test("&apos; を ' に変換する", () => {
    expect(decodeHtmlEntities("it&apos;s")).toBe("it's");
  });

  test("エンティティが含まれない文字列はそのまま返す", () => {
    expect(decodeHtmlEntities("hello world")).toBe("hello world");
  });

  test("複数のエンティティが混在していても変換する", () => {
    expect(decodeHtmlEntities("&lt;p&gt;Hello &amp; World&lt;/p&gt;")).toBe(
      "<p>Hello & World</p>"
    );
  });
});
