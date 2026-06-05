import React, {useState} from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
    openBuyWindow: (uid, orderData) => {},
    closeWindow: () => {},
});

export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUid, setSelectedStockUid] = useState("");
    const [selectedOrder, setSelectedOrder] = useState(null);


    const handleOpenBuyWindow =(uid, orderData) => {
        setSelectedStockUid(uid);
          setSelectedOrder(orderData);
        setIsBuyWindowOpen(true);
    };

    const handleCloseWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedStockUid("");
        setSelectedOrder(null);
    };

    return (
        <GeneralContext.Provider 
            value={
                {
                    openBuyWindow: handleOpenBuyWindow, 
                    closeWindow: handleCloseWindow,
                    isBuyWindowOpen,
                }
            }>
            {props.children}
            {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUid} order={selectedOrder} />}
        </GeneralContext.Provider>
    )
};

export default GeneralContext;