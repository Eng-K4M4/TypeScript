/// <reference path='fourslash.ts' />

/////*constructorDefinition*/class ImplicitConstructor {
////}
////var implicitConstructor = new /*constructorReference*/ImplicitConstructor();

verify.goToDefinition("constructorReference", "constructorDefinition");
