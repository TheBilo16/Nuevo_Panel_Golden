import React, { useState, createRef } from "react";

function useActivateItem<Type>(classNameElement : string){
    const refElementHide = createRef<Type | any>();

    const onPress = () : void => {
        const element = refElementHide.current;
        if(element?.classList.contains(classNameElement)){
            element?.classList.remove(classNameElement);
        }else{
            element?.classList.add(classNameElement);
        }
    }

    return {
        onPress,
        refElementHide
    }
}

export default useActivateItem;