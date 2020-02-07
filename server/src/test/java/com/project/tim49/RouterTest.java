package com.project.tim49;

import org.junit.runner.RunWith;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringRunner;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.transaction.annotation.Transactional;
import selenium.SearchPage;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

import java.util.concurrent.TimeUnit;

import static org.testng.AssertJUnit.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment=WebEnvironment.RANDOM_PORT)
@TestPropertySource("classpath:application-test.properties")
public class RouterTest extends AbstractTransactionalJUnit4SpringContextTests {
    @LocalServerPort
    private int port;
    private WebDriver browser;

    private SearchPage searchPage;

    private String base;

    @Before
    public void setUp() {
        // instantiate chrome browser
        System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver.exe");
        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.setCapability("marionette",true);

        browser = new ChromeDriver(chromeOptions);
        //maximize window
        browser.manage().window().maximize();
        this.base = "http://localhost:" + port;
        System.out.println(this.base);
    }

    @Test
    @Transactional
    public void testPreDefinedAppointment() {
        System.out.println(this.base);
        browser.navigate().to(base+"/#/login");
        (new WebDriverWait(browser, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.name("email")));
        browser.findElement(By.name("email")).sendKeys("patient1@kcv.rs");
        browser.findElement(By.name("password")).sendKeys("123456");
        browser.findElement(By.cssSelector(".btn-primary")).click();

        (new WebDriverWait(browser, 10))
               .until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@id=\"dropdown1\"]")));
        WebElement optionsButton =  browser.findElement(By.xpath("//button[@id=\"dropdown1\"]"));
        optionsButton.click();
        WebElement appointmentLink =  browser.findElement(By.xpath("//a[@id=\"appointment1\"]"));
        appointmentLink.click();
        (new WebDriverWait(browser, 10))
                .until(ExpectedConditions.presenceOfElementLocated( By.xpath("//button[@id=\"appointment13\"]")));
        browser.findElement(By.xpath("//button[@id=\"appointment13\"]")).click();
        try{
            waitForAlert(browser);
        }catch (InterruptedException e){
            System.out.println(e);
        }
        Alert alert = browser.switchTo().alert();
        String alertText = alert.getText();
        alert.dismiss();
        assertEquals(alertText,
                   "Successfully selected an appointment");

    }

    @Test
    @Transactional
    public void testSearchAndScheduleAppointment() {
        browser.navigate().to(base+"/#/login");
        browser.findElement(By.name("email")).sendKeys("patient1@kcv.rs");
        browser.findElement(By.name("password")).sendKeys("123456");
        browser.findElement(By.cssSelector(".btn-primary")).click();

        browser.navigate().to(base+"/#/patient");
        (new WebDriverWait(browser, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".btn-light")));
        browser.findElement(By.cssSelector(".btn-light")).click();
        (new WebDriverWait(browser, 10))
                .until(ExpectedConditions.visibilityOf( browser.findElement(By.xpath("//select[@formcontrolname=\"typeOfExamination\"]//preceding::input[2]"))));
        browser.findElement(By.xpath("//select[@formcontrolname=\"typeOfExamination\"]//preceding::input[2]")).sendKeys("Healty living");

        browser.findElement(By.xpath("//select[@formcontrolname=\"typeOfExamination\"]")).click();
        (new WebDriverWait(browser, 10))
                .until(ExpectedConditions.visibilityOf( browser.findElement(By.xpath("//option[@value=\"1\"]"))));
        browser.findElement(By.xpath("//option[@value=\"1\"]")).click();
        browser.findElement(By.cssSelector(".btn-primary")).click();
        browser.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        browser.findElement(By.xpath("//button[@id=\"optionsButtonSearch1\"]")).click();
        (new WebDriverWait(browser, 10))
                .until(ExpectedConditions.visibilityOf( browser.findElement(By.xpath("//a[@id=\"doctorts1\"]"))));
        browser.findElement(By.xpath("//a[@id=\"doctorts1\"]")).click();

        try {
            (new WebDriverWait(browser, 10))
                    .until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@id=\"optionsDoctor10\"]")));
            WebElement buttonOptions = browser.findElement(By.xpath("//button[@id=\"optionsDoctor10\"]"));
            buttonOptions.click();
        }
        catch(org.openqa.selenium.StaleElementReferenceException ex)
        {
            WebElement buttonOptions = browser.findElement(By.xpath("//button[@id=\"optionsDoctor10\"]"));
            buttonOptions.click();
        }
        browser.findElement(By.xpath("//a[@id=\"showDoctor10\"]")).click();
        (new WebDriverWait(browser, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@id=\"select13:10\"]")));
        browser.findElement(By.xpath("//button[@id=\"select12:10\"]")).click();
        (new WebDriverWait(browser, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.xpath("//select[@name=\"formTOE\"]")));
        browser.findElement(By.xpath("//button[@type=\"submit\"]")).click();
        try{
            waitForAlert(browser);
        }catch (InterruptedException e){
            System.out.println(e);
        }
        Alert alert = browser.switchTo().alert();
        String alertText = alert.getText();
        alert.dismiss();
        assertEquals(alertText,
                "Appointment request sent");


        browser.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);

//        searchPage.getInputFrom().sendKeys("Belgerudveien 1 (Oslo)");
//        searchPage.getInputTo().sendKeys("Bergerveien (Asker)");
        //searchPage.getButtonFind().click();


        // assertEquals(searchPage.getSpanError().getText(),
        //   "Invalid stop or name in 'from' field. Make sure you spelled it correctly.");

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

    @Test
    @Transactional
    public void testReserveOrdination() {
        browser.navigate().to(base+"/#/login");
        browser.findElement(By.name("email")).sendKeys("adminc1@kcv.rs");
        browser.findElement(By.name("password")).sendKeys("123456");
        browser.findElement(By.cssSelector(".btn-primary")).click();

        (new WebDriverWait(browser, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@id=\"dropdownMenuButton2\"]")));
        WebElement optionsButton =  browser.findElement(By.xpath("//button[@id=\"dropdownMenuButton2\"]"));
        optionsButton.click();
        (new WebDriverWait(browser, 10))
                .until(ExpectedConditions.visibilityOf( browser.findElement(By.xpath("//a[@id=\"selectOrd2\"]"))));
        browser.findElement(By.xpath("//a[@id=\"selectOrd2\"]")).click();
        (new WebDriverWait(browser, 10))
                .until(ExpectedConditions.presenceOfElementLocated( By.xpath("//button[@id=\"showAvailable62\"]")));
        browser.findElement(By.xpath("//button[@id=\"showAvailable62\"]")).click();
        (new WebDriverWait(browser, 10))
                .until(ExpectedConditions.presenceOfElementLocated( By.xpath("//div[@id=\"modal2\"]")));
        browser.findElement(By.xpath("//button[@class='btn btn-secondary']//self::button[1]")).click();
        browser.findElement(By.xpath("//button[@id='btnCreateAppointment']")).click();
        try{
            waitForAlert(browser);
        }catch (InterruptedException e){
            System.out.println(e);
        }
        Alert alert = browser.switchTo().alert();
        String alertText = alert.getText();
        alert.dismiss();
        assertEquals(alertText,
                "Appointment succesfully created");

    }

    @After
    public void tearDown() {
        browser.close();
    }
    private void waitForAlert(WebDriver driver) throws InterruptedException {
        int i=0;
        while(i++<5)
        {
            try
            {
                Alert alert = driver.switchTo().alert();
                break;
            }
            catch(NoAlertPresentException e)
            {
                Thread.sleep(1000);
                continue;
            }
        }
    }
}
