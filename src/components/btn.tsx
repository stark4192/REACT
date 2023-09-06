import React, { ReactNode } from "react";

interface Props{
    children: ReactNode
    onClick: () => void
    color?: 'primary'|'secondary'|'danger'|'red'
}

const btn = ({children,onClick,color='primary'}:Props) => {
    return <button type="button" className={"btn btn-" + color} onClick={onClick}>{children}</button>;
};

export default btn;
