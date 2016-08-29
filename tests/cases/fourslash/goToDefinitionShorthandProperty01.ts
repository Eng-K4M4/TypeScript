/// <reference path='fourslash.ts' />

//// var /*valueDeclaration1*/name = "hello";
//// var /*valueDeclaration2*/id = 100000;
//// declare var /*valueDeclaration3*/id;
//// var obj = {/*valueDefinition1*/name, /*valueDefinition2*/id};
//// obj./*valueReference1*/name;
//// obj./*valueReference2*/id;

verify.goToDefinition("valueDefinition1", "valueDeclaration1");
verify.goToDefinitions("valueDefinition2", ["valueDeclaration2", "valueDeclaration3"]);
verify.goToDefinition("valueReference1", "valueDefinition1");
verify.goToDefinition("valueReference2", "valueDefinition2");
