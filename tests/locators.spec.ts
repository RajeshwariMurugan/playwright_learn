import{test,expect}from "@playwright/test";

test("find locators",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/");
     let title:string=await page.title();
    console.log("title: ",title);
    const logo:Locator= page.getByAltText("nopCommerce demo store")
    logo.click();
     await expect(logo).toBeVisible();

})
