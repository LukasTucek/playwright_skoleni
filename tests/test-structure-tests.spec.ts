import { expect, test } from "@playwright/test";

//describe - má pod sebou různé testy, obaluje je

test.describe("PMTool login tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://tredgate.com/pmtool/");
  });

  test("Successful login", async ({ page }) => {
    await page.locator("#username").fill("pw_skoleni");
    await page.locator("#password").fill("TEG2023");
    await page.locator("button[type='submit']").click();
    await expect(page.locator("#welcome-page-header")).toBeVisible();
  });

  test("Failed login", async ({ page }) => {
    await page.locator("#username").fill("wrong");
    await page.locator("#password").fill("wrong");
    await page.locator("button[type='submit']").click();
    await expect(page.locator(".alert-danger")).toBeVisible();
  });
});
