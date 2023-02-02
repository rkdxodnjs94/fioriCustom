sap.ui.define(["sap/ui/core/Component"],
function (Component){
    "use strict";
    return {
        onClick: function(oEvent) {
            // debugger
            var oTable = this._getView().byId("com.mdpert.notebook::OrderedProductList--fe::table::OrderedProduct::LineItem-innerTable");
            alert(oTable)
        }
    };
});
