package selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;


import java.util.List;

import static org.testng.AssertJUnit.assertEquals;


public class RouterTest {

    private WebDriver browser;

    private SearchPage searchPage;


    @BeforeMethod
    public void setUp() {
        // instantiate chrome browser
        System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver.exe");
        //

        // instantiate firefox browser
       // System.setProperty("webdriver.gecko.driver","src/test/resources/geckodriver");
        ChromeOptions firefoxOptions = new ChromeOptions();
        firefoxOptions.setCapability("marionette",true);
//        browser = new FirefoxDriver(firefoxOptions);


        browser = new ChromeDriver(firefoxOptions);
        //maximize window
        browser.manage().window().maximize();

        //navigate

        //searchPage = PageFactory.initElements(browser, SearchPage.class);

    }

    @Test
    public void testSearchRouteInvalidInput() {
        browser.navigate().to("http://localhost:4200/#/login");
        browser.findElement(By.name("email")).sendKeys("patient1@kcv.rs");
        browser.findElement(By.name("password")).sendKeys("123456");
        browser.findElement(By.cssSelector(".btn-primary")).click();
        //browser.navigate().to("http://localhost:4200/#/patient");
        (new WebDriverWait(browser, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".btn-light")));
        browser.findElement(By.cssSelector(".btn-light")).click();
        (new WebDriverWait(browser, 10))
                .until(ExpectedConditions.visibilityOf( browser.findElement(By.xpath("//select[@formcontrolname=\"typeOfExamination\"]//preceding::input[2]"))));
        browser.findElement(By.xpath("//select[@formcontrolname=\"typeOfExamination\"]//preceding::input[2]")).sendKeys("Healty living");
        browser.findElement(By.cssSelector(".btn-primary")).click();

//        searchPage.getInputFrom().sendKeys("Belgerudveien 1 (Oslo)");
//        searchPage.getInputTo().sendKeys("Bergerveien (Asker)");
//        //searchPage.getButtonFind().click();


       // assertEquals(searchPage.getSpanError().getText(),
             //   "Invalid stop or name in 'from' field. Make sure you spelled it correctly.");

    }

    @Test
    public void testSearchRoute() {
        //searchPage.ensureIsDisplayed();

//        searchPage.getInputFrom().sendKeys("Belgerudveien");
//        (new WebDriverWait(browser, 10))
//                .until(ExpectedConditions.visibilityOfElementLocated(By
//                        .cssSelector("#suggestionlist-for-origin_destination_from0")));
//        browser.findElements(By.cssSelector("#suggestionlist-for-origin_destination_from0")).get(0).click();
//
//
//        searchPage.getInputTo().sendKeys("Bergerveien");
//        (new WebDriverWait(browser, 10))
//                .until(ExpectedConditions.visibilityOfElementLocated(By
//                        .cssSelector("#suggestionlist-for-origin_destination_to0")));
//        browser.findElements(By.cssSelector("#suggestionlist-for-origin_destination_to0")).get(0).click();

        //searchPage.getButtonFind().click();

//        (new WebDriverWait(browser, 10))
//                .until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"labeltravelTime\"]")));
//
//        (new WebDriverWait(browser, 10))
//                .until(ExpectedConditions.visibilityOfElementLocated(By
//                        .cssSelector("li.TripPattern:nth-child(1) > div:nth-child(1)")));
//
//        List<WebElement> routes = browser.findElements(By.cssSelector("div.Clickable.TripPattern__summary"));
//        assertEquals(routes.size(), 5);
//
//        routes.get(0).click();

    }

    @AfterMethod
    public void tearDown() {
        browser.close();
    }
}
