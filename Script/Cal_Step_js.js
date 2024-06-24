﻿Given("I have opened the Windows Calculator", function() {
  wndCalculator = Aliases.ApplicationFrameHost.wndCalculator;
  wndCalculator.Activate();
  Aliases.explorer.wndShell_TrayWnd.ReBarWindow32.MSTaskSwWClass.MSTaskListWClass.Click(561, 32);
  wndCalculator.Maximize();
});

When("I enter {arg}", function(param1) {
  let landmarkTarget = Aliases.Microsoft_WindowsCalculator.Calculator.NavView.LandmarkTarget;
  let namedContainerAutomationPeer = landmarkTarget.Number_pad;
  let button = namedContainerAutomationPeer.Two;
  button.Click();
  let button2 = namedContainerAutomationPeer.Five;
  button2.Click();
  namedContainerAutomationPeer = landmarkTarget.Standard_operators;
  namedContainerAutomationPeer.Plus.Click();
  button.Click();
  button2.Click();
  namedContainerAutomationPeer.Equals.Click();
});


Then("the result should be {arg} on the calculator display", function(param1) {
  let textBlock = Aliases.Microsoft_WindowsCalculator.Calculator.NavView.LandmarkTarget.Display_is_50.TextContainer.NormalOutput;
  textBlock.DblClick(26, 17);
  OCR.Recognize(textBlock).BlockByText("50").DblClick();
  aqObject.CheckProperty(Aliases.Microsoft_WindowsCalculator.Calculator.NavView.LandmarkTarget.Display_is_50.TextContainer.NormalOutput, "Text", cmpEqual, "50");
});

