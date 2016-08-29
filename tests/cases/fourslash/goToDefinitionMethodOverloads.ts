/// <reference path='fourslash.ts' />

////class MethodOverload {
////    /*staticMethodOverload1*/static /*staticMethodOverload1Name*/method();
////    /*staticMethodOverload2*/static method(foo: string);
////    /*staticMethodDefinition*/static method(foo?: any) { }
////    /*instanceMethodOverload1*/public /*instanceMethodOverload1Name*/method(): any;
////    /*instanceMethodOverload2*/public method(foo: string);
/////*instanceMethodDefinition*/public method(foo?: any) { return "foo" }
////}

////// static method
////MethodOverload./*staticMethodReference1*/method();
////MethodOverload./*staticMethodReference2*/method("123");

////// instance method
////var methodOverload = new MethodOverload();
////methodOverload./*instanceMethodReference1*/method();
////methodOverload./*instanceMethodReference2*/method("456");

verify.goToDefinition("staticMethodReference1", "staticMethodOverload1");
verify.goToDefinition("staticMethodReference2", "staticMethodOverload2");
verify.goToDefinition("instanceMethodReference1", "instanceMethodOverload1");
verify.goToDefinition("instanceMethodReference2", "instanceMethodOverload2");
verify.goToDefinition("staticMethodOverload1Name", "staticMethodDefinition");
verify.goToDefinition("instanceMethodOverload1Name", "instanceMethodDefinition");
