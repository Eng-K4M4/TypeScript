/// <reference path='fourslash.ts'/>

////function f(/*fnDecl*/this: number) {
////    return /*fnUse*/this;
////}
/////*cls*/class C {
////    constructor() { return /*clsUse*/this; }
////    get self(/*getterDecl*/this: number) { return /*getterUse*/this; }
////}

verify.goToDefinition("fnUse", "fnDecl");
verify.goToDefinition("clsUse", "cls");
verify.goToDefinition("getterUse", "getterDecl");
