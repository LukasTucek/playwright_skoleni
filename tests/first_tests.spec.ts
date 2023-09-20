import { test } from "@playwright/test";

test("First test", async ({ page }) => {
  //nebo pw-test
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("test");
});
