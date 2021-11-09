const { Builder, By, } = require("selenium-webdriver");
const { Type } = require("selenium-webdriver/lib/logging");
const driver = new Builder ()
.forBrowser('firefox')
.build();

async function simpleRegistration() {
    try {
        await driver.get("https://delivio.by/login");
        await driver.findElement(By.xpath('//input [@class=" form-control"]')).sendKeys("297601601");
        await driver.findElement(By.className("button expanded")).click();
        await driver.findElement(By.xpath('//input [@type="password"]')).sendKeys("ewUr8Rx");
        await driver.findElement(By.css('button.button')).click();
    } catch (error) {
        console.log(error)
    }
}
simpleRegistration();

async function selectCity() {
    try {
        await driver.findElement(By.xpath('//div [@class="variant-0-3-25 positiveVariant-0-3-26"]')).click();
    } catch (error) {
        console.log(error)
    }
    }
    selectCity();

async function input() {
    try {
        await driver.get("https://delivio.by");
        await driver.findElement(By.xpath('//input [@class="deliveryAddress"]')).sendKeys("Минск, улица Немига, 5");
        await driver.catch (By.xpath('//input [@aria-activedescendant="react-autowhatever-addressPickerInput--item-0"]'));
        await driver.findElement (By.xpath('//input [@aria-activedescendant="deliveryAddress-suggestions-container open]//li[1]"]')).click();
    } catch (error){
        console.log(error)
    }
    }
    input ();