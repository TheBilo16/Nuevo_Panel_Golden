interface IdataProps {
    icon : JSX.Element,
    title : string
}

interface Ilist {
    type : string,
    icon : JSX.Element,
    title : string,
    subitems? : IdataProps[]
}

interface Iprops {
    list : Ilist
}

export {
    IdataProps,
    Ilist,
    Iprops
}