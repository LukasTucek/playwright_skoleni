import { test, expect } from "@playwright/test";

test("toContainText test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator("//button[@type='submit']").click();
  await expect(page.locator("//h3[@id='welcome-page-header']")).toContainText(
    //kontroluje jen část textu, radši používat toHaveText (kontroluje celý text)
    "Vítej v testovací aplikaciaaaa"
  );
});

test("toHaveText test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator("//button[@type='submit']").click();
  await expect(page.locator("//h3[@id='welcome-page-header']")).toHaveText(
    "Vítej v testovací aplikaci Tredgate Project"
  );
});

test("toBeVisible test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect(
    page.locator("//div[@class='login-page-logo']/img")
  ).toBeVisible();
});

test("toHaveValue test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await expect(page.locator("#username")).toHaveValue("pw_skoleni");
});

test("toBeChecked test", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await expect(page.locator("//input[@value='option-3']")).toBeChecked();
});

test("toBeDisabled test", async ({ page }) => {
  await page.goto("http://tredgate.com/webtrain/registration.html");
  await expect(page.locator("//input[@id='occupation']")).toBeDisabled();
});

//SOFT = v případě failu test pokračuje
test("Soft assert test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect
    .soft(page.locator("//h3[@class='form-title']"))
    .toHaveText("Login PMTOOL");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator("//button[@type='submit']").click();
});

test("Negative test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect(page.locator("//div[@class='alert-danger']")).not.toBeVisible();
});
