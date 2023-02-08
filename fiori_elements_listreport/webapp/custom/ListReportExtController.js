sap.ui.define(["sap/m/MessageToast"],
function (MessageToast) {
    "use strict";
    return {
        init : function () {
            alert("init");
        },
        onClick : function (oEvent) {
            this.getSelectedContexts().forEach((value, index, array) => {
                var oContext = this.getSelectedContexts()[index];
                var oElement = oContext.oBinding.oCache.aElements[value.iIndex];
                
                
                var sManufacturer = oElement.manufacturer;
                var sCountryCode = oElement.countryCode;
                var sFoundingYear = oElement.foundingYear;
                // var sSerialNumber = oElement.serialNumber;
                // var mPrice = oElement.price;
                // var sRating = oElement.rating;
                // var mDeliveryTime = oElement.deliveryTime;
    
                debugger
                // var sMessage = "회사 \t " + sManufacturer + "\n시리얼 넘버 \t " + sSerialNumber + "\n가격 \t " + mPrice + "\n별점 \t " + sRating + "\n배송소요시간 \t " + mDeliveryTime;
                var sMessage = "제조사 : " + sManufacturer + "\n국가코드 : " + sCountryCode + "\n설립연도 : " + sFoundingYear; 
                MessageToast.show(sMessage);
            });
        }
    };
});
