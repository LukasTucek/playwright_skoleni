import { test, expect } from "@playwright/test";

test("Click test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
});

test("Fill and type test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").type("pw_skoleni"); //již deprecated
  await page.locator("#password").fill("TEG2023");
});

test("Select tests", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.locator("//select[@id='dropdowm-menu-1']").selectOption("sql");
  await page
    .locator("//select[@id='dropdowm-menu-2']")
    .selectOption({ label: "TestNG" });
});

test("Checkbox, radio button test", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  //checkbox
  await page.locator("//input[@value='option-3']").check();
  //radio button
  await page
    .locator("//form[@id='radio-buttons']/input[@value='blue']")
    .check();
});

test("iFrame test", async ({ page }) => {
  await page.goto("https://www.webdriveruniversity.com/IFrame/index.html");
  const frame = page.frameLocator("//iframe[@id='frame']");
  await frame.locator("//button[@id='button-find-out-more']").click();
});

test("Hover test", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Actions/index.html");
  await page.locator("//div[@class='dropdown hover']/button").hover();
  await page
    .locator("//div[@class='dropdown hover']//a[@class='list-alert']")
    .click();
});
