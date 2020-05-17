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
    children? : JSX.Element,
    list : Ilist
}

export {
    IdataProps,
    Ilist,
    Iprops
}