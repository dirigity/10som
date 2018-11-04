console.log("Start");

const {Builder, By, Key, until} = require('selenium-webdriver');

(async function kk() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://www.mental-math-trainer.com/');
    await driver.findElements(By.css("input")).then(function (elements){ 
        console.log(elements.length);
        elements.forEach(function(element){
            if(!element.Selected){
                element.click();
            }
        });
    });
    for (let i = 0; i < 1000000; i++) {
        var q = await driver.findElement(By.id("question"));
        var a = solve( await q.getText());
        await driver.findElement(By.id("question-answer")).sendKeys(a);
    }
        
    
    
    
    
    }finally {
    //await driver.quit();
  }
})();

function solve(s){
    console.log("---")
    if(s.includes("+")){
        var a = parseInt(s.substr(0, s.indexOf('+')));
        var b = parseInt(s.substr(s.indexOf('+')+2));
        return a + b;
    }
    if(s.includes("-")){
        var a = parseInt(s.substr(0, s.indexOf('-')));
        var b = parseInt(s.substr(s.indexOf('-')+2));
        return a - b;
    }
    if(s.includes("÷")){
        var a = parseInt(s.substr(0, s.indexOf('÷')));
        var b = parseInt(s.substr(s.indexOf('÷')+2));
        return a / b;
        
    }
    if(s.includes("×")){
        var a = parseInt(s.substr(0, s.indexOf('×')));
        var b = parseInt(s.substr(s.indexOf('×')+2));
        return a * b;
    
    }
    if(s.includes("√")){
        return Math.sqrt(parseInt(s.substr(1)));
    }
    if(s.includes("²")){
        return Math.pow(parseInt(s.substr(0,s.length)),2);
    }
    return("algo chungo pasa");
}
