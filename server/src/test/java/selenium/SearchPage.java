package selenium;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class SearchPage {

    private WebDriver driver;

    @FindBy(xpath = "//*[@name=\"email\"]")
    private WebElement inputEmail;

    @FindBy(xpath = "//*[@name=\"password\"]")
    private WebElement inputPass;

    @FindBy(xpath = "//button[@class=\"btn-primary\"]")
    private WebElement buttonSubmit;

    @FindBy(xpath = "//*[@id=\"InputError_origin_destination_from\"]")
    private WebElement spanError;

    //*[@id="typeahead-00E-9662-option-0"]
    //*[@id="typeahead-00E-9662-option-0"]
    //*[@id="typeahead-00E-2308-option-0"]
    //#typeahead-00E-2308-option-0

    @FindBy(xpath = "//*[@id=\"typeahead-00E-2170-option-0\"]/div/span[1]")
    private WebElement selectItemFrom;

    @FindBy(xpath = "//*[@id=\"typeahead-00E-2170-option-0\"]/div/span[1]")
    private WebElement selectItemTo;

    public SearchPage() {
    }

    public SearchPage(WebDriver driver) {
        this.driver = driver;
    }

    public void ensureIsDisplayed(){
        (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(inputEmail));
    }

    public void ensureIsDisplayedError(){
        (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(spanError));
    }

    public void ensureIsDisplayedSelectFrom(){
        (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.visibilityOf(selectItemFrom));
    }

    public void ensureIsDisplayedSelectTo(){
        (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.visibilityOf(selectItemTo));
    }

    public WebElement getInputEmail() {
        return inputEmail;
    }

    public WebElement getInputPass() {
        return inputPass;
    }

    public WebElement getButtonSubmit() {
        return buttonSubmit;
    }

    public WebElement getSpanError() {
        return spanError;
    }

    public WebElement getSelectItemFrom() {
        return selectItemFrom;
    }

    public WebElement getSelectItemTo() {
        return selectItemTo;
    }
}
