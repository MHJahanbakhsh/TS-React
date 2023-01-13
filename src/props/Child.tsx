interface ChildProps {
    color:string;
    children?:never[]
}


export const Child = ({color}:ChildProps)=>{
    return <div>Hi There!</div>
}

