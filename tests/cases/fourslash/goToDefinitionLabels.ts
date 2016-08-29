/// <reference path='fourslash.ts' />

/////*label1Definition*/label1: while (true) {
////    /*label2Definition*/label2: while (true) {
////        break /*1*/label1;
////        continue /*2*/label2;
////        () => { break /*3*/label1; }
////        continue /*4*/unknownLabel;
////    }
////}

verify.goToDefinition("1", "label1Definition");
verify.goToDefinition("2", "label2Definition");
// labels accross function boundaries
verify.goToDefinition("3", "label1Definition");

// undefined label
goTo.marker("4");
verify.not.definitionLocationExists();
