input.onButtonPressed(Button.A, function () {
    TestVariable = ToggleVariable(TestVariable)
    basic.showString("" + (TestVariable))
})
function ToggleVariable (BooleanVariable: boolean) {
    if (BooleanVariable) {
        return false
    } else if (!(BooleanVariable)) {
        return true
    } else {
        return BooleanVariable
    }
}
let TestVariable = false
TestVariable = false
