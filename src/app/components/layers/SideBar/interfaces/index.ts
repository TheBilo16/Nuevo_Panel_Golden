interface IdataProps {
    icon : JSX.Element,
    title : string,
    link : string
}

interface Ilist {
    type : string,
    icon : JSX.Element,
    title : string,
    link? : string,
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