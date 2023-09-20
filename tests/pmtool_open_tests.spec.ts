import { test } from "@playwright/test";

test("Open PMTool and fill username and password", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("username1");
  await page.locator("#password").fill("password1");
});

//xpath selector UKAZKA
//input[@id="username"]
//h3[@data-testid="heading"]
//table[@id="users_table"]//tr[@id="row-2"]/td[@id="position"]
